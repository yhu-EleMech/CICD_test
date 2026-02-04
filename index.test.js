import { expect, test } from 'vitest';
import { add, subtract, multiply, divide } from './index.js';

test('add two positive numbers', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(1, 5)).toBe(6);
  expect(add(100, 100)).toBe(200);
});

test('add a positive and a negative number', () => {
  expect(add(5, -3)).toBe(2);
  expect(add(-1, 4)).toBe(3);
  expect(add(-10, 5)).toBe(-5);
});

test('add two negative numbers', () => {
  expect(add(-2, -3)).toBe(-5);
  expect(add(-1, -5)).toBe(-4);
  expect(add(-100, -100)).toBe(-200);
});

test('add with zero', () => {
  expect(add(0, 5)).toBe(5);
  expect(add(5, 0)).toBe(5);
  expect(add(0, 0)).toBe(0);
});

test('add with non-number inputs', () => {
  expect(() => add(2, '3')).toThrow(TypeError);
  expect(() => add('1', 5)).toThrow(TypeError);
  expect(() => add(null, undefined)).toThrow(TypeError);
});
