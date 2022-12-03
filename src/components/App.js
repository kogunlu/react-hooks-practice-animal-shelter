import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });


useEffect(()=> {
  fetch("http://localhost:3001/pets")
  .then(resp => resp.json())
  .then(json => {
    setPets(json)
  })
},[])

  function onFindPetsClick(filterValue){
    if(filterValue === "all"){
      return fetch("http://localhost:3001/pets")
      .then(resp => resp.json())
      .then(json => {
        setPets(json)
      })
    }else{
      return fetch(`http://localhost:3001/pets?type=${filterValue}`)
      .then(resp => resp.json())
      .then(json => {
        setPets(json)

      })
    }
  }

  function handleAdopt(id){
    const updatedPets = pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted : true} : pet
    })

    setPets(updatedPets)

  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
            onChangeType={setFilters} 
            filters={filters} 
            onFindPetsClick={onFindPetsClick} 
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser 
            pets = {pets}
            onAdoptPet = {handleAdopt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
