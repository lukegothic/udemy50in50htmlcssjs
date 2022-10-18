import { useState } from 'react';
import './App.css';
import { ChallengeSelector } from './components/ChallengeSelector';
import { challengeMapping } from './ui';

const App = () => {
  const [challenge, setChallenge] = useState(null);
  return (
    <div className='App'>
      <ChallengeSelector challenge={challenge} setChallenge={setChallenge} challengeMapping={challengeMapping} />
      <div>
        { challenge && challenge in challengeMapping ? 
            challengeMapping[challenge] : 
            <div>Selecciona un challenge de la izda</div>
        }
      </div>
    </div>
  );
}

export default App;
