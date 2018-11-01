import { css } from "emotion";

const bar = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 56px;
  padding: 0;
  background: #262626;
  z-index: 50;
`;

const h1 = css`
  float: left;
  margin: 0;
  padding: 0 15px;
  font-size: 24px;
  line-height: 56px;
  font-weight: 400;
  color: #fff;
`;

const Header = () => (
  <header className={bar}>
    <h1 className={h1}>Are we compliant yet?</h1>
  </header>
);

export default Header;
