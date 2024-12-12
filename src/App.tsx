import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterPage from './components/CharacterPage';
import EventList from './components/EventList';
import EventPage from './components/EventPage';
import events from './data/events.json'
import './App.css'
import { Link } from 'react-router-dom';

interface Character {
  name: string;
  relatedCharacters: string[];
  events: string[];
  funFacts: string[];
}

interface AppProps {
  characters: Character[];
}


function Header() {
  return (
    <header className="App-header">
      <h1>Iliad Wiki</h1>
      <nav>
        <Link to="/">Characters</Link> | <Link to="/events">Events</Link>
      </nav>
    </header>
  );
}

const App: React.FC<AppProps> = ({ characters }) => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CharacterList characters={characters} />} />
          <Route path="/character/:name" element={<CharacterPage characters={characters} />} />
          <Route path="/events" element={<EventList events={events} />} />
          <Route path="/event/:id" element={<EventPage events={events} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;