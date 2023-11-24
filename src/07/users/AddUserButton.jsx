import { useReducer, useState } from 'react';

const reducer = (currentView, action) => {
    switch (action.type) {
        case 'email-input':
            return { type: 'email-input', defaultEmail: '@alx.pl' };
        case 'name-input':
            if (currentView !== 'email-input') return currentView;

            return { type: 'name-input' };
        case 'cta':
            return { type: 'cta' };
    }

    return currentView
}

export const AddUserButton = ({ onAdd }) => {
    const [view, dispatch] = useReducer(reducer, {
        type: 'cta'
    });

    const handleFormSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');

        onAdd({
            id: Math.random(),
            email,
            avatar: "https://via.placeholder.com/100x100",
            first_name: '',
            last_name: '',
        });
    }

    if (view.type === 'cta') return <button onClick={() => dispatch({ type: 'email-input' })}>Klknij, zeby dodac nowego uzytkownika</button>

    return (
        <form onSubmit={handleFormSubmit}>
            {view.type === 'email-input' && (
                <input
                    type="text"
                    name="email"
                    defaultValue={view.defaultEmail}
                    placeholder="Email"
                    onChange={e => dispatch({ type: 'email-input', email: e.target.value })}
                />
            )}

            {view.type === 'email-input' && <button type="button" onClick={() => dispatch({ type: 'cta' })}>Anuluj</button>}
            {view.type === 'email-input' && <button type="button" onClick={() => dispatch({ type: 'name-input' })}>Dalej</button>}

            {view.type === 'name-input' && (
                <>
                    <input type="text" name="name" placeholder="Name" />

                    <button>Dodaj</button>
                </>
            )}
        </form>
    )
};

// Wersja z useState
const AddUserButtonWithUseState = ({ onAdd }) => {
    const [view, setView] = useState('cta');

    const handleFormSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');

        onAdd({
            id: Math.random(),
            email,
            avatar: "https://via.placeholder.com/100x100",
            first_name: '',
            last_name: '',
        });
    }

    if (view === 'cta') return <button onClick={() => setView('email-input')}>Klknij, zeby dodac nowego uzytkownika</button>

    return (
        <form onSubmit={handleFormSubmit}>
            {view === 'email-input' && <input type="text" name="email" placeholder="Email" />}

            {view === 'email-input' && <button type="button" onClick={() => setView('cta')}>Anuluj</button>}
            {view === 'email-input' && <button type="button" onClick={() => setView('name-input')}>Dalej</button>}

            {view === 'name-input' && (
                <>
                    <input type="text" name="name" placeholder="Name" />

                    <button>Dodaj</button>
                </>
            )}
        </form>
    )
};