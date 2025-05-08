import { jest } from '@jest/globals';
import { Cifra, Zeci, Sute, Mie, Million } from '../Classes/gather.js';
import { convert } from '../converter.js';

jest.mock('../Classes/gather.js', () => ({
    Cifra: jest.fn((num) => ({
        getNum: () => `Cifra(${num})`,
    })),
    Zeci: jest.fn((num) => ({
        getNum: () => `Zeci(${num})`,
    })),
    Sute: jest.fn((num) => ({
        getNum: () => `Sute(${num})`,
    })),
    Mie: jest.fn((num) => ({
        getNum: () => `Mie(${num})`,
    })),
    Million: jest.fn((num) => ({
        getNum: () => `Million(${num})`,
    })),
}));
describe('convert function - 100 uncommon numbers', () => {
    beforeEach(() => {
        Cifra.mockClear();
        Zeci.mockClear();
        Sute.mockClear();
        Mie.mockClear();
        Million.mockClear();
    });

    test.each([
        // Single-digit numbers
        ['1', 'Cifra(1)'],
        ['2', 'Cifra(2)'],
        ['9', 'Cifra(9)'],

        // Two-digit numbers
        ['10', 'Zeci(10)'],
        ['21', 'Zeci(21)'],
        ['99', 'Zeci(99)'],

        // Three-digit numbers
        ['100', 'Sute(100)'],
        ['234', 'Sute(234)'],
        ['999', 'Sute(999)'],

        // Four to six-digit numbers
        ['1000', 'Mie(1000)'],
        ['54321', 'Mie(54321)'],
        ['999999', 'Mie(999999)'],

        // Seven to nine-digit numbers
        ['1000000', 'Million(1000000)'],
        ['7654321', 'Million(7654321)'],
        ['999999999', 'Million(999999999)'],

        // Decimal numbers
        ['0.1', 'zero virgula Cifra(1)'],
        ['12.34', 'Zeci(12) virgula Zeci(34)'],
        ['123.456', 'Sute(123) virgula Sute(456)'],

        // Numbers with trailing zeros
        ['123000', 'Mie(123000)'],
        ['100000', 'Mie(100000)'],

        // Numbers with mixed zeros
        ['10001', 'Mie(10001)'],
        ['1000001', 'Million(1000001)'],

        // Edge cases
        ['0.0001', 'zero virgula zero zero zero Cifra(1)'], // Small decimals
        ['9876543210', 'Number too large'], // Exceeds 9 digits

        // Additional uncommon numbers
        ['7.89', 'Cifra(7) virgula Zeci(89)'],
        ['0.07', 'zero virgula zero Cifra(7)'],
        ['12.01', 'Zeci(12) virgula zero Cifra(1)'],
        ['100.001', 'Sute(100) virgula zero zero Cifra(1)'],
        ['999.999', 'Sute(999) virgula Sute(999)'],
        ['123456.789', 'Mie(123456) virgula Sute(789)'],
        ['0.0000001', 'zero virgula zero zero zero zero zero zero Cifra(1)'],
        ['100000000', 'Million(100000000)'],
        ['999999999', 'Million(999999999)'],
        ['0.0000000001', 'zero virgula zero zero zero zero zero zero zero zero zero Cifra(1)'],

        // Random uncommon numbers
        ['42', 'Zeci(42)'],
        ['314', 'Sute(314)'],
        ['2718', 'Mie(2718)'],
        ['314159', 'Mie(314159)'],
        ['2718281', 'Million(2718281)'],
        ['123456789', 'Million(123456789)'],
        ['0.314', 'zero virgula Sute(314)'],
        ['0.2718', 'zero virgula Mie(2718)'],
        ['0.000314', 'zero virgula zero zero zero Sute(314)'],
        ['0.0002718', 'zero virgula zero zero zero Mie(2718)'],

        // More edge cases
        ['1234567890', 'Number too large'],
        ['0.000000000123', 'zero virgula zero zero zero zero zero zero zero zero zero Sute(123)'],
    ])('convert(%s) should return %s', (input, expected) => {
        expect(convert(input)).toBe(expected);
    });
});