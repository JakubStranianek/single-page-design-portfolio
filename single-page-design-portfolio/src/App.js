import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MyWork from './components/Hero/MyWork';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App bg-myWhite">
       <Header/>
       <Hero/>
       <MyWork/>
       <Footer/>
    </div>
  );
}

export default App;
