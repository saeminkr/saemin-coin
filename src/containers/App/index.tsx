import Router from "../../Routers";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { darkTheme, lightTheme } from "../../types/theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atoms";
import { ThemeColor } from "./styled";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <ThemeColor />
        <Router />
      </ThemeProvider>
    </>
  );
}
export default App;
