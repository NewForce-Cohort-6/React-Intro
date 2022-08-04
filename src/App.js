import React from "react";
import { StuffsList } from "./components/stuffs/StuffsList";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/nav/Navbar";

function App() {
  return (
    <>
    <Navbar />


      {/* <div className="App">Hello World</div>
      <section className="sibling">Thanks for all the fish</section> */}




<div>
      <h1>Number of Toppings</h1>
      <p>{toppings}</p>
      <button onClick={() => setToppings(toppings + 1)}>Add Toppings</button>
      <select>
        <option>select a customer</option>
        {customers.map((singleCustomer) => (
          <option>{singleCustomer.name}</option>
          ))}
      </select>
            <div>
                <h2>Collection of things</h2>
                {stuffs.map(x => <TacoJr  key={x.id} singleObj={x} />)}
            </div>
    </div>
    </>
  );
}

export default App;
