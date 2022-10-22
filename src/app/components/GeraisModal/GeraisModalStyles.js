import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: auto auto;


@media(max-width: 1000px){
    display: flex;
    flex-direction: column;
}


.left{
    flex: 1;
}

.right{
    flex: 2.5;
}
`;

export const Box1 = styled.div`
display: grid;
grid-template-columns: auto;

@media(max-width: 1000px){
    align-items: center;
    justify-content: center;
}
`;

export const Box2 = styled.div`
display: grid;
grid-template-columns: auto auto auto;
align-items: center;
justify-content: center;
gap: 10px;
`;

export const Box3 = styled.div`
display: grid;
grid-template-columns: auto auto;
align-items: center;
justify-content: center;
gap: 10px;
`;

export const Circulo1 = styled.div`
border: 5px solid #303030;

border-radius: 50%;
width: 220px;
height: 220px;
position: relative;
text-align: center;

@media(max-width: 760px){
    width: 180px;
    height: 180px;
}

.aaa{
    margin-top: 80px;
    margin-left: 10px;
    position: absolute;

    @media(max-width: 760px){
        margin-top: 65px;
        margin-left: 16px;
    }
    
    h3{
    font-size: 34px;
    font-weight: 700;

    @media(max-width: 760px){
        font-size: 25px;
    }

    }
    span{

        @media(max-width: 760px){
            font-size: 18px;
        }
    }
}

`;

export const Circulo2 = styled.div`
border: 5px solid #303030;
border-radius: 50%;
width: 120px;
height: 120px;
position: relative;
text-align: center;

@media(max-width: 760px){
    width: 100px;
    height: 100px;
}

.bbb{
    margin-top: 34px;
    margin-left: 10px;
    position: absolute;

    @media(max-width: 760px){
        margin-top: 27px;
        margin-left: 7px;
    }

    h3{
    font-size: 18px;
    font-weight: 700;

    @media(max-width: 760px){
        font-size: 16px;
    }

    }
    span{
        font-size: 16px;

        @media(max-width: 760px){
            font-size: 14px;
        }
    }
}

`;

export const Circulo3 = styled.div`
border: 5px solid #303030;
border-radius: 50%;
width: 120px;
height: 120px;
position: relative;
text-align: center;

@media(max-width: 760px){
    width: 120px;
    height: 120px;
}

.ccc{
    margin-top: 25px;
    margin-left: 12px;
    position: absolute;

    @media(max-width: 760px){
        margin-top: 25px;
        margin-left: 12px;
    }

    h3{
    font-size: 17px;

    @media(max-width: 760px){
        font-size: 12px;
    }

    }
    span{
        font-size: 16px;
        @media(max-width: 760px){
            font-size: 14px;
        }
    }
}

`;

export const Validos = styled.div`
border: 2px solid red;
position: absolute;
border-radius: 50%;

`;

export const Brancos = styled.div`
border: 2px solid red;
`;