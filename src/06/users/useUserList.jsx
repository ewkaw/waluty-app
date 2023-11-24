import { useEffect, useState } from 'react';

export const useUserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3003/users')
          .then(res => res.json())
          .then(setUsers)
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