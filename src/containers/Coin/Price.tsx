import { PriceProps } from "../../interfaces";
import { PriceTabs, PriceTab, PriceTabValue } from "./styled";

function checkNumber(number: number | undefined) {
  if (number) {
    return number > 0;
  }
}

function Price({ coinData }: PriceProps) {
  return (
    <>
      <PriceTabs>
        <PriceTab>low_24h:</PriceTab>
        <PriceTabValue isCheck={checkNumber(coinData?.market_data.low_24h.usd)}>
          $ {coinData?.market_data.low_24h.usd}
        </PriceTabValue>
      </PriceTabs>
      <PriceTabs>
        <PriceTab>high_24h:</PriceTab>
        <PriceTabValue
          isCheck={checkNumber(coinData?.market_data.high_24h.usd)}
        >
          $ {coinData?.market_data.high_24h.usd}
        </PriceTabValue>
      </PriceTabs>
      <PriceTabs>
        <PriceTab>price_change_percentage_24h</PriceTab>
        <PriceTabValue
          isCheck={checkNumber(
            coinData?.market_data.price_change_percentage_24h
          )}
        >
          {coinData?.market_data.price_change_percentage_24h}%
        </PriceTabValue>
      </PriceTabs>
      <PriceTabs>
        <PriceTab>price_change_percentage_7d</PriceTab>
        <PriceTabValue
          isCheck={checkNumber(
            coinData?.market_data.price_change_percentage_7d
          )}
        >
          {coinData?.market_data.price_change_percentage_7d}%
        </PriceTabValue>
      </PriceTabs>
      <PriceTabs>
        <PriceTab>price_change_percentage_30d</PriceTab>
        <PriceTabValue
          isCheck={checkNumber(
            coinData?.market_data.price_change_percentage_30d
          )}
        >
          {coinData?.market_data.price_change_percentage_30d}%
        </PriceTabValue>
      </PriceTabs>
      <PriceTabs>
        <PriceTab>price_change_percentage_1y</PriceTab>
        <PriceTabValue
          isCheck={checkNumber(
            coinData?.market_data.price_change_percentage_1y
          )}
        >
          {coinData?.market_data.price_change_percentage_1y}%
        </PriceTabValue>
      </PriceTabs>
    </>
  );
}

export default Price;
