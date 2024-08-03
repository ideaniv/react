import React from "react";
import { useSelector } from "react-redux";

export default function About() {
  const countReducer = useSelector((state) => state.countReducer);
  return <div>{countReducer.count}</div>;
}
