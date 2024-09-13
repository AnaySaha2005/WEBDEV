import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});
  const url = "https://official-joke-api.appspot.com/random_joke";
  const getnewJoke = async () => {
    let response = await fetch(url);
    let jsonjoke = await response.json();
    setJoke(jsonjoke);
  };
  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(url);
      let jsonjoke = await response.json();
      console.log(jsonjoke)
      setJoke({ setup: jsonjoke.setup, punchline: jsonjoke.punchline });
    }
    getFirstJoke()
  }, []);
  return (
    <div>
      <h3>Joker</h3>
      <button onClick={getnewJoke}>Joke</button>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
}
