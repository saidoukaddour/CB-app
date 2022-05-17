import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil';
import Rendezvous from './pages/Rendezvous';
import Facette from './pages/esthetique/Facette';
import Blanchiment from './pages/esthetique/Blanchiment';
import Réhabilitation from './pages/esthetique/Réhabilitation';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import Endodontie from './pages/specialites/Endodontie';
import Odontologie from './pages/specialites/Odontologie';
import Protheses from './pages/specialites/Protheses';
import Orthodontie from './pages/specialites/Orthodontie';
import Parodontie from './pages/specialites/Parodontie';
import Pedodontie from './pages/specialites/Pedodontie';
import Dash from './components/Errorpage';



function App() {
  return (
    <div className="App">
    
      
      
      <Navbar/>

      <Routes>

          <Route path="/" element={<Accueil/>}>Accueil</Route>
          <Route path="/rendezvous" element={<Rendezvous/>}>RendezVous</Route>
          <Route path="/facette" element={<Facette/>}>Accueil</Route>
          <Route path="/blanchiment" element={<Blanchiment/>}>RendezVous</Route>
          <Route path="/rehabilitation" element={<Réhabilitation/>}>RendezVous</Route>
          <Route path="/apropos" element={<Apropos/>}>RendezVous</Route>
          <Route path="/contact" element={<Contact/>}>RendezVous</Route>

          <Route path="/endodontie" element={<Endodontie/>}>Endodontie</Route>
          <Route path="/odontologie" element={<Odontologie/>}>Accueil</Route>
          <Route path="/protheses" element={<Protheses/>}>RendezVous</Route>
          <Route path="/orthodontie" element={<Orthodontie/>}>RendezVous</Route>
          <Route path="/parodontie" element={<Parodontie/>}>RendezVous</Route>
          <Route path="/pedodontie" element={<Pedodontie/>}>RendezVous</Route>

          <Route path="/da" element={<Dash/>}>RendezVous</Route>

      
      </Routes>
      
      <Footer/>
      
    </div>
  );
}

export default App;
