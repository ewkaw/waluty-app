import { useParams } from "react-router-dom";

export const UserDetailsModal = () => {
    const params = useParams();

    return (
        <dialog open={true}>
            Szczegoly uzytkownika o ID: {params.userId}
        </dialog>
    )
}