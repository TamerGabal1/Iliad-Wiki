import React from 'react';
import { Link } from 'react-router-dom';

interface Character {
  name: string;
  relatedCharacters: string[];
  events: string[];
  funFacts: string[];
}

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
    const sortedCharacters = [...characters].sort((a, b) => a.name.localeCompare(b.name));
  
    return (
      <div className="character-list">
        {sortedCharacters.map((character, index) => (
          <Link to={`/character/${character.name}`} key={index} className="character-card">
            <h2>{character.name}</h2>
          </Link>
        ))}
      </div>
    );
  };

export default CharacterList;