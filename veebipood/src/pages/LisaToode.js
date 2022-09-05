import { useRef, useState } from 'react';

function LisaToode() {
  //HOOK - tähendab use algusega funktsionaalsust

  const nimiRef = useRef();
  //ref läheb HTMLs input sisse
  //ref kuulab mida inputi sisse sisestatakse reaalajas

  const [s6num, uuendas6num] = useState('Lisa uus toode!');

  const lisaUusToode = () => {
    //näitab browseri konsoolis teateid
    console.log(nimiRef.current.value);
    if (nimiRef.current.value === '') {
      uuendas6num('Tühja nimega ei saa toodet lisada!');
    } else {
      uuendas6num('Uus toode on lisatud!');
    }
  };

  return (
    <div>
      <div>{s6num}</div>
      <input ref={nimiRef} type='text' />
      <button onClick={lisaUusToode}>Lisa uus toode</button>
    </div>
  );
}

export default LisaToode;
