import React, { useEffect, useState } from "react";

export default function Main() {
  var [historyList, setHistoryList] = useState([]);

  // useEffect ==> 첫번째 파라미터 : 화살표함수()=>{} , 두번째 파라미터 : [] <- 내부에 감지할 useState의 getter변수 대입
  // useEffect는 무조건 한번 실행
  useEffect(() => {
    // console.log("한번만실행");
    fetch("http://192.168.219.128:8080/api/history", {
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        // .json()함수는 response의 body를 가져오는 유틸내장함수
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setHistoryList(json);
      });
  }, []);

  return (
    <div>
      <ul>
        {historyList.map((v, i) => (
          <div
            key={v.id}
            style={{
              backgroundColor: "gray",
            }}
          >
            <img src={`http://192.168.219.128:8080${v.logo}`} />
            <p>{v.title}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
