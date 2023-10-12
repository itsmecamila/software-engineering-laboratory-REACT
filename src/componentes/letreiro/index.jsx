import React, { useState, useEffect } from 'react';
import './styles.css';

function LetreiroPiscante({ frase }) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      if (contador < frase.length) {
        setContador(contador + 1);
      } else {
        setContador(0);
      }
    }, 200);

    return () => {
      clearTimeout(intervalID);
    };
  }, [contador, frase]);

  return (
    <div className="letra-piscante">
      {frase.substring(0, contador)}
    </div>
  );
}

export default LetreiroPiscante;
