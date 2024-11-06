import React from "react";

const MindfuckManual = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Mindfuck Manual</h1>
      <p className="text-lg mb-4">
        Each person gets 3 random cards at the beginning of the game. Choose a
        person to start the game, the task is to go around picking one person to
        play an action with the card.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>ACTION 1: Swap it with one of your cards</li>
        <li>ACTION 2: Keep the card as in the deck</li>
      </ul>
      <p className="text-lg mb-4">
        When the card hits the shared deck, you have to exercise its action.
      </p>
      <h2 className="text-2xl font-bold mb-4">Power Cards</h2>
      <ul className="list-disc list-inside mb-4">
        <li>K - You can shuffle any one person&apos;s cards.</li>
        <li>Q - Either see anyone&apos;s cards or see your cards.</li>
        <li>
          J - You can swap ONE of your cards with anyone else&apos;s cards
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Points table</h2>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Card</th>
            <th className="border px-4 py-2">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">K</td>
            <td className="border px-4 py-2">13</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Q</td>
            <td className="border px-4 py-2">12</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">J</td>
            <td className="border px-4 py-2">11</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">10</td>
            <td className="border px-4 py-2">...</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">9</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">8</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">7</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">6</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">5</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">4</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">3</td>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">...</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">A</td>
            <td className="border px-4 py-2">1</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">JOKER</td>
            <td className="border px-4 py-2">0</td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg font-bold mt-4 mb-2">Objective:</p>
      <p className="text-lg mb-4">
        Whoever has the cards with the lowest sum of points, wins.
      </p>
      <p className="text-lg font-bold mt-4 mb-2">Additional Rule:</p>
      <p className="text-lg">
        If you find a Joker, then you can swap the full deck with another
        player.
      </p>
    </div>
  );
};

export default MindfuckManual;
