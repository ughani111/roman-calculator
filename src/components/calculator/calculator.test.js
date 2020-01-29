import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './Calculator';
import { romanToInt, intToRoman, charToInt } from './helpers';


test('tests character to integer', () => {
    expect(charToInt("V")).toBe(5);
    expect(charToInt("X")).toBe(10);
})

test('tests integer to roman', () => {
    expect(intToRoman(10)).toBe("X");
    expect(intToRoman(7)).toBe("VII");
})

test('tests roman to integer conversion', () => {
    expect(romanToInt("XII")).toBe(12);
    expect(romanToInt("XXVII")).toBe(27);
})

test('tests calculat total', () => {
    expect(romanToInt("XXVII")).toBe(27);
    expect(romanToInt("XX")).toBe(20);
})


test('renders learn react link', () => {
  const { getByText } = render(<Calculator />);
  const linkElement = getByText(/Roman Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
