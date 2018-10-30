import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

const checkPassed = data => {
  if (data && data.verifications && data.verifications.passed) {
    return data.verifications.passed;
  }

  return false;
};

// @todo refactor this to just return array with data not markup
export const checkStatus = (
  data,
  style = { test: "", passing: "", failing: "" }
) => {
  if (!data || !data.ITSG33a) {
    return { allPassed: false, elements: null };
  }

  const d = data.ITSG33a;
  let allPassed = true;

  let elements = Object.keys(d).map(key => {
    if (!status) {
      allPassed = false;
    }

    const status = checkPassed(d[key]) ? style.passing : style.failing;

    let name = "";
    if (d[key] && d[key].name) {
      name = " - " + d[key].name;
    }

    const keyName = key.replace(/_/g, " ");

    const title = `${keyName} ${name}`;

    return (
      <Tooltip
        // options
        title={title}
        position="top"
        trigger="mouseenter"
      >
        <div class={[style.test, status].join(" ")} />
      </Tooltip>
    );
  });

  return { allPassed, elements };
};
