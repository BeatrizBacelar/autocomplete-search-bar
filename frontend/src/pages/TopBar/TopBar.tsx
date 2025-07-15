import React from 'react';
import './style.css';

import ButtonSearch from '../../components/ButtonSearch';
import Input from '../../components/Input';
import SuggestionBox from '../../components/SuggestionBox';

function TopBar ({
    term,
    setTerm,
    suggestionsResult,
}: {term: string, setTerm: Function, suggestionsResult: {autoComplete:[string]}}) {


  return (
    <div className='fullTopBar'>
      <div className='topBar'>
        <div className='textTopBar'>
          <h1 className='titleSearch'>Busca com Autocompletar</h1>
          <p>
            Digite no campo abaixo para exibir as sugestões
          </p>
        </div>
        <div className='searchContainer'>
          <Input 
          term={term} 
          placeholder="Termo de busca"
          onChange={(event) => setTerm(event.target.value)}/>
          <ButtonSearch label="Buscar" />
        </div>
        {suggestionsResult?.autoComplete.length > 0 && term?.length >= 4 && <SuggestionBox
        suggestionsResult={suggestionsResult?.autoComplete}
        term={term}
        setTerm={setTerm}
        />}
        
      </div>
    </div>
  )
}

export default TopBar;