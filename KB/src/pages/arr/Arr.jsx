import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pushItem, popItem } from "../../store/reducers/arr";
import { useNavigate } from "react-router-dom";

export default function Arr() {
  const [text, setText] = useState("");
  const arrReducer = useSelector((state) => state.arrReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h2>arrReducer</h2>
      <input
        type="text"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch(pushItem(text))}>추가</button>
      <button onClick={() => dispatch(popItem())}>삭제</button>
      <p onClick={() => navigate("/")}>go to /</p>
      {arrReducer.arr.map((v, index) => {
        return <p key={index}>{v}</p>;
      })}
    </div>
  );
}
