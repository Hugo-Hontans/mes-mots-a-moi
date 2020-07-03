import React from "react";
import "./home.css";
import { WordAdd } from "../word-add/word-add";

export function Home(props) {
  return (
    <article>
      <h1>HOME</h1>
      <WordAdd></WordAdd>
    </article>
  );
}