import { useState } from 'react';
import { apiUsers } from './users/apiUsers';
import { UserListItem } from './users/UserListItem';
import { findUserByEmail } from './users/findUserByEmail';

function App() {
  const [users, setUsers] = useState(apiUsers);
  const [phrase, setPhrase] = useState();
  // .filter
  //  ewentualnie nowa zmienna na przefiltrowane dane
  // onChange
  // state


  // Jesli chce najpierw zdefiniowac stala, a pozniej z niej korzystac w JSX
  // const foundUsers = apiUsers.filter(user => {
  //   if (!phrase) return true;

  //   return user.email.toLowerCase().includes(phrase.toLowerCase());
  // });

  const handleFormSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');

    // tak nie robimy
    // users.push()

    // Ja nie ustawiam pozostalych pol, zeby nie zaciemniac ( first_name, itd. Ale w prawdziwej aplikacji nalezy zadbac o spojnosc danych )
    setUsers(prev => [...prev, {
      id: Math.random(),
      email,
      avatar: "https://via.placeholder.com/100x100"
    }]);
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Wyszukaj uzytkownika"
        onChange={e => setPhrase(e.target.value)}
      />

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="email" placeholder="Email" />

        <button>Dodaj</button>
      </form>

      <span>Wyszukujesz: <strong>{phrase}</strong></span>
      <ul>
        {users
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
