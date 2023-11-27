import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/search' element={<h1>Search Page</h1>} />
          <Route exact path='/' element={
          <>
            <div className='app_page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </>
        } />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
