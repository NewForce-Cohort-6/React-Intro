import { useState, useEffect } from "react";

export const AnimalForm = () => {
  // initialize state variables
  const [customers, setCustomers] = useState([]);
  const [locations, setLocations] = useState([]);

  const [newAnimal, setNewAnimal] = useState({
    name: "",
    breed: "",
    locationId: 0,
    customerId: 0,
  });

  // When the component loads, get all the customers and all the locations to print the dropdowns
  useEffect(() => {
    fetch("http://localhost:8088/customers")
      .then((r) => r.json())
      .then((customersFromAPI) => {
        setCustomers(customersFromAPI);
      })
      .then(() => fetch("http://localhost:8088/locations"))
      .then((r) => r.json())
      .then((parsedLocations) => {
        setLocations(parsedLocations);
      });
  }, []);

  const saveAnimal = () => {
    // send the new animal in state to the database
    fetch("http://localhost:8088/animals/", {
        method: "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    })
    .then(() => {
        alert("Animal added!")
    })
  }

  return (
    <>
      <h1>Register a New Animal</h1>
      <fieldset>
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            const copyOfState = { ...newAnimal };
            copyOfState.name = event.target.value;
            setNewAnimal(copyOfState);
          }}
        />
      </fieldset>
      <fieldset>
        <label>Breed:</label>
        <input
          type="text"
          onChange={(event) => {
            const copyOfState = { ...newAnimal };
            copyOfState.breed = +event.target.value;
            setNewAnimal(copyOfState);
          }}
        />
      </fieldset>
      <fieldset>
        <label>Customer:</label>
        <select
          onChange={(event) => {
            const copyOfState = { ...newAnimal };
            copyOfState.customerId = +event.target.value;
            setNewAnimal(copyOfState);
          }}
        >
          {customers.map((singleCustomer) => (
            <option value={singleCustomer.id}>{singleCustomer.name}</option>
          ))}
        </select>
      </fieldset>
      <fieldset>
        <label>Locations:</label>
        <select onChange={(event) => {
            const copyOfState = { ...newAnimal };
            copyOfState.locationId = +event.target.value;
            setNewAnimal(copyOfState);
          }}>
          {locations.map((singleLocation) => (
            <option value={singleLocation.id}>{singleLocation.name}</option>
          ))}
        </select>
      </fieldset>
      <button onClick={saveAnimal}>Save</button>
    </>
  );
};
