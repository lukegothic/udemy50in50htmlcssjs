import styled from 'styled-components';

export const Main = styled.div`
  background: url(${ props => props.background }) no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  filter: blur(${ props => (100 - props.loadPercent) / 2 }px);
`;

export const LoadingPercent = styled.div`
  font-weight: bold;
  color: #fff;
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
`;