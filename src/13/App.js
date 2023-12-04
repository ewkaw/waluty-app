import { useState, memo, useMemo, useCallback } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserListPage } from './UserListPage';
import { HomePage } from './HomePage';
import { UserDetailsPage } from './UserDetailsPage';
import { UserDetailsModal } from './UserDetailsModal';

// Definicja routera ( sciezek w naszej aplikacji )
const router = createBrowserRouter([
  {
    // sciezka dla ktorej renderujemy <HomePage />
    path: '/',
    element: <HomePage />
  },
  {
    path: '/users',
    element: <UserListPage />,
    // Definiujemy zagniezdzony element interfejsu z wlasnym linkiem
    // Po wejsciu w `/users/modal/:userId` zostanie wyswietlone <UserListPage />, ale tez <UserDetailsModal />
    children: [
      {
        path: '/users/modal/:userId',
        element: <UserDetailsModal />
      }
    ]
  },
  {
    // Definicja dynamicznej sciezki - id uzytkownika moze byc dowolne 
    path: '/users/:userId/:deparamentId',
    element: <UserDetailsPage />
  },
  {
    path: '/users/:userId',
    element: <UserDetailsPage />
  }
]);

function App() {
  return (
    // Wyrenderowanie naszych routow 
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
