import React, { useEffect } from 'react';
import './style.css';

import ButtonSearch from '../../components/ButtonSearch';
import Input from '../../components/Input';

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
          {suggestionsResult?.autoComplete?.length > 0 && (
          <div className="suggestionsWrapper">
            <ul className="suggestionsList">
              {suggestionsResult.autoComplete.map((suggestion: string, index: number) => {
                const searchTerm = term.toLowerCase()
                const matchIndex = suggestion.indexOf(searchTerm);

                if (matchIndex === -1) return null;

                const beforeTerm = suggestion.slice(0, matchIndex);
                const matchTerm = suggestion.slice(matchIndex, matchIndex + term.length);
                const afterTerm = suggestion.slice(matchIndex + term.length);

                return (
                  <li key={index} className="suggestionItem" onClick={() => setTerm(suggestion)}>
                  🔍  
                  <span>
                    {beforeTerm}
                    <strong>{matchTerm}</strong>
                    {afterTerm}
                  </span>
                  </li>
                )              
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default TopBar;