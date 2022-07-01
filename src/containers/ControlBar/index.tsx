import { Link, useMatch } from "react-router-dom";
import { HiSun } from "react-icons/hi";
import { IoMoon } from "react-icons/io5";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../../atoms";
import { BackButton, Container, Slider, Switch } from "./styled";

const ControlBar = () => {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const isDark = useRecoilValue(isDarkAtom);
  const isHome = useMatch("/");
  return (
    <Container>
      {isHome !== null ? null : (
        <BackButton>
          <Link to="/">Back</Link>
        </BackButton>
      )}
      <Switch>
        <input type="checkbox" defaultChecked={isDark} />
        <Slider onClick={toggleDarkAtom} isDark={isDark}>
          <IoMoon size={"0.8rem"} color={"yellow"} />
          <HiSun size={"1rem"} color={"tomato"} />
        </Slider>
      </Switch>
    </Container>
  );
};

export default ControlBar;
