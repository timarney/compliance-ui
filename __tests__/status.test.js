/* eslint-env jest */
import { checkStatus } from "../util";
import { singleControlData } from "../api/sample.single";
import { multiControlData } from "../api/sample.multi";

describe("Check Control Status", () => {
  it('It gets correct totals when passing 1 control"', () => {
    const result = checkStatus(singleControlData);
    expect(result.passed).toEqual(1);
    expect(result.total).toEqual(1);
  });

  it('It gets correct totals when passing multiple controls"', () => {
    const result = checkStatus(multiControlData);
    expect(result.passed).toEqual(1);
    expect(result.total).toEqual(2);
  });
});
