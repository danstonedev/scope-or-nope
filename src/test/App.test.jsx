import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('ScopeOrNope App', () => {

    describe('Game Start Screen', () => {
        it('renders the start screen with poster and button', async () => {
            render(<App />);

            expect(await screen.findByAltText('Scope Or Nope Poster')).toBeInTheDocument();
            const startBtn = screen.getByText('START SHIFT').closest('button');
            expect(startBtn).toBeInTheDocument();
            // Check for green background class or computed style (using class string check here)
            expect(startBtn).toHaveClass('bg-[#009A44]');
        });

        it('starts game at Level 1 when Triage Mode is clicked', async () => {
            const user = userEvent.setup();
            render(<App />);

            await user.click(screen.getByText('START SHIFT'));

            expect(screen.getByText('Correct: 0')).toBeInTheDocument();
        });


    });

    describe('Game Flow', () => {
        it('displays a case card after starting', async () => {
            const user = userEvent.setup();
            render(<App />);

            await user.click(screen.getByText('START SHIFT'));

            // Should show action buttons
            expect(screen.getByText('Treat')).toBeInTheDocument();
            expect(screen.getByText('Refer')).toBeInTheDocument();

            expect(screen.getByText('Correct: 0')).toBeInTheDocument();
        });

        it('shows streak display in header', async () => {
            const user = userEvent.setup();
            render(<App />);

            await user.click(screen.getByText('START SHIFT'));

            expect(screen.getByText('🔥 0')).toBeInTheDocument();
        });
    });

    describe('Exit Confirmation', () => {
        it('shows exit confirmation when clicking logo during game', async () => {
            const user = userEvent.setup();
            render(<App />);

            await user.click(screen.getByText('START SHIFT'));
            await user.click(screen.getByText('Scope-or-Nope'));

            expect(screen.getByText('Abandon Shift?')).toBeInTheDocument();
            expect(screen.getByText('Keep Playing')).toBeInTheDocument();
            expect(screen.getByText('Exit')).toBeInTheDocument();
        });

        it('returns to game when Keep Playing is clicked', async () => {
            const user = userEvent.setup();
            render(<App />);

            await user.click(screen.getByText('START SHIFT'));
            await user.click(screen.getByText('Scope-or-Nope'));
            await user.click(screen.getByText('Keep Playing'));

            await waitFor(() => {
                expect(screen.queryByText('Abandon Shift?')).not.toBeInTheDocument();
            });
            expect(screen.getByText('Correct: 0')).toBeInTheDocument();
        });

        it('returns to start screen when Exit is clicked', async () => {
            const user = userEvent.setup();
            render(<App />);

            await user.click(screen.getByText('START SHIFT'));
            await user.click(screen.getByText('Scope-or-Nope'));
            await user.click(screen.getByText('Exit'));

            expect(screen.getByAltText('Scope Or Nope Poster')).toBeInTheDocument();
            expect(screen.getByText('START SHIFT')).toBeInTheDocument();
        });
    });

});
