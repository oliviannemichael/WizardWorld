import "./Potions.css";

export default function Potions() {
  return (
    <div className="houses">
      <div className="card">
        <img
          className="HouseImage"
          src="https://static.wikia.nocookie.net/harrypotter/images/5/51/Ageing_Potion_PM.png"
        />
        <div className="card-body">
          <h5 className="card-title">Ageing Potion</h5>
          <p className="card-text">
            <p>Effect: Aged drinker temporarily.</p>
            <p>
              Ingredients: Newt spleens, Bananas, An orange snake, A green leaf
            </p>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="HouseImage"
          src="https://static.wikia.nocookie.net/harrypotter/images/8/8b/Beautification_Potion_Bottle.png"
        />
        <div className="card-body">
          <h5 className="card-title">Beautification Potion</h5>
          <p className="card-text">
            <p>
              Effect: Enhances the attractiveness of the drinker's physical
              appearance.
            </p>
            <p>
              Ingredients: Fairy wings, Morning dew, Rose Petals, Lady's Mantle,
              Unicorn hair, Ginger roots, Boomslang skin
            </p>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="HouseImage"
          src="https://static.wikia.nocookie.net/harrypotter/images/9/97/CupidCrystals.jpg"
        />
        <div className="card-body">
          <h5 className="card-title">Confusing Concoction</h5>
          <p className="card-text">
            <p>Effect: Confusion.</p>
            <p>Ingredients: Scurvy grass, Lovage, Sneezewort</p>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="HouseImage"
          src="https://static.wikia.nocookie.net/harrypotter/images/7/70/Dragon_dung_fertiliser.JPG"
        />
        <div className="card-body">
          <h5 className="card-title">Dragon Dung Fertilizer</h5>
          <p className="card-text">
            <p>Effect: Promotes the growth of plants.</p>
            <p>Ingredients: Sloth brain, 7 pieces of Dragon dung, Stewed Mandrake, 2 rat spleens, Toasted dragonfly thoraxes, 3 Flying Seahorses</p>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="HouseImage"
          src="https://static.wikia.nocookie.net/harrypotter/images/9/98/Invigoration-draught.png"
        />
        <div className="card-body">
          <h5 className="card-title">Dragon Dung Fertilizer</h5>
          <p className="card-text">
            <p>Effect: Invigoration Draught.</p>
            <p>Ingredients: Alihotsy leaves, Dried billywig stings, Peppermint, Stewed Mandrake, Infusion of Wormwood, Honeywater, Vervain infusion, Scurvy grass, Lovage</p>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="HouseImage"
          src="https://static.wikia.nocookie.net/harrypotter/images/f/fa/Invisibility_potion.jpg"
        />
        <div className="card-body">
          <h5 className="card-title">Invisibility Potion</h5>
          <p className="card-text">
            <p>Effect: Temporary invisibility.</p>
            <p>Ingredients: Cherries, Chicken, Spiders</p>
          </p>
        </div>
      </div>
    </div>
  );
}
