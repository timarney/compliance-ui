const checkPassed = (data, key, title) => {
  if (data && data.verifications && data.verifications.length) {
    return data.verifications.map((item, index) => {
      return { index: `${key}-${index}`, key, title, status: item.passed };
    });
  }

  return [{ index: key, key: `${key}`, title, status: false }];
};

export const checkStatus = (data = false) => {
  if (!data || !data.ITSG33a) {
    return { items: [], passed: 0, total: -1 };
  }

  let passed = 0;
  let elements = [];
  const d = data.ITSG33a;
  const keys = Object.keys(d);
  const total = keys.length;

  keys.map(key => {
    let name = "";

    if (d[key] && d[key].name) {
      name = " - " + d[key].name;
    }

    const keyName = key.replace(/_/g, " ");
    const title = `${keyName} ${name}`;
    const els = checkPassed(d[key], key, title);
    const latest = els[els.length - 1];

    if (total >= 2) {
      // push only the latest verification => home page
      elements.push(latest);
    } else {
      // => details page
      elements = els;
    }

    if (latest.status == "true") {
      passed++;
    }
  });

  return { items: elements, passed, total };
};
