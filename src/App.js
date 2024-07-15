import logo from './logo.svg';
import './App.css';
import SearchResults from './components/SearchResults';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // console.log('secret => ', process.env.REACT_APP_CLIENT_ID);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/results' element=
            {
              <>
                <Navbar />
                <SearchResults />
              </>
            }
          />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
