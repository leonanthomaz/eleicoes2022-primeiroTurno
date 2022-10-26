import styled from "styled-components";

export const Container = styled.div`
/* border: 2px solid red; */
background: #ecececce;
border-radius: 20px;
padding: 30px;

@media(max-width: 760px){
    padding: 10px;
}

`;

export const Header = styled.div`
/* border: 2px solid red; */
display: block;
height: 40px;

`;

export const Title = styled.div`
color: #14141498; 
text-align: center; 
margin-top: 20px;
border-bottom: 3px solid #14141498;
line-height: 5rem;
/* font-family: 'Roboto', sans-serif; */
font-weight: 900;
font-size: 35px;

@media(max-width: 760px){
    font-size: 25px;

}

`;

export const Box = styled.div`
/* box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px; */
display: grid;
grid-template-columns: auto auto;
flex: 1;
padding-top: 50px;

@media(max-width: 760px){
    display: flex;
    flex-direction: column;
    align-items: center;
}

.left{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;

    h3{
        font-size: 40px;
        font-weight: 900;
        color: #187918;
    }

    .left-img{
        padding: 5px;

        width: 200px;
        height: 200px;

        @media(max-width: 760px){
            width: 150px;
            height: 150px;
        }

        img{
            width: 100%;
            background: #838383;
            border-radius: 50%;
        }
    }

    .left-h{

        @media(max-width: 760px){
            text-align: center;
        }

        h4{
            font-size: 20px;
            font-weight: 700;
        }
        h5{
            text-align: center;
            font-size: 14px;
        }   
    }

}

.right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   
    .right-h{
        padding: 10px;

        @media(max-width: 760px){
            text-align: center;
        }

        h3{
            font-size: 40px;
            font-weight: 900;
            color: #090983;
        }

        h4{
            font-size: 20px;
            font-weight: 700;
        }
          
    }

    .right-f{
        display: flex;
        flex-direction: column;
        align-items: center;

       
        span{
            font-size: 16px;
            margin: 10px;
            text-align: center;
        }
    }

    
}


`;

