import React from 'react';
import Header from './components/Header/Header';
import InfoBlock from './components/InfoBlock/InfoBlock';
import Location from './components/Location/Location';
import Schedule from './components/Schedule/Schedule';
import DressCode from './components/DressCode/DressCode';
import Questions from './components/Questions/Questions';
// import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <InfoBlock />
      <Location />
      <Schedule />
      <DressCode />
      <Questions />
      {/* <Footer /> */}
    </div>
  );
}