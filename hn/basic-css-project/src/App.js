import "./App.css";
import Header from "./components/Header";
import LeftAside from "./components/Left-aside";
import RightAside from './components/Right-aside'
import Main from './components/Main'

function App() {
  return (
    <div className="app-container">
      <Header />
        <div className="body-container">
        <LeftAside />
        <Main />
        <RightAside />
        </div>
    </div>
  );
}

export default App;
