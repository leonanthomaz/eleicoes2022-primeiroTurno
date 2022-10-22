import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    body {
        box-sizing: border-box;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }

    .geral{

        .vt{
            border: 8px solid #3a3a3a; /**/
            border-left: 8px solid red;
            border-top: ${({validos}) => (validos ? '8px solid red' : '8px solid transparent')};

            /* border-top: 8px solid red; */
            /* border-right: 8px solid red; */
            border-bottom: 8px solid transparent;
            border-radius: 50%;
            z-index: 9999999;

            width: 300px;
            height: 300px;
        }
       
    }

`;