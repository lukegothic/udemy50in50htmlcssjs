import { range } from 'lodash';
const NCHALLENGES = 50;
export const ChallengeSelector = ({ challenge, setChallenge, challengeMapping }) => {
  return <div className="challenge-selector">
    { range(1, NCHALLENGES + 1).map(n => <button disabled={!(n in challengeMapping)} className={`challenge-button-${n===challenge}`} key={n} onClick={() => setChallenge(n)}>{n}</button>) }
  </div>;
}