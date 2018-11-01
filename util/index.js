const checkPassed = data => {
  if (data && data.verifications && data.verifications.length) {
    return data.verifications[data.verifications.length - 1].passed;
  }

  return false;
};

export const checkStatus = data => {
  if (!data || !data.ITSG33a) {
    return {
      allPassed: false,
      items: []
    };
  }

  let items;
  let allPassed = true;
  const d = data.ITSG33a;

  items = Object.keys(d).map(key => {
    const status = checkPassed(d[key]) ? true : false;

    if (!status) {
      allPassed = false;
    }

    let name = "";
    if (d[key] && d[key].name) {
      name = " - " + d[key].name;
    }

    const keyName = key.replace(/_/g, " ");
    const title = `${keyName} ${name}`;

    return { key, title, status };
  });

  return { allPassed, items };
};
