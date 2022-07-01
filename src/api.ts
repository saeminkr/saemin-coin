const BASE_URL = `https://api.coingecko.com/api/v3/coins`;

export async function fetchCoins() {
  return await (await fetch(`${BASE_URL}/markets?vs_currency=usd`)).json();
}

export async function fetchCoinInfo(coinId: string) {
  return await (
    await fetch(`${BASE_URL}/${coinId}?&tickers=false&community_data=false`)
  ).json();
}

export async function fetchCoinHistory(coinId: string) {
  return (
    await fetch(`${BASE_URL}/${coinId}/ohlc?vs_currency=usd&days=7`)
  ).json();
}
