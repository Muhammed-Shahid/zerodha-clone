
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Banner/>
   <section className='abtSec'>
 <About/>
 </section>


 <section className="universe">
  <div className="uniContainer">
    <h1 style={{fontSize:'34px'}} >Zerodha Universe</h1>

    <p style={{fontSize:'24px'}} >A whole ecosystem of modern investment apps <br />
tailored to specific needs, built from the ground up</p>

<div className="uniImg">
  <img style={{width:'70%'}} src={process.env.PUBLIC_URL + '/universe.png'} alt="" />
</div>
  </div>
 </section>


<section className="pricing">
  <div className="pricingLft">
<h1 style={{fontSize:'26px'}}>Unbeatable Pricing</h1>

<p style={{fontSize:'24px'}}>We pioneered the concept of discount broking and price <br /> transparency in India. Flat fees and no hidden charges.</p>
  </div>

  <div className="pricingRight">
  <img style={{width:'70%'}} src={process.env.PUBLIC_URL + '/pricing2.png'} alt="" />

  </div>
</section>


<Footer/>
    </div>
  );
}

export default App;
