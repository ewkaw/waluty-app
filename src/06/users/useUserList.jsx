import { useEffect, useState } from 'react';

export const useUserList = (phrase) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3003/users')
          .then(res => res.json())
          .then(setUsers)
        //   To samo co wyzej
        //   .then(data => {
        //     setUsers(data)
        //   })
          .catch(err => {
            setError(err);
          });
      }, []);


    return {
        users,
        error,
        setUsers,
    };
};