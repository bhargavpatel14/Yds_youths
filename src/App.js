import React from "react";
import Form from "./components/Form";
import logo from "./assets/logo.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo"></img>
        <h1 className="App-title">Hari Prabodham Youths Kitchener</h1>
      </header>
      <Form />
    </>
  );
}

export default App;
