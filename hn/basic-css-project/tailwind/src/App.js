// import './App.css';
import React from 'react';
import Header from './components/Header'
import LeftAside from './components/Left-aside'
import Main from './components/Main'
import RightAside from './components/Right-aside'

function App() {
    return (
        <div className="app-container flex flex-col min-h-[100vh] bg-green-300">
            <Header />
            <main className="body-container flex">
                <LeftAside />
                <Main />
                <RightAside />
            </main>
        </div>
    );
}

export default App;

// function App() {
//   return (
//       <div className="bg-red-50 flex flex-col min-h-[100vh]">
//           <header className="bg-mybrowy sticky top-0">헤더</header>
//           <main className="bg-blue-300 flex-1 flex">
//               <section className="bg-pink-300">Left Section</section>
//               <section className="flex-1 bg-purple-200">
//                   {Array.from(Array(100), (_, i) => i).map((v) => (<p className="base_font" key={v}>{v}</p>))}
//               </section>
//               <section className="bg-[#f00]">Right Section</section>
//           </main>
//           {/*<footer >푸터</footer>*/}
//       </div>
//   );
// }
//
// export default App;
