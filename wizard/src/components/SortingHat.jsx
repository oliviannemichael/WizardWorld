import "./SortingHat.css";
import React, { useState } from "react";
import Popup from "./Popup";
import hogwards from "../hogwards.js";
import EndLine from "./EndLine";

export default function SortingHat() {
  let [buttonPopup, setButtonPopup] = useState(false);

  let [houseName, setHouseName] = useState("");

  //filter the hogward and for every item should match the house name and save it.
  //To show it on ie a card/featured create the card and use the filteredArray[0] to show the info
  let filteredArray = hogwards.filter((i) => i.name === houseName);
  // console.log(filteredArray);

  // I need a function called sorting hat that will randomly assign a house to the user when they click on the button
  function sortingHat() {
    let houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
    let randomHouse = houses[Math.floor(Math.random() * houses.length)];
    return randomHouse;
  }

  {
    /* //I want a button that will randomly assign a house to the user when
        they click on the button and the result appears below the button in a
        card according to the house they belong from the function Houses above
        // */
  }

  {
    /* testing */
  } return (
    <div>
  <section className="sorting-hat">
    <h1>Hogwarts sorting hat</h1>
    <img
      id="hat"
      src="https://cdn2.hubspot.net/hubfs/678613/Projects/CodePen/Harry%20Potter%20Sorting%20Hat/Sorting%20Hat.png"
      alt="Sorting Hat"
    ></img>
    <p id="message"></p>
    <div className="buttonContainer">
    <button
      className="button-85"
      role="button"
      onClick={() => {
        setHouseName(sortingHat());
        setButtonPopup(true);
      }}
      id="sortbutton"
      
    >

      Click to Get Sorted Into Your House
    </button>
    </div>
    <p id="message"></p>
  </section>;

  {
    /* testing */
  }

  <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
    {houseName}
    {/* In addition to the house name, I want to display the house description */}
    {/* but first I need to save it to a variable otherwise it reads undefined */}
    <br />
    <br />
    <div className="title"> House:</div>{" "}
    {filteredArray[0] && filteredArray[0].name} <br />
    <div className="subtitle"> Description:</div>{" "}
    {filteredArray[0] && filteredArray[0].description}
    <br />
    <div className="column-container">
      <div className="column">
        <div className="subtitle">Founder: </div>
        {filteredArray[0] && filteredArray[0].founder}
        <br />
        <div className="subtitle">Common Room:</div>{" "}
        {filteredArray[0] && filteredArray[0].commonRoom}
        <br />
        <div className="subtitle">Password: </div>
        {filteredArray[0] && filteredArray[0].password}
        <br />
        <div className="subtitle">Mascot:</div>{" "}
        {filteredArray[0] && filteredArray[0].mascot}
        <br />
      </div>
      <div className="column">
        <div className="subtitle">Head of House:</div>{" "}
        {filteredArray[0] && filteredArray[0].headOfHouse}
        <br />
        <div className="subtitle">Ghost:</div>{" "}
        {filteredArray[0] && filteredArray[0].houseGhost}
        <br />
        <div className="subtitle">Colors:</div>{" "}
        {filteredArray[0] && filteredArray[0].colors}
        <br />
        <div className="subtitle">Element:</div>{" "}
        {filteredArray[0] && filteredArray[0].element}
        <br />
        <div className="subtitle">Traits:</div>{" "}
        {filteredArray[0] && filteredArray[0].traits}
      </div>
    </div>
  </Popup>;
  </div>
  )
}
