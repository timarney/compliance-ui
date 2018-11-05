const checkPassed = (data, key, title) => {
  if (data && data.verifications && data.verifications.length) {
    return data.verifications.map((item, index) => {
      return { index: `${key}-${index}`, key, title, status: item.passed };
    });
  }

  return [{ index: key, key: `${key}`, title, status: false }];
};

export const checkStatus = data => {
  if (!data || !data.ITSG33a) {
    return {
      items: []
    };
  }

  let passed = 0;
  let elements = [];
  const d = data.ITSG33a;
  const total = Object.keys(d).length;

  Object.keys(d).map(key => {
    let name = "";
    if (d[key] && d[key].name) {
      name = " - " + d[key].name;
    }

    const keyName = key.replace(/_/g, " ");
    const title = `${keyName} ${name}`;
    const els = checkPassed(d[key], key, title);

    if (total >= 2) {
      // show the latest verification => home page
      const latest = els[els.length - 1];
      if (latest.status) {
        passed++;
      }
      elements.push(latest);
    } else {
      // => details page
      elements = els;
    }
  });

  return { items: elements, passed, total };
};
