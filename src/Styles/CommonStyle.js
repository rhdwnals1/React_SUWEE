import { css } from "styled-components";

export const commonContainer = css`
  width: 700px;
  margin: 0 auto;
`;

export const clearFix = css`
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const positionCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const font18 = css`
  font-size: 18px;
  font-weight: 700;
  color: #333333;
`;

export const font16 = css`
  font-size: 16px;
  color: #666666;
`;

export const theme = {
  yellow: "rgba(252, 235, 96, 1)",
  purple: "rgba(164, 81, 247, 1)",
  boldPurple: "#6A31A4",
  yellowOpacity: "rgba(252, 235, 96, 0.5)",
  purpleOpacity: "rgba(164, 81, 247, 0.5)",
  commonContainer,
  clearFix,
  positionCenter,
  flexCenter,
  font18,
  font16,
};

export default theme;
export const componentGuide = css`
  border-left: 1px solid #dfdfdf;
  border-bottom: 12px solid #f7f7f7;
`;

export const boxShadow = css`
  box-shadow: 12px 8px 24px rgba(0, 0, 0, 0.2), 4px 8px 8px rgba(0, 0, 0, 0.1),
    0 0 2px rgba(0, 0, 0, 0.24);
`;

export const bookShadow = css`
  box-shadow: 8px 4px 20px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.1),
    0 0 2px rgba(0, 0, 0, 0.24);
`;

export const line = css`
  width: 1px;
  height: 60%;
  background-color: #e2e2e1;
`;
