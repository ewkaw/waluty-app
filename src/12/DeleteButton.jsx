import { useState } from "react";

export const DeleteButton = ({ onDelete }) => {
    const [showConfirmation, toggleShowConfirmation] = useState(false)

    return (
        <>
            {!showConfirmation && (
                <button onClick={() => toggleShowConfirmation(true)}>
                    Usun
                </button>
            )}

            {showConfirmation && (
                <>
                    <p>Czy na pewno chcesz usunac?</p>

                    <button onClick={onDelete}>Tak</button>
                    <button onClick={() => {
                        toggleShowConfirmation(false);
                 
                    }}>Nie</button>
                </>
            )}
        </>
    );
}
