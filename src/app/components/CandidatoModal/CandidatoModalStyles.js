import styled from "styled-components";

export const Container = styled.div`
/* border: 2px solid red; */
`;

export const Header = styled.div`
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
display: grid;
grid-template-columns: auto auto;
flex: 1;
padding: 10px;

.header-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;


    h3{
        font-size: 40px;
        font-weight: 900;
    }

    h4{
        font-size: 20px;
        font-weight: 700;
    }

    span{
        font-size: 20px;
    }

    h5{
        font-size: 14px;
        text-align: end;
    }

    .header-img{
        padding: 5px;

        img{
            background: green;
            border-radius: 50%;
        }
    }
}


`;

