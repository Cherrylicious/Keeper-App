import React, { Fragment } from 'react';
import './App.css';
import Header from '../components/Header';
import Notearray from '../components/Notearray';
import Footer from '../components/Footer';
import {notes} from '../components/Notes'

function App() {
  return (
    
    <Fragment>
      <Header />
      <Notearray notes = {notes}/>
      <Footer />
      
    </Fragment>
  )
}

export default App;
