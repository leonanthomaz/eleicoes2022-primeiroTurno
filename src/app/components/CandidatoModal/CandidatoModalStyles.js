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

@media(max-width: 760px){
    display: flex;
    flex-direction: column;
    align-items: center;
}

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

    .header-img{
        padding: 5px;

        width: 200px;
        height: 200px;

        img{
            width: 100%;
            background: #838383;
            border-radius: 50%;
        }
    }

    .header-h{
        text-align: end;


        @media(max-width: 760px){
            text-align: center;
        }

        h4{
            font-size: 20px;
            font-weight: 700;
        }

        span{
            font-size: 20px;
            text-align: center;

        }

        h5{
            font-size: 14px;
        }
    }

    .header-f{
        display: flex;
        flex-direction: column;
        align-items: center;

        h3{
            font-size: 40px;
            font-weight: 900;
            color: #090983;

        }

    }
}


`;

