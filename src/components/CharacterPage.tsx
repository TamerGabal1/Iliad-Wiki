import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface Character {
  name: string;
  relatedCharacters: string[];
  events: string[];
  funFacts: string[];
}

interface CharacterPageProps {
  characters: Character[];
}

const CharacterPage: React.FC<CharacterPageProps> = ({ characters }) => {
  const { name } = useParams<{ name: string }>();
  const character = characters.find((char) => char.name === name);

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="character-page">
      <h2>{character.name}</h2>
      <h3>Related Characters</h3>
      <ul>
        {character.relatedCharacters.map((relatedChar, index) => (
          <li key={index}>
            <Link to={`/character/${relatedChar}`} className="styled-link">
              {relatedChar}
            </Link>
          </li>
        ))}
      </ul>
      <h3>Related Events</h3>
      <ul>
        {character.events.map((event, index) => (
          <li key={index}>
            <Link to={`/event/${index + 1}`} className="styled-link">
              {event}
            </Link>
          </li>
        ))}
      </ul>
      <h3>Fun Facts</h3>
      <ul>
        {character.funFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterPage;