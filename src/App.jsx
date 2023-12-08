import About from "./Content/About";
import Home from "./Content/Home";
import Midimage from "./Content/Midimage";
import Navbar from "./Content/Navbar";
import Contact from './Content/Contact';
import MidDownImage from "./Content/MidDownImage";

import BgImg from './Images/61n+SYgGwWL.jpg'

import img5 from './Images/5.jpeg'
import img6 from './Images/6.jpeg'
import img7 from './Images/7.jpeg'
import img8 from './Images/8.jpeg'
import img9 from './Images/9.jpeg'
import img12 from './Images/12.jpeg'
import img14 from './Images/14.jpeg'
import img16 from './Images/16.jpeg'
import img19 from './Images/19.jpeg'
import img22 from './Images/22.jpeg'

function App() {
  return (
    <div className="scroll-smooth h-screen">
      <Navbar/>
      <div className="w-full md:block hidden">
        <div className="md:flex hidden justify-between">
        <div id="leftimage" className="w-[25%] bg-white md:p-7">
          <img className="pointer-events-none" src={img5} alt="pic1"/> <br />
          <img className="pointer-events-none" src={img8} alt="pic1"/> <br />
          <img className="pointer-events-none" src={img9} alt="pic1"/> <br />
          <img className="pointer-events-none" src={img19} alt="pic1"/> <br />
          <img className="pointer-events-none" src={img7} alt="pic1"/> <br />
        </div>
        <div className="md:w-[50%]">
          <Home/>
          <Midimage/>
          <About/>
          <h1 className="uppercase text-4xl text-center pt-10">Contact Me through</h1>
          <Contact/>
        </div>
        <div id="rightimage" className="w-[25%] bg-white p-7">
        <img className="pointer-events-none" src={img6} alt="pic1"/> <br />
        <img className="pointer-events-none" src={img12} alt="pic1"/> <br />
        <img className="pointer-events-none" src={img14} alt="pic1"/> <br />
        <img className="pointer-events-none" src={img16} alt="pic1"/> <br />
        <img className="pointer-events-none" src={img22} alt="pic1"/> <br />

        </div>
        </div>
        <div className="md:block hidden">
          <MidDownImage/>
        </div>
      </div>
      <div id="mobile view" className="md:hidden bg-green-700 block h-[100%]">
        {/* <Home/> */}
        <div className="snap-x mx-auto snap-mandatory flex h-[100%] w-full overflow-scroll">
          <div className="snap-start bg-amber-200 w-full h-[100%] flex-shrink-0 flex items-center justify-center"><Home/></div>
          <div className="snap-start bg-teal-200 w-full flex-shrink-0  h-screen flex items-center justify-center text-8xl"><Midimage/></div>
          <div className="snap-start bg-cyan-200 w-full flex-shrink-0 h-screen flex items-center justify-center text-8xl"><About/></div>
          <div className="snap-start bg-fuchsia-200 w-full flex-shrink-0 h-screen flex items-center justify-center text-8xl" style={{ backgroundImage: `url(${BgImg})` }}><MidDownImage/></div>
      </div>
      </div>
    </div>
  );
}

export default App;
