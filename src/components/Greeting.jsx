import { useState } from "react";

const messages = [
  "Good morning! ☀️",
  "Hello there! 👋",
  "Greetings and salutations! 🌟",
  "Hey, how's it going? 😊",
  "Warmest wishes! 🌞",
  "Hi, nice to meet you! 🤝",
  "Top of the morning to you! 🌄",
  "Hey, what's up? 👋",
  "Salutations, my friend! 🙌",
  "Good day to you! 😄",
  "Hey, howdy! 🤠",
  "Hiya, how are you? 😊",
  "G'day, mate! 🇦🇺",
  "Hello, sunshine! ☀️",
  "Hey there, beautiful! 💖",
  "Aloha! 🌺",
  "Hola, amigo! 👋",
  "How's life treating you? 🌼",
  "Welcome, welcome! 🎉",
  "Hey, stranger! 🕵️‍♂️",
  "Good to see you! 👀",
  "Hi, how's your day going? 🌤️",
  "Bonjour! 🇫🇷",
  "Hey, lovely! 💕",
  "Namaste! 🙏",
  "Howdy-do! 🤠",
  "Well, hello! 👋",
  "Hey, champ! 🏆",
  "Greetings, earthling! 👽",
  "Hello, my dear friend! 🌸",
  "Wishing you a fabulous day! 🌈",
  "Hi, it's a pleasure to meet you! 😄",
  "Hey, rockstar! 🎸",
  "Sending you good vibes! ✨",
  "Hola, bonita! 💃",
  "Welcome aboard! ⚓️",
  "Hello, sunshine! ☀️",
  "Hey, superstar! 🌟",
  "Wishing you happiness always! 😊",
  "Hi there, adventurer! 🌍",
  "Hey, party animal! 🎉",
  "Sending you smiles! 😄",
  "Greetings, my friend! 👋",
  "Hi, how's your day so far? 🌤️",
  "Hey, sunshine! ☀️",
  "Wishing you a fantastic day! 🌟",
  "Hello, beautiful! 💐",
  "Hey, trendsetter! 👗",
  "Bonjour, mon ami! 🇫🇷",
  "Greetings from afar! ✈️",
];

export default function Greeting() {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
}
