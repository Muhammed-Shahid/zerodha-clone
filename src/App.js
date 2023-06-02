
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Banner/>
   <section className='abtSec'>
 <About/>

 </section>
    </div>
  );
}

export default App;
