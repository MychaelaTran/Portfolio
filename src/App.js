import logo from './logo.svg';
import './App.css';
import { MyNavbar } from './components/MyNavbar';
import { HomeBanner } from './components/HomeBanner';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <HomeBanner />
    </div>
  );
}

export default App;
