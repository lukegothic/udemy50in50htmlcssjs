import { range } from 'lodash';
import { ChallengeSelectorContainer, ChallengeButton, DisabledChallengeButton } from './ChallengeSelector.styled';
const NCHALLENGES = 50;
export const ChallengeSelector = ({ challenge, setChallenge, challengeMapping }) => {
  return <ChallengeSelectorContainer>
    { range(1, NCHALLENGES + 1)
        .map(n => !(n in challengeMapping) ? <DisabledChallengeButton>{n}</DisabledChallengeButton> : <ChallengeButton disabled={!(n in challengeMapping)} selected={n===challenge} key={n} onClick={() => setChallenge(n)}>{n}</ChallengeButton>)
    }
  </ChallengeSelectorContainer>;
}