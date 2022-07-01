export interface RouteParams {
  coinId: string;
}

export interface ILocation {
  state: {
    name: string;
    image: string;
  };
}

export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
}

export interface ICoinDetail {
  id: string;
  symbol: string;
  name: string;
  localization: {
    en: string;
    ja: string;
  };
  description: {
    en: string;
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  genesis_date: string;
  market_cap_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: {
    current_price: {
      jpy: number;
      usd: number;
    };
    ath: {
      jpy: number;
      usd: number;
    };
    ath_change_percentage: {
      jpy: number;
      usd: number;
    };
    ath_date: {
      jpy: string;
      usd: string;
    };
    atl: {
      jpy: number;
      usd: number;
    };
    atl_change_percentage: {
      jpy: number;
      usd: number;
    };
    atl_date: {
      jpy: string;
      usd: string;
    };
    market_cap: {
      jpy: number;
      usd: number;
    };
    market_cap_rank: number;
    fully_diluted_valuation: {
      jpy: number;
      usd: number;
    };
    total_volume: {
      jpy: number;
      usd: number;
    };
    high_24h: {
      jpy: number;
      usd: number;
    };
    low_24h: {
      jpy: number;
      usd: number;
    };
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: {
      jpy: number;
      usd: number;
    };
    price_change_percentage_1h_in_currency: {
      jpy: number;
      usd: number;
    };
    price_change_percentage_24h_in_currency: {
      jpy: number;
      usd: number;
    };
    price_change_percentage_7d_in_currency: {
      jpy: number;
      usd: number;
    };
    price_change_percentage_14d_in_currency: {
      jpy: number;
      usd: number;
    };
    price_change_percentage_30d_in_currency: {
      jpy: number;
      usd: number;
    };
    price_change_percentage_60d_in_currency: {
      jpy: number;
      usd: number;
    };
    price_change_percentage_200d_in_currency: {
      jpy: number;
      usd: number;
    };
    price_change_percentage_1y_in_currency: {
      jpy: number;
      usd: number;
    };
    market_cap_change_24h_in_currency: {
      jpy: number;
      usd: number;
    };
    market_cap_change_percentage_24h_in_currency: {
      jpy: number;
      usd: number;
    };
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
    last_updated: string;
  };
}

export interface ChartProps {
  coinId: string;
}

export interface PriceProps {
  coinId: string;
  coinData?: ICoinDetail;
}
