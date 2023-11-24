import { useEffect, useState } from 'react';

export const useUserList = (phrase) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3003/users?q=${phrase || ''}`)
          .then(res => res.json())
          .then(setUsers)
        //   To samo co wyzej
        //   .then(data => {
        //     setUsers(data)
        //   })
          .catch(err => {
            setError(err);
          });
        // przy kazdej zmianie frazy wywola sie fetch.
        // UWAGA: kiedy szybko piszemy, idzie wiele requestow.
        //   Rozwiazaniem jest debounce ( opoznieneie wywolania funkcji )
      }, [phrase]);


    return {
        users,
        error,
        setUsers,
    };
};