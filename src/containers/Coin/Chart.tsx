import { useQuery } from "react-query";
import { fetchCoinHistory } from "../../api";
import ReactApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atoms";
import Loading from "../../Loading";
import { ChartProps } from "../../interfaces";
import { ChartContainer } from "./styled";

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<Array<number>[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <ChartContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <ReactApexChart
          type="candlestick"
          width="800"
          height="500"
          series={[
            {
              data: data?.map((info) => {
                return {
                  x: new Date(info[0]).getTime(),
                  y: [info[1], info[2], info[3], info[4]],
                };
              }) as {
                x: any;
                y: any;
              }[],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#EF403C",
                  downward: "#008FFB",
                },
              },
            },
            title: {
              align: "center",
              style: {
                color: isDark ? "white" : "black",
                fontSize: "24",
              },
            },
            xaxis: {
              axisBorder: { show: true },
              axisTicks: { show: false },
              type: "datetime",
              labels: {
                show: false,
              },
            },
            yaxis: {
              forceNiceScale: true,
              decimalsInFloat: 2,
              labels: {
                style: {
                  colors: isDark ? "white" : "black",
                },
              },
            },
            tooltip: {
              x: {
                format: "MM/dd HH:mm",
              },
            },
          }}
        />
      )}
    </ChartContainer>
  );
}
export default Chart;
