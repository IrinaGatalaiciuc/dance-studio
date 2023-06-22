import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Dances from "./components/Dances";
import Ballet from "./components/Ballet";
import Ballroom from "./components/Ballroom";
import Kpop from "./components/Kpop";
import National from "./components/National";
import Hiphop from "./components/Hiphop";
import Contemporary from "./components/Contemporary";
import Teachers from "./components/Teachers";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Navbar from "./components/navbar/Navbar";


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dances" element={<Dances />} />
            <Route path="/dances/ballet" element={<Ballet />} />
            <Route path="/dances/ballroom" element={<Ballroom />} />
            <Route path="/dances/national" element={<National />} />
            <Route path="/dances/hip-hop" element={<Hiphop />} />
            <Route path="/dances/k-pop" element={<Kpop />} />
            <Route path="/dances/contemporary" element={<Contemporary />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <div className="main-footer">
            <div className="left-side">
              <div className="medias">
                <img src="./images/instagram.png" className="media" alt="insta" />
                <img src="./images/Facebook.png" className="media" alt="facebook" />
                <img src="./images/youtube.png" className="youtube" alt="youtube" />
              </div>
              <div className="address">
                <h4>DANCE EXPERIENCE STUDIO</h4>
                <div className="email"><p>Email: danceexpstudio@gmail.com</p></div>
                <div className="phones">
                  <img src="./images/phone-icon.png" className="phone" alt="phone-icon" /><p>+37322293745</p>
                  <img src="./images/phone-icon.png" className="phone" alt="phone-icon" /><p>079546738</p>
                </div>
              </div>
            </div>
            <div className="right-side">
              <p>Адрес: мун. Кишинёв, ул. Букурешть 21/2</p>
              <br />
              <img src="./images/map.jpg" alt="map" />
            </div>

          </div>
          <h5>Copyright &copy;  DANCE EXPERIENCE STUDIO 2023</h5>
          <h5>Developed by Irina Gatalaiciuc</h5>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
