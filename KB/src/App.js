import "./App.css";
import Header from "./header";
import Profile from "./components/offcanvas/Profile";

function App() {
  return (
    <>
      <Header />
      <section>
        <p className="test">123</p>
        <Profile />
      </section>
    </>
  );
}

export default App;
