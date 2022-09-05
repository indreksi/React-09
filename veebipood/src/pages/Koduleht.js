import { useState } from 'react';

function Koduleht() {
  // const eesliidese abil kuulutan välja uue muutuja, mille nimi on vahetult pärast consti
  // väärtus on jutumärkide vahel
  // semikoolon ei ole javascriptis vajalik
  // semikoolon tähistab rea lõppu

  const [kogus, uuendaKogus] = useState(7);
  const [keel, uuendaKeel] = useState(localStorage.getItem('keel') || 'est');
  //vasakpoolne on muutuja - parem on (UUS-VÄÄRTUS)

  //kaks püstist kriipsu on "VÕI" märk Crtl+Alt+>  tuleb püstine kriips |
  //&& on siis "ON" märk

  const v2henda = () => {
    uuendaKogus(kogus - 1);
  };

  const suurenda = () => {
    uuendaKogus(kogus + 1);
  };

  const muudakeelEST = () => {
    uuendaKeel('est');
    localStorage.setItem('keel', 'est');
  };
  const muudakeelENG = () => {
    uuendaKeel('eng');
    localStorage.setItem('keel', 'eng');
  };
  const muudakeelRUS = () => {
    uuendaKeel('rus');
    localStorage.setItem('keel', 'rus');
  };

  //parem klõps -> inspect -> Application -> menüüst Local Storage

  return (
    <div>
      <div>Olen kodulehel</div>
      <button>Nupp</button>
      <br />
      <br />
      <button onClick={v2henda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
      <br />
      <br />
      <button onClick={muudakeelEST}>Eesti keel</button>
      <button onClick={muudakeelENG}>to English</button>
      <button onClick={muudakeelRUS}>Ryccki yazõk</button>
      {keel === 'est' && <div>Eesti keelne leht</div>}
      {keel === 'eng' && <div>Inglise keelne leht</div>}
      {keel === 'rus' && <div>Vene keelne leht</div>}
    </div>
  );
}

export default Koduleht;

//Javascritpi värvid:
// tumesinine - uue kuulutamine, liigi andmine - const, function, let
// sinine - minu loodud muutuja
//helesinine - JS enda loodud muutuja
//kollane - funktsioon
//punane/oranž - jutumärkide väärtusa

//MÄRGID

// {} - HTMLs Javascripti kasutamiseks
// {} - Javascriptis koodiblokkide loomiseks
// const funktsioon = () => {}  if (true) {} else {}
// [] - useState sees vasaks pool ja parem pool
// || - OR märk ; kui on vasakul pool tühjus, võta parem pool
// && - AND märk ; kui on vasakul pool tõde, tee ka parem pool
// ; - semikoolon ; rea lõpetamiseks
// () => {} - funktsiooni tähistus Javascriptis
// () - funktsiooni käima panemiseks
