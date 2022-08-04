import { useState, useEffect } from "react";



export const ToppingsList = () => {

    const [toppings, setToppings] = useState(0);
    const [customers, setCustomers] = useState([{ name: "Jim" }, { name: "Tim" }]);

    useEffect(() => {
      const Chimichanga = [...customers]
      // console.log(newState, "before")
      Chimichanga.push({name: "Ben"},
      {name: "Tom"})
      // console.log(Chimichanga, "after")

      setCustomers(Chimichanga)
    }, []);


    return (
        <>
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
        </div>
        </>
    )
}