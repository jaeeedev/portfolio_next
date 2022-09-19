import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
* {
 margin:0;
 padding:0;
 box-sizing:border-box;   
 font-family: Pretendard;
}
a { cursor: pointer;
    text-decoration: none; }
code {
    font-family: Pretendard;
}
`;
