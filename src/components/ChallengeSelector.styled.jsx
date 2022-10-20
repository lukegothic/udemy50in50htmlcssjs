import styled from "styled-components";

export const ChallengeSelectorContainer = styled.div`
  z-index: 1000;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  position: absolute;
  bottom: 0;
`;

export const ChallengeButton = styled.button`
  background-color: ${props => props.selected ? "#444" : "#CCC"};
  color: ${props => props.selected ? "#fff" : "#000"};
  cursor: ${props => props.selected ? "arrow" : "pointer"};
  border: ${props => props.selected ? "none" : "2px outset #999"};
  font-weight: bold;
  height: 30px;
`;

export const DisabledChallengeButton = styled.button`
  color: #ddd;
  background-color: #aaa;
  cursor: not-allowed;
  border: 1px solid #777;
  height: 30px;
`;