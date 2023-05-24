import "./Spells.css"

export default function Spells() {
    return (
      <div className="spells">
        <div className="card">
          <img
            className="SpellImage" 
            src="https://static.wikia.nocookie.net/harrypotter/images/e/e5/Age_Line_surrounding_the_Goblet_of_Fire_PM.jpg"
          />
          <div className="card-body">
            <h5 className="card-title">Age Line</h5>
            <p className="card-text">
            <p>Category: Charm</p>
            <p>Effect: Prevents people above or below a certain age from access to a target.</p>
            <p>Light: Blue</p>
            </p>
          </div>
        </div>
      </div>
    );
  }
  