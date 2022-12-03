import React from "react";


function Pet({petDetails, isAdopted, onAdoptPet}) {


  return (
    <div className="card" data-testid="pet" id={petDetails.id}>
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {petDetails.gender === "male" ? "♂" : "♀" }
          {petDetails.name}
        </span>
        <div className="meta">
          <span className="date">{petDetails.type}</span>
        </div>
        <div className="description">
          <p>Age: {petDetails.age}</p>
          <p>Weight: {petDetails.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted === true ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button"  onClick={(e) => onAdoptPet(petDetails.id)}>Adopt pet</button> }
        
        
      </div>
    </div>
  );
}

export default Pet;
