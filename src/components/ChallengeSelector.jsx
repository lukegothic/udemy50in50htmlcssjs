import { range } from 'lodash';
import { ChallengeSelectorContainer, ChallengeButton, DisabledChallengeButton } from './ChallengeSelector.styled';
const NCHALLENGES = 50;
export const ChallengeSelector = ({ challenge, setChallenge, challengeMapping }) => {
  return <ChallengeSelectorContainer>
    { range(1, NCHALLENGES + 1)
        .map(n => !(n in challengeMapping) ? <DisabledChallengeButton key={n}>{n}</DisabledChallengeButton> : <ChallengeButton key={n} disabled={!(n in challengeMapping)} selected={n===challenge} onClick={() => setChallenge(n)}>{n}</ChallengeButton>)
    }
  </ChallengeSelectorContainer>;
}