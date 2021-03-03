import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import axios from "../axios";

import "./Cards.css";

function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/cards");

      setPeople(req.data);
    }

    fetchData();
  }, []);

  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="cards">
      <div className="cards_cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h2>{person.name}</h2>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
