import styled from "styled-components";

export const Container = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
background: #eeeeee;
padding-top: 10px;

@media(max-height: 500px){
    height: 60px;
}
`;

export const Titulo = styled.h1`
    margin-left: 30px;
    color: #040461;
    font-weight: 700;

    @media(max-height: 500px){
        font-size: 25px;
    }

    @media(max-width: 760px){
        font-size: 20px;
    }
    
`;

export const Brasao = styled.div`
margin-right: 30px;

img{
    width: 80px;
    margin-bottom: 10px;

    @media(max-height: 500px){
        width: 60px;
    }

    @media(max-width: 760px){
        width: 60px;
    }
}



`;