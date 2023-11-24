import { useState } from 'react';
import { apiUsers } from './users/apiUsers';
import { UserListItem } from './users/UserListItem';
import { findUserByEmail } from './users/findUserByEmail';

function App() {
  const [phrase, setPhrase] = useState();
  // .filter
  //  ewentualnie nowa zmienna na przefiltrowane dane
  // onChange
  // state


  const foundUsers = apiUsers.filter(user => {
    if (!phrase) return true;

    return user.email.toLowerCase().includes(phrase.toLowerCase());
  });

  return (
    <div>
      <input
        type="search"
        placeholder="Wyszukaj uzytkownika"
        onChange={e => setPhrase(e.target.value)}
      />

      <span>Wyszukujesz: <strong>{phrase}</strong></span>
      <ul>
        {foundUsers
          // Bardzo czesto mozna sie spotkac z filtrowaniem tuz przed wyswietleniem ( .map() )
          // apiUsers
          // .filter(user => true)
          // wywolanie funkcji findUserByEmail(phrase), zwraca inna funkcje filtrujaca ( patrz plik findUserByEmail.js )
          .filter(findUserByEmail(phrase))
          // Moge tak, jesli funkcja filtrujaca oczekuje jako argumentu frazy
          // .filter(user => findUserByEmail(user, phrase))
          // Nie moge tak zrobic, bo jako drugi argument dostane index, a nie fraze
          // .filter(findUserByEmail)
          .map(user => (
            <UserListItem key={user.id} user={user} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
