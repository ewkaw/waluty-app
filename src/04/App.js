import { useState } from 'react';
import { apiUsers } from './users/apiUsers';
import { UserListItem } from './users/UserListItem';
import { findUserByEmail } from './users/findUserByEmail';
import { NoUsersText } from './users/NoUsersText';

const colorsMap = {
  'black': '#000',
  'white': '#fff',
}

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
const currentColor = 'black';


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

  const deleteUser = userId => setUsers(prev => prev.filter(user => user.id !== userId));
  // to samo czytelniej:
  const _deleteUser = userId => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  };

  const editUser = (userId, email) => setUsers(
    prev => prev.map(user => user.id === userId ? ({ ...user, email }):  user)
  );
  // Mniej skrotowa wersja
  // const editUser = (userId, email) => setUsers(
  //   prev => prev.map(user => {
  //     if (user.id === userId) return { ...user, email };

  //     return user;
  //   })
  // );

  // Wyswietlanie warunkowe
  
  // Wyswietlanie warunkowe
  // Potencjalny problem ze wspoldzieleniem styli / interfejsu graficznego miedzy stanem pustym, a stanem kiedy mamy dane
  // if (users.length === 0) return <div style={{ border: '1px solid blue' }}><NoUsersText /></div>

  // Mozna uzywac switch-case
  // switch(currentColor) {
  //   case 'black':
  //     return <div></div>
  // }

  return (
    <div style={{ border: '1px solid blue' }}>
      <input
        type="search"
        placeholder="Wyszukaj uzytkownika"
        onChange={e => setPhrase(e.target.value)}
      />

     {/* Nie polecam ternary operatora */}
      {
        phrase 
        ? 
          <span>Wyszukujesz: <strong>{phrase}</strong></span>
        : 
          <span><strong>Brak filtrow</strong></span>
      }

      {phrase && (
        // Fragment (<>) -> JSX oczekuje, ze zwrocimy jeden nadrzedny element
        <>
          {phrase.length > 2 && <span>Wyszukujesz: <strong>{phrase}</strong></span>}

          {phrase.length <= 2 && <span>Za malo znakow</span>}
        </>
      )}

      {!phrase && <span><strong>Brak filtrow</strong></span>}

      {/*  Unikajmy zagniezdzen ternary operatora  */}
      {/* {
        phrase 
        ? 
          phrase.length > 2 ? <span>Wyszukujesz: <strong>{phrase}</strong></span> : <span>Za malo znakow</span>
        : 
          <span><strong>Brak filtrow</strong></span>
      } */}
      
      {/* Sposob na wyswietlanie typow wyliczeniowych */}
      {/* {colorsMap[currentColor]} */}

      {/* Jezeli nie ma uzytkownikiw, to pokaz komponent <NoUsersText /> */}
      {users.length === 0 && <NoUsersText />}
      {/* Trzeba uwazac na takie przypadki, bo kiedy nie bedzie uzytkownikow, to zobaczymy zero */}
      {/* {users.length && <NoUsersText />} */}

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="email" placeholder="Email" />

        <button>Dodaj</button>
      </form>

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
            <UserListItem 
              key={user.id} 
              user={user}
              onDelete={deleteUser}
              onEdit={editUser}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
