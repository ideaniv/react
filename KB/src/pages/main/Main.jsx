import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "../../store/reducers/count";

function App() {
  // var [count, setCount] = useState(0);
  const loaderData = useLoaderData();
  var [word, setWord] = useState("기본값");
  const [postData, setPostData] = useState(loaderData);
  const [randomData, setRandomData] = useState(null);
  const navigate = useNavigate();
  const countReducer = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();
  console.log(countReducer);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${countReducer.count}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setRandomData(json);
      });
  }, [countReducer.count]);

  return (
    <>
      <Header />
      <section>
        <h1>fetch</h1>
        <p>page : {countReducer.count}</p>
        <button
          onClick={() => {
            console.log("++");
            dispatch(plus(5));
          }}
        >
          plus
        </button>
        <button
          onClick={() => {
            console.log("--");
            dispatch(minus([1, 2, 3]));
          }}
        >
          minus
        </button>
        <p onClick={() => navigate("/about")}>go to About</p>
        <p onClick={() => navigate("/arr")}>go to arr</p>
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
