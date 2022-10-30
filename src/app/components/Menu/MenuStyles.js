import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
    flex-direction: column;
    background: whitesmoke;
    position: absolute;
    transition: all 0.5s ease;
    width: 280px;
    max-height: calc(100vh - 80px);
    left: ${({ click }) => (click ? '0px' : '-1000px')};
    padding: 10px;
    margin-left: 0px;
    overflow-y: scroll;
        ::-webkit-scrollbar {
        display: none;
    } 

    .menu-title{
        display: flex;
        justify-content: space-between;
        padding: 5px;
        align-items: center;
        border-bottom: 1px solid gray;

        .left{
            display: flex;
            align-items: center;

            img{
                width: 50px;
                height: 50px;
            }
            h4{
                color: green;
                text-align: center;
                font-weight: 700;
                margin-top: 10px;
                font-weight: 700;
            }
        } 
    }

    ul{
        list-style: none;

        li{
            color: blue;
            padding: 10px;
            list-style: none;
            text-transform: uppercase;
            transition: all ease 0.2s;
            border: 1px solid transparent;
            text-align: center;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.5s ease;

            :hover{
                color: green;
                transition: all 0.5s ease;

            }
        }
    }
`;

export const Icon = styled(AiOutlineClose)`
font-size: 26px;
cursor: pointer;

`;
