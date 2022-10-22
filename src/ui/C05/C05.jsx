import React, { useState } from 'react'; 
import bg from './assets/bg.jpg';
import { Main, LoadingPercent } from './C05.styled';
import { useEffectOnce } from 'react-use';

export const C05 = () => {
  const [loadPercent, setLoadPercent] = useState(0);

  useEffectOnce(() => {
    if (loadPercent < 100) {
      const interval = setInterval(() => setLoadPercent(old => old + 1), 25);
      return () => clearInterval(interval);
    }
  });

  return <>
    <Main background={bg} loadPercent={loadPercent}></Main>
    <LoadingPercent>{loadPercent}%</LoadingPercent> 
  </>
}