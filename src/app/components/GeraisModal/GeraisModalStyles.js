import styled from "styled-components";

export const Teste = styled.div`

.container{
    display: grid;
    grid-template-columns: auto auto;
    border: 2px solid green;

    @media(max-width: 1000px){
        display: flex;
        flex-direction: column;
    }

    .a{
        background: green;
        width: 300px;
        height: auto;
    }

    .b{
        background: blue;
        width: 300px;
        height: auto;
    }

}

`;

export const ContainerPrimario = styled.div`
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

export const ContainerSecundario = styled.div`

display: flex;
justify-content: center;
padding: 10px;

@media(max-width: 450px){
   display: grid;
   grid-template-columns: auto auto;
}

`;

export const Left = styled.div`
display: grid;
grid-template-columns: auto;

@media(max-width: 1000px){
    align-items: center;
    justify-content: center;
}

.left-footer{
    /* border: 2px solid red; */
}
`;

export const Right = styled.div`
display: grid;
grid-template-columns: auto auto auto;
align-items: center;
justify-content: center;
gap: 10px;
`;

export const CirculoPrincipal = styled.div`
border: 5px solid #3daa27;

border-radius: 50%;
width: 250px;
height: 250px;
margin: 10px;
position: relative;
text-align: center;

@media(max-width: 760px){
    width: 180px;
    height: 180px;
}

.circulo-principal-container{
    /* border: 2px solid red; */
    margin-top: 60px;
    margin-left: 42px;
    position: absolute;

    @media(max-width: 760px){
        margin-top: 45px;
        margin-left: 30px;
    }
    
    h3{
        font-size: 36px;

        @media(max-width: 760px){
            font-size: 20px;
        }
    }

    h2{
        font-size: 36px;
        font-weight: 900; 
        color: #090983;
        
        @media(max-width: 760px){
            font-size: 26px;
        }
    }
    span{

        @media(max-width: 760px){
            font-size: 12px;
        }
    }
}

`;

export const CirculoSecundario = styled.div`
border: 5px solid #3daa27;
border-radius: 50%;
width: 150px;
height: 150px;
position: relative;
text-align: center;

@media(max-width: 760px){
    width: 100px;
    height: 100px;
    border: none;
}

.circulo-secundario-container{
    margin-top: 30px;
    margin-left: 23px;
    position: absolute;

    @media(max-width: 760px){
        margin-top: 27px;
        margin-left: 7px;
    }

    h3{
        font-size: 18px;
        font-weight: 700;
        color: #090983;

        @media(max-width: 760px){
            font-size: 16px;
        }

    }

    h5{
        font-size: 18px;
        /* font-weight: 700; */
        margin-left: 7px;
    }

    span{
        font-size: 16px;
        margin-left: 0px;
        
        @media(max-width: 760px){
            font-size: 14px;
        }
    }
}

`;

export const CirculoTerciario = styled.div`
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
border-radius: 20px;
/* border-radius: 50%; */
width: 170px;
height: 135px;
position: relative;
text-align: center;
margin: 10px;

@media(max-width: 760px){
    width: 140px;
    height: 140px;
    /* box-shadow: none; */
}

.circulo-terciario-container{
    margin-top: 34px;
    margin-left: 10px;

    @media(max-width: 760px){
        margin-top: 27px;
        margin-left: 7px;
    }

    h3{
    font-size: 18px;
    font-weight: 700;
    color: #090983;

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

