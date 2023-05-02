import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  
  function handleDeleteBot(bot) {
    
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(deletedBot => {
     
      setBots(bots => bots.filter(bot => bot.id !== deletedBot.id));
      setBotArmy(botArmy => botArmy.filter(bot => bot.id !== deletedBot.id));
    })
  }
  
  
  function handleBotClick(bot) {
    
    if (!botArmy.includes(bot)) {
      setBotArmy((botArmy) => [...botArmy, bot]);
    }
  }

 
  function handleBotRemove(removedBot) {
    setBotArmy((botArmy) => botArmy.filter((bot) => bot !== removedBot));
  }

  return (
    <div>
      {/* Render the YourBotArmy component */}
      <YourBotArmy
        botArmy={botArmy}
        onBotRemove={handleBotRemove}
        onDeleteBot={handleDeleteBot}
      />

      {/* Render the BotCollection component */}
      <BotCollection
        bots={bots}
        onBotClick={handleBotClick}
        onDeleteBot={handleDeleteBot}
      />
    </div>
  );
}

export default App;
