import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Productlists from './pages/Productlists';


function App() {
  return (
    <div className="App">
      <Header/>
      <Productlists/>
      <Footer/>
    </div>
  );
}

export default App;
