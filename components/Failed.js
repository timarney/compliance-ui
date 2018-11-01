import { css } from "emotion";
const Failed = () => {
  const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  return <div className={center}>⚠️ Failed to fetch GraphQL API data</div>;
};

export default Failed;
