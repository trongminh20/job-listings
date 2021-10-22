import React, { useContext, useState } from 'react';
import JobList from './Components/JobList';
//states
import { AppContextProvider } from './Components/AppContext';
//components
import Header from './Components/Header';

const App = () => {
  return (
    <AppContextProvider>
      <Header />
      <JobList />
    </AppContextProvider>
  );

}

export default App;
