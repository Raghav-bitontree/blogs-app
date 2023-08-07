import { css } from "@emotion/css";

export const header = css`
  background-color: black;
  height: 40px;
  color: white;
  width: 100vw !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const pageTitleSection = css`
  display: flex;
  padding: 30px 80px;
  justify-content: space-between;
`;

export const addButton = css`
  outline: none;
  cursor: pointer;
  background: black;
  padding: 10px 15px;
  border-radius: 4px;
  color: white;
`;

export const secondaryButton = css`
  ${addButton};
  margin-left: 20px;
  border: 1px solid black;
  background: transparent;
  color: black;
`;

export const tableMargin = css`
  margin: 30px 80px;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
`;

export const inputStyle = css`
  height: 40px;
  border-radius: 6px;
  border: 1px solid #d3d3d3;
  text-indent: 10px;
`;

export const textAreaStyle = css`
  height: 100px;
  border-radius: 6px;
  border: 1px solid #d3d3d3;
  text-indent: 10px;
  padding-top: 10px;
`;

export const addEditFormSubmit = css`
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid #d3d3d3;
  text-indent: 10px;
  background: black;
  color: white;
`;

export const blogLink = css`
  color: blue;
  cursor: pointer;
`;

export const formikError = css`
  color: red;
  font-size: 12px;
  margin-top: -15px;
`;

export const blogListContainer = css`
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const paddingBottom30 = css`
  padding-bottom: 30px;
`;

export const blogInnerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
`;

export const blogByIdContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20%;
  gap: 20px;
`;

export const blogListHeader = css`
  display: flex;
  gap: 10px;
  align-items: center;
  ${paddingBottom30};
`;

export const blogTitle = css`
  font-size: 64px;
`;

export const blogDescription = css`
  color: gray;
  font-size: 20px;
  font-weight: 400;
`;
