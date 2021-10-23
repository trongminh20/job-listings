import React, { useContext, useState } from 'react';
import JobList from './Components/JobList';
//states
import { AppContextProvider } from './Components/AppContext';
//components
import Header from './Components/Header';
import FilterBar from './Components/FilterBar';
const App = () => {
  return (
    <AppContextProvider>
      <Header />
      <FilterBar />
      <JobList />
    </AppContextProvider>
  );

}

export default App;
