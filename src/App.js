import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { ChallengeSelector } from './components/ChallengeSelector';
import { challengeMapping } from './ui';
import { CustomTheme } from './CustomTheme';

const App = () => {
  const [challenge, setChallenge] = useState(null);
  return (
    <ThemeProvider theme={CustomTheme}>
      <div className='App'>
        <ChallengeSelector challenge={challenge} setChallenge={setChallenge} challengeMapping={challengeMapping} />
        <div>
          { challenge && challenge in challengeMapping ? 
              challengeMapping[challenge] : 
              <div>Selecciona un challenge de la izda</div>
          }
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
