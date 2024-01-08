// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import AjoHallintaPage from './AjoHallintaPage';
import LuoAjoPage from './LuoAjoPage';

interface SignUpFormState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const LoginForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [formData, setFormData] = useState<SignUpFormState>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Field name: ${name}, Field value: ${value}`);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Lisää tarkistus etu- ja sukunimen pituudelle tässä
    if (formData.firstname.length < 5 || formData.lastname.length < 5) {
      alert('Etu- ja sukunimen pitää olla vähintään 5 merkkiä pitkiä.');
      return;
    }

    onLogin();
    // Käytä navigate-funktiota ohjaamaan käyttäjä "ajonhallinta"-sivulle
    navigate("/ajonhallinta");
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Etunimi:
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Sukunimi:
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </label>
      <br />
      {/* Muut kentät samalla tavalla */}
      <br />
      <button type="submit">Kirjaudu</button>
    </form>
  );
};

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm onLogin={() => setLoggedIn(true)} />} />
          <Route path="/ajonhallinta" element={<AjoHallintaPage loggedIn={loggedIn} />} />
          <Route path="/luouusi" element={<LuoAjoPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
