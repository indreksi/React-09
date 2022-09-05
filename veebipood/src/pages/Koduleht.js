import { useState } from 'react';

function Koduleht() {
  // const eesliidese abil kuulutan välja uue muutuja, mille nimi on vahetult pärast consti
  // väärtus on jutumärkide vahel
  // semikoolon ei ole javascriptis vajalik
  // semikoolon tähistab rea lõppu

  const [kogus, uuendaKogus] = useState(7);

  const v2henda = () => {
    uuendaKogus(kogus - 1);
  };

  const suurenda = () => {
    uuendaKogus(kogus + 1);
  };

  return (
    <div>
      <div>Olen kodulehel</div>
      <button>Nupp</button>
      <br />
      <br />
      <button onClick={v2henda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  );
}

export default Koduleht;
