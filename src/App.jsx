
import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Portfolio from './Components/Portfolio/portfolio';
import Competences from './Components/Competences/competences';
import Experiences from './Components/Experiences/experiences';
import Hobbies from './Components/Hobbies/hobbies';
import Liens from './Components/Liens/liens';
import Parcours from './Components/Parcours/parcours';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Competences />
        <Experiences />
        <Hobbies />
        <Liens />
        <Parcours />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;