import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 1rem;
  max-width: 1080px;
  margin: 0 auto;
`;

export const Header = styled.div`
  height: 10hv;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
`;

export const CoinsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(64px, 1fr));
  gap: 10px;
`;

export const Coin = styled.li`
  font-size: min(2.3vw, 28px);
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  border-radius: 1rem;
  display: block;
  width: 23vw;
  max-width: 250px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  a {
    display: block;
    align-items: center;
    padding: 10px;
    transition: color 0.1s ease-in;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.textColor};
  font-weight: 800;
`;

export const Img = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 6px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
