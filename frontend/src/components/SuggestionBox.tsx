import React from 'react';

type InputProps = {
  suggestionsResult: [string];
  term: string;
  setTerm: Function;
};

function SuggestionBox({suggestionsResult, term, setTerm }: InputProps) {
  return (
          <div className="suggestionsWrapper">
            <ul className="suggestionsList">
              {suggestionsResult.map((suggestion: string, index: number) => {
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
        )
}

export default SuggestionBox;