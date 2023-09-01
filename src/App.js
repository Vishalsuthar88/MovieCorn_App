// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Header from './components/movie_header/Header';
import Home from './Pages/home/Home';
import MovieList from './components/movielist/MovieList';
// import Movie from './Pages/movieDetail/Movie';

const App=()=>
{

  
  return (
    <>
    {/* //prompt engineering course deep learning ai
    //alex gaynor github
    // <BrowserRouter>
    // <Header />
    // <Routes>
      // <Route path='/' exact element={<Homepage />} />
    //   <Route path='/login'  element={<Loginpage />} />
    // </Routes>
    // </BrowserRouter> */}

    
    <div className="App">

    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='movies/:type' element={<MovieList />}></Route>
        <Route path='/*' element={<h1>Stay tuned !</h1>}></Route>
      </Routes>
    </Router>
    </div>
    </>

    );

}
  


export default App;
