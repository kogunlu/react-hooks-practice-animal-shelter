import React from "react";
import Pet from "./Pet";

function PetBrowser( {pets, onAdoptPet} ) {




  return (
  <div className="ui cards">
    {pets.map(pet => {
      return (
      <Pet 
        petDetails={pet} 
        key={pet.id}
        onAdoptPet = {onAdoptPet}
        isAdopted = {pet.isAdopted}
      />
      )
    })}
  </div>
  )
}

export default PetBrowser;
