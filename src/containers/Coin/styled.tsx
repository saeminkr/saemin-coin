import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  color: ${(props) => props.theme.textColor};
`;

export const Loader = styled.span`
  text-align: center;
  display: block;
`;

export const Container = styled.div`
  padding: 0px 1rem;
  max-width: 30rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
`;

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.boxBgColor};
  box-shadow: 0px 0px 5px 2px ${(props) => props.theme.boxShadow};
  padding: 0.5rem 0.5rem;
  border-radius: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const OverviewItem = styled.div<{ price?: number }>`
  display: flex;
  flex: 0 1 30%;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
`;

export const OverviewPriceItem = styled.span<{ price?: number }>`
  color: ${(props) =>
    props?.price
      ? props.price > 0
        ? props.theme.plusColor
        : props.theme.minusColor
      : props.theme.textColor};
`;

export const Description = styled.p`
  margin: 1.5rem 0px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1.5rem 0px;
  gap: 1rem;
`;

export const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.boxBgColor};
  box-shadow: 0px 0px 5px 2px ${(props) => props.theme.boxShadow};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

export const Img = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

export const PriceTabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.boxBgColor};
  box-shadow: 0px 0px 5px 2px ${(props) => props.theme.boxShadow};
  border: solid 1px rgba(0, 0, 0, 0.5);
`;

export const PriceTab = styled.span`
  display: flex;
  padding: 20px;
  font-size: 16px;
  text-transform: capitalize;
`;

export const PriceTabValue = styled(PriceTab)<{ isCheck?: Boolean }>`
  font-weight: 700;
  font-size: 25px;
  color: ${(props) =>
    props.isCheck ? props.theme.plusColor : props.theme.minusColor};
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
