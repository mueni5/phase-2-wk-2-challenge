import React from "react";
import "./index.css";

function BotCollection({ bots, onBotClick, onDeleteBot }) {
  return (
    
    <section className="card-row2">
      {bots.map((bot) => {
        return (
          
          <div className="card" key={bot.id}>
            <img
              src={bot.avatar_url}
              alt={bot.name}
             
              onClick={() => onBotClick(bot)}
            />
            <div>
              <h3>{bot.name}</h3>
              <p>{bot.catchphrase}</p>
            </div>
            <div>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <button
                className="btn"
                onClick={() => onDeleteBot(bot)}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default BotCollection;
