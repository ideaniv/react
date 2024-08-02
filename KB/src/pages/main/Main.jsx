import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { useLoaderData } from "react-router-dom";

function App() {
  var [count, setCount] = useState(13);
  const loaderData = useLoaderData();
  var [word, setWord] = useState("기본값");
  const [postData, setPostData] = useState(loaderData);
  const [randomData, setRandomData] = useState(null);

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
        {postData.map((value, index) => {
          return (
            <div key={value.id}>
              <p>title : {value.title}</p>
              <p>body : {value.body}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App;
