import styled from "styled-components";
import Loader from "react-spinners/PuffLoader";

const Loading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default () => {
  return (
    <Loading>
      <Loader color="#C63DEE" size={100} />
    </Loading>
  );
};
