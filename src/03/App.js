import { useState } from 'react';
import { apiUsers } from './users/apiUsers';
import { UserListItem } from './users/UserListItem';

function App() {
  // Moge przypisac do zmiennej i z niej skorzystac, ale raczej rzadko stosowane
  // const userLis = apiUsers.map(user => <li>
  //                       <h5>{user.email}</h5>
  //                       <img src={user.avatar} alt={user.email} />
  //                      </li>
  // );

  return (
    <div>
       <ul>
        {apiUsers.map(user => (
          <UserListItem key={user.id} user={user} />
        ))}
       </ul>
    </div>
  );
}

export default App;
