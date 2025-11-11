import './App.css';
import { MyNavbar } from './components/MyNavbar';
import { HomeBanner } from './components/HomeBanner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Work } from './components/Work';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <HomeBanner />
      <Skills />
      <Projects />
      <Work />
    </div>
  );
}

export default App;
