import React from 'react';

interface CharacterProps {
  name: string;
  relatedCharacters: string[];
  events: string[];
  funFacts: string[];
}

const Character: React.FC<CharacterProps> = ({ name, relatedCharacters, events, funFacts }) => {
  return (
    <div className="character-card">
      <h2>{name}</h2>
      <section>
        <h3>Related Characters</h3>
        <ul>
          {relatedCharacters.map((char, index) => (
            <li key={index}>{char}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Events</h3>
        <ul>
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Fun Facts</h3>
        <ul>
          {funFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Character;