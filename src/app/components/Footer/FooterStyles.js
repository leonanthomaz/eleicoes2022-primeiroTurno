import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: auto;
background: #eeeeee;
`;

export const Wrapper = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  
`;

export const SocialMedia = styled.div`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    line-height: 15px;
    
  }
`;

export const SocialLogo = styled.div`

    display: flex;
    justify-self: start;
    margin-top: 16px;

    color: ${props => props.theme.font};

    a{
        color: gray;
        transition: all ease 0.2s;

        &:hover{
            color: #187918;
            transition: all ease 0.2s;

        }
    }

    p{
      padding: 5px;
      color: #090983;
    }

    span{
        padding: 5px;
        padding-bottom: 15px;
        color: #090983;

        a{

        }
    }

    @media (max-width: 760px){
        justify-content: center;
        flex-direction: column;
        align-items: center;
        
    }
`;

export const Address = styled.div`
  font-size: 12px;
  
  i{
    color: white;
  }
`;

export const Icon = styled.div`
font-size: 32px;
color: #090983;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding-bottom: 10px;

  
`;

export const SocialIconLink = styled.a`
  color: #187918;
  font-size: 24px;
  transition: all ease 0.2s;

  &:hover{
    color: gray;
    transition: all ease 0.2s;
  }
`;
