import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App comp', () => {
    it('App renders', () => {
        render(<App />)
        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(screen.getByText('Find course:')).toBeInTheDocument()
    })
    it('typing in searchbox works', () => {
        render(<App />)

        expect(screen.queryByDisplayValue(/React/)).toBeNull()
        userEvent.type(screen.getByRole('textbox'), 'React')
        expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument()
    })
    it('search filter works', () => {
        render(<App />);
        expect(screen.getByText(/vue/)).toBeInTheDocument();
        expect(screen.getByText(/javascript/)).toBeInTheDocument();

        userEvent.type(screen.getByRole('textbox'), 'script');

        // Добавьте дополнительное ожидание для обновления состояния после ввода
        waitFor(() => {
            expect(screen.queryByText(/vue/)).toBeNull();
            expect(screen.getByText(/javascript/)).toBeInTheDocument();
        });
    });
    it('snapshot App component', () => {
        const app = render(<App />)

        expect(app).toMatchSnapshot()
    })
})