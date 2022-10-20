import styled from 'styled-components';

export const Main = styled.div`
  background-color:#444;
  overflow-x: hidden;
  margin: 0;
`;

export const Container = styled.div`
  background-color:#444;
  color: #fff;
  transition: transform 250ms ease-in-out;
  ${({ menuShown }) => menuShown ? "transform: rotate(-20deg);" : null}
  transform-origin: top left;
  width: 100%;
  min-height: 100%;
  padding: 50px;
`;

export const CircleContainer = styled.div`
  position: fixed;
  top: -100px;
  left: -100px;
`;

export const Circle = styled.div`
  color: #fff;
  background-color: #ff7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  ${props => props.menuShown ? "transform: rotate(-70deg);" : null}
  transition: transform 250ms ease-in-out;
`;

export const CircleButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const OpenButton = styled(CircleButton)`
  left: 60%;
`;

export const CloseButton = styled(CircleButton)`
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;
`;

export const Navigation = styled.nav`
  position: fixed;
  bottom: 200px;
  left: 0;
  z-index: 100;
  transform: translate(${props => props.menuShown ? "0%" : "-150%"});
  transition: all 250ms ease-in-out;
  & ul {
    list-style: none;
    & li {
      text-transform: uppercase;
      color: #fff;
      margin: 40px 0;
      & i {
        font-size: 20px;
        margin-right: 10px;
        color: #fff;
      }
    }
  }
`;