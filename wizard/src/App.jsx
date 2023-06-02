import React, { useEffect, useState } from "react";
import "./App.css";


import Houses from "./components/Houses";
import Navbar from "./components/NavBar";
// import route and routes
import { Route, Routes } from "react-router-dom";
// import link
import { Link } from "react-router-dom";
// import spells
import Spells from "./components/Spells";
// import potions
import Potions from "./components/Potions";
// import sortinghat
import SortingHat from "./components/SortingHat";
// import EndLine from "./components/EndLine";

export default function App() {
  // I want to insert four images of the four houses here
  //when I click on the image, I want to display the house name, and description of the house
  //I want to display the house name and description in a card and there should be a buttton to click to take you to the page Houses.jsx
  //I need to import the Houses.jsx file

  return (
    // I want to add background image here thus the div className="background" that is handled in CSS
    <div className="background">
      <main>
        {/* <!-- Testing Placed my heading here instead of index.html as it works better--> */}
        <header className="main-header">
          <div className="main-hipster-triangle">
            <div className="hipster-triangle">
              <svg height="370" width="370">
                <line x1="180" y1="10" x2="185" y2="350" className="line" />
                <polygon points="10,10 350,10 185,350" className="triangle" />
                <circle cx="182" cy="115" r="105" className="circle" />
              </svg>
            </div>
          </div>
          <Navbar />
        </header>

        {/* <!-- testing --> */}

        <div className="paragraph">
          <p>
            Welcome to Wizard World, the ultimate destination for aspiring
            witches and wizards! Step inside and prepare to embark on an
            unforgettable journey through the halls of Hogwarts School of
            Witchcraft and Wizardry.
          </p>
          <p>
            Get to know your fellow classmates and immerse yourself in the world
            of Hogwarts. Learn all about the most famous witches and wizards
            from each house, and discover their unique traits and
            accomplishments. Whether you're a brave Gryffindor, a cunning
            Slytherin, a loyal Hufflepuff, or a clever Ravenclaw, you'll find
            plenty of inspiration and insight into the magic of the wizarding
            world.{" "}
          </p>
          <p>
            And speaking of spells and potions, you won't want to miss our
            comprehensive collection of magical recipes and incantations. From
            beginner's charms to advanced hexes, our library has everything you
            need to master the art of wizardry. Unleash your inner magic and
            explore the vast collection of spells and potions at your
            fingertips.{" "}
          </p>
          <p>
            Join us on a journey of discovery and exploration as we delve into
            the rich history and lore of Hogwarts. You'll have the opportunity
            to learn about the characters and stories that have captured the
            hearts and imaginations of fans all over the world. From the daring
            exploits of Harry Potter to the legendary achievements of Albus
            Dumbledore, there's something for everyone to enjoy.
          </p>
          <p>
            So come along and explore the wonders of Wizard World! You never
            know what amazing discoveries and adventures lie ahead.
          </p>

          {/* routes to app.jsx, house.jsx, spells.jsx and sortinghat.jsx */}
          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/houses" element={<Houses />} />
            <Route path="/spells" element={<Spells />} />
            <Route path="/potions" element={<Potions />} />
            <Route path="/sortinghat" element={<SortingHat />} />
          </Routes>
        </div>

      </main>
    </div>
  );
}
