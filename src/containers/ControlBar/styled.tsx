import styled from "styled-components";

interface IProps {
  isDark?: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;
export const BackButton = styled.button`
  padding: 0.2rem 0.7rem;
  border-radius: 1rem;
  border: none;
  font-size: 0.8rem;
  font-weight: 700;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverColor};
    color: ${(props) => props.theme.bgColor};
    transition: all 0.2s ease-in-out;
  }
`;

export const Switch = styled.label<IProps>`
  position: relative;
  float: right;
  vertical-align: bottom;
  text-align: center;
  width: 2.8rem;
  height: 1.5rem;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(1.2rem);
  }
`;

export const Slider = styled.span<IProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.isDark ? props.theme.hoverColor : "#ccc"};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 1rem;
  &:before {
    position: absolute;
    content: "";
    height: 1.1rem;
    width: 1.1rem;
    left: 0.25rem;
    bottom: 0.2rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
  svg:first-child {
    margin-bottom: 0.05rem;
  }
  svg:nth-child(2) {
    margin-left: 0.3rem;
    margin-top: 0.2rem;
  }
`;
