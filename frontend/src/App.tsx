import { useEffect, useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

import './styles/App.css';
import TopBar from './pages/TopBar/TopBar';

const GET_SUGGESTIONS = gql`
  query Autocomplete($term: String!) {
    autoComplete(term: $term)
  }
`;

function App() {
  const [term, setTerm] = useState('');
  const [search, { loading, data }] = useLazyQuery(GET_SUGGESTIONS);

  useEffect(() => {
    if (term.trim().length >= 4) {
       search({ variables: { term } });
    }

  }, [term]);

  useEffect(() => {
  if (data) {
    console.log('Resultado da busca:', data);
  }
}, [data]);
    
  return (
    <div className="App">
      <TopBar
       term={term}
       setTerm={setTerm}
       suggestionsResult={data}
      />
    </div>
  );
}

export default App;