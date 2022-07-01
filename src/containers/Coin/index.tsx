import { useQuery } from "react-query";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import { fetchCoinInfo } from "../../api";
import Chart from "./Chart";
import Price from "./Price";
import { Helmet } from "react-helmet";
import ControlBar from "../ControlBar";
import Loading from "../../Loading";
import {
  Container,
  Description,
  Header,
  Img,
  Overview,
  OverviewItem,
  Tab,
  Tabs,
  Title,
} from "./styled";
import { ICoinDetail, ILocation, RouteParams } from "../../interfaces";

function Coin() {
  const { coinId } = useParams<keyof RouteParams>() as RouteParams;
  const { state } = useLocation() as ILocation;
  const chartMatch = useMatch("/:coinId/chart");
  const priceMatch = useMatch("/:coinId/price");
  const { isLoading: coinLoading, data: coinData } = useQuery<ICoinDetail>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const loading = coinLoading;
  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? "loading..." : coinData?.name}
        </title>
      </Helmet>
      <Header>
        <ControlBar />
        <Title>
          <Img
            src={`${
              state?.image
                ? state.image
                : coinData?.image.large
                ? coinData.image.large
                : ""
            }`}
          />
          {state?.name ? state.name : loading ? <Loading /> : coinData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank</span>
              <span>{coinData?.market_cap_rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price</span>
              <span>${coinData?.market_data.current_price.usd}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Volume</span>
              <span>{coinData?.market_data.total_volume.usd}</span>
            </OverviewItem>
          </Overview>
          <Overview>
            <OverviewItem>
              <span>genesis_date</span>
              <span>
                {coinData?.genesis_date ? coinData?.genesis_date : "-"}
              </span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol</span>
              <span>{coinData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>日本語</span>
              <span>{coinData?.localization.ja}</span>
            </OverviewItem>
          </Overview>
          <Description
            dangerouslySetInnerHTML={{
              __html: coinData
                ? coinData?.description.en.length > 0
                  ? coinData?.description.en
                  : "No Description"
                : "",
            }}
          />
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Routes>
            <Route path="chart" element={<Chart coinId={coinId} />} />
            <Route
              path="price"
              element={<Price coinId={coinId} coinData={coinData} />}
            />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default Coin;
