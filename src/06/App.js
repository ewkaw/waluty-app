import { useState } from 'react';
import { apiUsers } from './users/apiUsers';
import { UserListItem } from './users/UserListItem';
import { findUserByEmail } from './users/findUserByEmail';
import { NoUsersText } from './users/NoUsersText';
import { useUserList } from './users/useUserList';

function App() {
  const [phrase, setPhrase] = useState();

  const {
    users,
    error,
    setUsers,
  } = useUserList(phrase);
 
  // To samo co wyzej w dluzszej formie
  // const userList = useUserList();
  // const {
  //   users,
  //   error,
  //   setUsers,
  // } = userList;

  const handleFormSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');

    setUsers(prev => [...prev, {
      id: Math.random(),
      email,
      avatar: "https://via.placeholder.com/100x100"
    }]);
  }

  const deleteUser = userId => setUsers(prev => prev.filter(user => user.id !== userId));

  const editUser = (userId, email) => setUsers(
    prev => prev.map(user => user.id === userId ? ({ ...user, email }) : user)
  );


  return (
    <div style={{ border: '1px solid blue' }}>
      {error && <span>{error.message}</span>}

      <input
        type="search"
        placeholder="Wyszukaj uzytkownika"
        onChange={e => setPhrase(e.target.value)}
      />

      {phrase && (
        <>
          {phrase.length > 2 && <span>Wyszukujesz: <strong>{phrase}</strong></span>}

          {phrase.length <= 2 && <span>Za malo znakow</span>}
        </>
      )}

      {!phrase && <span><strong>Brak filtrow</strong></span>}

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="email" placeholder="Email" />

        <button>Dodaj</button>
      </form>

      <ul>
        {users
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
