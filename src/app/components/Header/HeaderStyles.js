import styled from "styled-components";

export const Container = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
background: #eeeeee;

`;

export const Titulo = styled.h1`
    margin-left: 30px;
    color: #040461;

    @media(max-width: 500px){
        font-size: 24px;
    }
`;

export const Brasao = styled.div`
margin-right: 30px;

img{
    width: 80px;
}

@media(max-width: 500px){
    img{
        width: 60px;
    }
}
`;