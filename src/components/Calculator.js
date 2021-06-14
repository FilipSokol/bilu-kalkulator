import React, { useState } from "react";

// const convertValue = (valueB) => {
//   if (valueB === "") {
//     return (valueB = "");
//   }
// };

const Calculator = () => {
  const [ValueB, setValueB] = useState(0);

  return (
    <div className="container">
      <h2>KALKULATORÓWKA-BILÓWKA</h2>
      Jeśli masz zadanie typu
      <p classname="longtext">
        "Przy prawdopodobieństwie braku strony równym 0.0001 oraz szybkości
        dostępu do pamięci i dysku równym 10 ns i 10 ms średni czas dostępu
        dopamięci wynosi:"
      </p>
      <p>Podaj prawdopodobieństwo braku strony:</p>
      <input placeholder="0" onChange={(e) => setValueB(e.target.value)} />
      <p>Wzór:</p>
      <p>
        (1 - {ValueB}) * 0.00001 + {ValueB} * 10
      </p>
      <p>= {(1 - ValueB) * 0.00001 + ValueB * 10}</p>
      <p>Wynik w ns:</p>
      <p>{Math.round(((1 - ValueB) * 0.00001 + ValueB * 10) * 1000000)}</p>
      <p>Jak nie ma tego wyniku to szukaj w μs:</p>
      <p>{Math.round(((1 - ValueB) * 0.00001 + ValueB * 10) * 1000)}</p>
    </div>
  );
};

export default Calculator;
