import { Link, NavLink, useNavigate } from "react-router-dom"

export const HomePage = () => {
    // Przydatne np. do przekierowan po dodawaniu/edycji/usuwaniu na strone listy
    const redirectTo = useNavigate();

    return (
        <>
            <h1>Strona domowa</h1>

            <ul>
                <li>
                    {/* Link, ktory dodaje klase active do elementu HTML jesli dany link odpowiada aktualnej stronie */}
                    <NavLink to="/">
                        Start
                    </NavLink>
                </li>

                <li>
                    {/* Link do innej strony ( taki troche <a /> z HTML) */}
                    <Link to="/users">
                        Uzytkownicy
                    </Link>
                </li>

                <li>
                    {/* Staramy sie nie uzywac, tylko korzystac z <Link /> lub <NavLink />  */}
                    <a href="/users">Uzytkownicy w HTML</a>
                </li>

                <li>
                    {/* Link do dynamicznej sciezki */}
                    <Link to="/users/1234">
                        Uzytkownik o id 1234
                    </Link>
                </li>

                <li>
                    <button onClick={() => {
                        // Przekierowanie na strone /users
                        redirectTo('/users');
                    }}>
                        Przekierowanie do strony z poziomu kodu
                    </button>
                </li>
            </ul>
        </>
    )
}