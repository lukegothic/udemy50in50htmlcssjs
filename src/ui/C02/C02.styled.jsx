import styled from 'styled-components';
export const StepAwareButton = styled.button`
  
`;

export const Stepper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const StepperProgress = styled.progress`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 4px;
  width: 100%;
  z-index: 1;
  transition: all 250ms ease;
  appearance: none;
  &::-webkit-progress-bar {
    background-color: ${({theme}) => theme.background.inactive};
    box-shadow: none;
  }
  &::-webkit-progress-value {
    background-color: ${({theme}) => theme.background.active};
    transition: all 250ms ease-out;
  }
`

export const StepperNumber = styled.span`
  color: #555;
  background-color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 22px;
  text-align: center;
  font-weight: bold;
  border-width: 4px;
  border-style: solid;
  border-color: ${({active, theme}) => active ? theme.background.active : theme.background.inactive};
  box-sizing: border-box;
  transition: all 250ms linear;
  transition-delay: 125ms;
  z-index: 2;
`;