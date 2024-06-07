import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [playerNameValue, setPlayerNameValue] = useState("");

  function handleClick() {
    setPlayerNameValue(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerNameValue ? playerNameValue : "unknown entity"}!</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
