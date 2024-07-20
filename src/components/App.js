import '../App.css';
import ParticlesComponent from '../particles/particlebackground';

import LayoutManager from './layout_manager';
function App() {
  return (
    <div className="App">
        <ParticlesComponent id ="particle"/>
        <LayoutManager/>
    </div>
  );
}

export default App;
