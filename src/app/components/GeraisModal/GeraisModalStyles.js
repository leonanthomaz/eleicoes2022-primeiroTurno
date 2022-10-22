import styled from "styled-components";

export const VT = styled.div`
    border: 8px solid #3a3a3a; /**/
    border-left: 8px solid red;
    /* border-left: ${({branco}) => (branco > (parseFloat(branco)/100) * 25 ? '8px solid purple' : '8px solid red')}; */
    border-top: ${({validos}) => (parseFloat(validos) > (parseFloat(validos)/100) * 25 ? '8px solid red' : '8px solid gray')};
    /* border-top: ${({branco}) => (branco > (parseFloat(branco)/100) * 25 ? '8px solid purple' : '8px solid transparent')}; */
    border-right: ${({validos}) => (parseFloat(validos) > (parseFloat(validos)/100) * 50 ? '8px solid red' : '8px solid gray')};
    /* border-top: ${({branco}) => (branco > (parseFloat(branco)/100) * 50 ? '8px solid purple' : '8px solid transparent')}; */
    border-bottom: 8px solid transparent;
    border-radius: 50%;
    z-index: 9999999;

    width: 300px;
    height: 300px;
`;