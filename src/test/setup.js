import '@testing-library/jest-dom';

// Mock navigator.vibrate
Object.defineProperty(navigator, 'vibrate', {
    value: vi.fn(),
    writable: true,
});

// Mock canvas-confetti
vi.mock('canvas-confetti', () => ({
    default: vi.fn(),
}));
