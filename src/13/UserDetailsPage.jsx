import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export const UserDetailsPage = () => {
    {/* Pobranie dynamicznych parametrow ze sciezki */}
    const params = useParams();

    console.log(params);

    return (
        <>
            {/* Odczyt dynamicznych parametrow */}
            <h1>Szczegoly uzytkownika o id: {params.userId} w dep: {params.deparamentId}</h1>

            <Link to="/">
                Strona glowna 
            </Link>
        </>
    );
}