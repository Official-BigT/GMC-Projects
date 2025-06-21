import React from "react";
function MadeGoal() {
  return (
    <div>
      <h2>GOOOOOOAAAAAALLLLL!!!</h2>
    </div>
  );
}

function MissedGoal() {
  return (
    <div>
      <h2>Missed Goal!</h2>
      <p>Better luck next time!</p>
    </div>
  );
}

function Football(props) {
  const isGoal = props.isGoal || true; // Default to true if isGoal is not provided
  //   const isMissed = props.isMissed || false; // Default to false if isMissed is not provided
  // Destructure props to get name, goals, age, and club
  const playerInfo = {
    name: "Lionel Messi",
    goals: 700,
    age: 36,
    club: "Inter Miami",
  };
  const { name, goals, age, club } = playerInfo;
  if (isGoal) {
    return (
      <>
        <MadeGoal />
        {/* Display the player's information if the goal is made */}
        <div>
          {/* <h1>Football Player Information:{playerInfo}</h1> */}
          <h2>{name} scored a goal!</h2>
          <p>Goals: {goals}</p>
          <p>Age: {age}</p>
          <p>Club: {club}</p>
        </div>
      </>
    );
  } else {
    // If the goal is missed, show the MissedGoal
    <MissedGoal />;
  }
  return (
    <>
      <h3></h3>
    </>
  );
}

export default Football;
