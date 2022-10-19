import './C02.css';
import { useState } from 'react';
import { StepAwareButton, StepperNumber, Stepper, StepperProgress } from './C02.styled';
import { range } from 'lodash';

const STEP_NUMBER = 4;

export const C02 = () => {
  const [step, setStep] = useState(1);
  return (<div>
    <div>
      <Stepper>
        <StepperProgress min={1} max={STEP_NUMBER-1} value={step-1}></StepperProgress>
        { range(1, STEP_NUMBER + 1).map(s => <StepperNumber key={s} active={s <= step}>{s}</StepperNumber>) }
      </Stepper>
      <StepAwareButton disabled={step < 2} onClick={() => setStep(s => s - 1)}>Prev</StepAwareButton>
      <StepAwareButton disabled={step > STEP_NUMBER - 1} onClick={() => setStep(s => s + 1)}>Next</StepAwareButton>
    </div>
  </div>);
}