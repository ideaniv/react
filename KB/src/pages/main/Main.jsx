import React, { useEffect, useState } from "react";

// state가 변하면 useState가 포함된 함수를 전부 재실행한다
export default function Main() {
  var [historyList, setHistoryList] = useState([]);
  var [count, setCount] = useState(0);

  // useEffect ==> 첫번째 파라미터 : 화살표함수()=>{} , 두번째 파라미터 : [] <- 내부에 감지할 useState의 getter변수 대입
  // useEffect는 무조건 한번 실행
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/history`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setHistoryList(json);
      });
  }, []);

  useEffect(() => {
    console.log("history 값 :", historyList);
  }, [historyList]);

  useEffect(() => {
    console.log("count 값 :", count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count : {count}</button>
      <ul>
        {historyList.map((v, i) => (
          <div
            key={v.id}
            style={{
              backgroundColor: "gray",
            }}
          >
            <img src={`${process.env.REACT_APP_API_URL}${v.logo}`} />
            <p>{v.title}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
