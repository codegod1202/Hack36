import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';  
import { Banner } from './components/Banner.js';
import { Features } from './components/Features.js';
import { Projects } from './components/Projects.js';
import { Footer } from './components/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
       <NavBar/>   
       <Banner />
       <Features />
       <Projects />
       <Footer />
    </div>
  );
}

export default App;
