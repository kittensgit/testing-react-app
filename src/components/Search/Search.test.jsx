import { screen, render } from "@testing-library/react";

import Search from "./Search";

const onChange = jest.fn()

describe('Search component', () => {
    it('renders Search components', () => {
        render(
            <Search value='' onChange={onChange}>
                Find:
            </Search>
        )

        expect(screen.getByText(/find/i)).toBeInTheDocument()
    })
})