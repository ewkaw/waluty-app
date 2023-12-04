import { findByText, fireEvent, render } from "@testing-library/react";
import { DeleteButton } from "./DeleteButton";

// Grupuje nasze testy
describe('DeleteButton', () => {
    // test()
    /*
        1. Guzik "usun" jest wyrenderowany
        2. po kliknieciu pojawia sie potwierdzenie
        3. po anulowaniu znika potwierdzenie i pojawia sie guzik "usun"
    */
    it('allows to cancel delete', async () => {
         // zmockowana funkcja ( jest sledzi ile razy byla kliknieta, z jakimi argumentami itd. )
        const onDelete = jest.fn();

        const { container } = render(<DeleteButton onDelete={onDelete} />);

        const deleteButton = await findByText(container, 'Usun');
        fireEvent.click(deleteButton);

        expect(container.textContent).toMatchInlineSnapshot(`"Czy na pewno chcesz usunac?TakNie"`);

        const noButton = await findByText(container, 'Nie');
        fireEvent.click(noButton);

        expect(container.textContent).toMatchInlineSnapshot(`"Usun"`);
        expect(onDelete).not.toHaveBeenCalled(); 
    });

    /*
        1. Guzik "usun" jest wyrenderowany
        2. po kliknieciu pojawia sie potwierdzenie
        3. po potwierdzeniu wywoluje sie funkcja onDelete
    */
    it('calls onDelete after confirmation', async () => {
        // zmockowana funkcja ( jest sledzi ile razy byla kliknieta, z jakimi argumentami itd. )
        const onDelete = jest.fn();

        const { container } = render(<DeleteButton onDelete={onDelete} />);

        const deleteButton = await findByText(container, 'Usun');
        fireEvent.click(deleteButton);

        expect(container.textContent).toMatchInlineSnapshot(`"Czy na pewno chcesz usunac?TakNie"`);

        const yesButton = await findByText(container, 'Tak');
        fireEvent.click(yesButton);

        expect(onDelete).toHaveBeenCalled(); 
        expect(onDelete).toHaveBeenCalledTimes(1); 
    });
});