import { createContext, useContext, useState } from 'react';
import { MainLayout } from './MainLayout';
import { UserProvider, useUser } from './UserContext';

export const MyFirstContext = createContext({
  name: ''
});

const Hello = () => {
  const user = useContext(MyFirstContext);

  if (!user) return <div>Nie zalogowano</div>

  return <span>Hello {user.name}!</span>
}

const Hi = () => {
  const { user } = useUser();

  if (!user) return <div>Nie zalogowano</div>

  return <span>Hi, {user.name}!</span>
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <MyFirstContext.Provider value={user}>
      <UserProvider>
        {/* <div>
        <Hello />

        <button onClick={() => setUser({ name: 'Ola' })}>Zaloguj</button>
      </div> */}

        {/* Props drilling -> przekazywanie propsow przez kilka poziomow komponentow */}

        <Hi />

        <MainLayout />
      </UserProvider>
    </MyFirstContext.Provider>
  );
}

export default App;
