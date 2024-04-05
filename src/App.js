import React from 'react';
import Header from './components/Header/Header';
import InfoBlock from './components/InfoBlock/InfoBlock';
import Location from './components/Location/Location';
import Schedule from './components/Schedule/Schedule';

export default function App() {
  return (
    <div>
      <Header />
      <InfoBlock />
      <Location />
      <Schedule />
    </div>
  );
}