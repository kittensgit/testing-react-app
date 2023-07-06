import { render, screen } from '@testing-library/react';
import App from './App';

describe('App comp', () => {
    it('App renders', () => {
        render(<App/>)
        expect(screen.getByRole('list')).toBeInTheDocument()
    })
})