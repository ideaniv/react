import "./App.css";
import Header from "./header";
import { useState, useEffect } from "react";

function App() {
  var [count, setCount] = useState(13);
  var [word, setWord] = useState("기본값");
  const [postData, setPostData] = useState([]);
  const [randomData, setRandomData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPostData(json);
      });
    // (async () => {
    //   try {
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/posts"
    //     );
    //     const json = await response.json();
    //     console.log(json);
    //     setPostData(json);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // })();
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setRandomData(json);
      });
  }, [count]);

  return (
    <>
      <Header />
      <section>
        <h1>fetch</h1>
        <p>page : {count}</p>
        <button onClick={() => setCount(count + 1)}>plus</button>
        <button onClick={() => setCount(count - 1)}>minus</button>
        <p>카운트가 변할때마다 실행됨 : {randomData?.title ?? "없음"}</p>
        <hr />
        <input
          type="text"
          value={word}
          onChange={(e) => {
            // console.log(e.target);
            // console.log(e.target.value);
            setWord(e.target.value);
          }}
        />
        <hr />
        <p>postData : {postData.length}</p>
        {postData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          postData.map((value, index) => {
            return (
              <div>
                <p>title : {value.title}</p>
                <p>body : {value.body}</p>
              </div>
            );
          })
        )}
      </section>
    </>
  );
}

export default App;
