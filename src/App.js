
import './App.css';

import { Routes, Route  } from 'react-router-dom';
import Home from './routes/home';
import Aboutus from './routes/aboutus';
import Contactus from './routes/contact';
import CricBlog from './routes/blogsNav';
import TeamIndia from './components/TeamIndia';
import AustraliaBlog from './components/australiaBlog';
import KohliBlog from './components/kohliBlog';
import RahaneBlog from './components/rahaneBlog';
import KuldeepBlog from './components/kuldeepBlog';
import WestIndiesBlog from './components/westIndies';
import ScrollToTop from './components/scrollTop';
function App() {
  return (
  <>
  <ScrollToTop></ScrollToTop>
<Routes>
    
 <Route path="/" element={<Home/>} />
 <Route path = "/blogs" element = {<CricBlog/>}/>
 <Route path="/aboutus" element={<Aboutus/>}/>
 <Route path = "/contactus" element={<Contactus/>} />
<Route path = "/blogs/TeamIndia" element= {<TeamIndia/>}/>
<Route path="/blogs/AustraliaCricket" element = {<AustraliaBlog/>} />
<Route path="/blogs/kohli" element = {<KohliBlog/>} />
<Route path="/blogs/rahane" element = {<RahaneBlog/>} />
<Route path="/blogs/kuldeep" element = {<KuldeepBlog/>} />
<Route path="/blogs/westIndies" element = {<WestIndiesBlog/>} />
</Routes>

  </>
  );
}

export default App;
