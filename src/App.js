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
      <div> Coded by Minh Phan --- Design on <a href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt">FrontendMentor</a> </div>
    </AppContextProvider>
  );

}
export default App;
