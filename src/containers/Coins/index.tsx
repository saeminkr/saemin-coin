import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../../api";
import ControlBar from "../ControlBar";
import Loading from "../../Loading";
import {
  Container,
  Header,
  Title,
  CoinsList,
  Img,
  Coin,
  LinkContainer,
} from "./styled";
import { ICoin } from "../../interfaces";

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  return (
    <Container>
      <Helmet>
        <title>TOP CRYPTO LIST</title>
      </Helmet>
      <Header>
        <ControlBar />
        <Title>TOP CRYPTO LIST</Title>
      </Header>
      {isLoading ? (
        <Loading />
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={`/${coin.id}`}
                state={{ name: coin.name, image: coin.image }}
              >
                <LinkContainer>
                  <Img src={coin.image} alt={coin.name} />
                  {coin.name}
                </LinkContainer>
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
