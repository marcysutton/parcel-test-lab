import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import App from './App';

describe('App tests', () => {

    beforeEach(() => {
        render(<App />)
    })

    it('has a functioning skip to main content link', async () => {
        const header = await screen.findByRole('banner')
        const skipLink = await screen.findByRole('link', {name: /Skip to main content/i})

        expect(header).toContainElement(skipLink);

        await skipLink.click();

        const skipLinkTargetId = skipLink.getAttribute('href').split('#')[1];

        const skipLinkTarget = await screen.findByRole('main')
        expect(skipLinkTarget.getAttribute('id')).toBe(skipLinkTargetId);

        waitFor(async() => {
            await expect(skipLinkTarget).toHaveFocus();
        })
    })
})

