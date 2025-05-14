
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieGrid from './components/MovieGrid';

function App() {
  return (
    <div className="App">
      <div className='container'>

        <Header></Header>
        <MovieGrid></MovieGrid>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
