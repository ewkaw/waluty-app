import { useEffect, useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export const UserListPage = () => {
    const [users, setUsers] = useState();

    // Oprocz search sa tez inne dane 
    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);

    const emailQuery = queryParams.get('email');

    // Pobranie danych
    // UWAGA: Trzeba miec odpalone `npm run start:api`, zeby dzialalo!
    useEffect(() => {
        // przekazanie paramatru q na bazie linku
        // Przyklad:  http://localhost:3000/users?email=ge zwroci kilku uzytkownikow
        //            http://localhost:3000/users?email=geo zwroci tylko jednego
        fetch(`http://localhost:3003/users?q=${emailQuery || ''}`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <>
            <h1>Lista uzytkownikow</h1>

            <Link to="/">
                Strona glowna
            </Link>

            {/* Renderowanie zagniezdzonych interfejsow -> troche jak children w samym react */}
            <Outlet />

            {/* Przyklad z danymi z API */}
            {users && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.email}</Link>
                            <br />
                            <Link to={`/users/modal/${user.id}`}>Modal</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}