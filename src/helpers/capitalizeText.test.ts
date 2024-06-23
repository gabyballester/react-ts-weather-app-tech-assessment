import { capitalizeText } from '.';

describe('capitalizeText', () => {
  test('capitalizes the first letter of each word in a string', () => {
    const input = 'this is a test';
    const expectedOutput = 'This Is A Test';
    expect(capitalizeText(input)).toBe(expectedOutput);
  });

  test('handles a single word', () => {
    const input = 'test';
    const expectedOutput = 'Test';
    expect(capitalizeText(input)).toBe(expectedOutput);
  });

  test('handles an empty string', () => {
    const input = '';
    const expectedOutput = '';
    expect(capitalizeText(input)).toBe(expectedOutput);
  });

  test('handles strings with multiple spaces between words', () => {
    const input = 'this  is   a    test';
    const expectedOutput = 'This  Is   A    Test';
    expect(capitalizeText(input)).toBe(expectedOutput);
  });

  test('handles strings with leading and trailing spaces', () => {
    const input = '  this is a test  ';
    const expectedOutput = '  This Is A Test  ';
    expect(capitalizeText(input)).toBe(expectedOutput);
  });

  test('handles strings with mixed case', () => {
    const input = 'tHiS iS a TeSt';
    const expectedOutput = 'THiS IS A TeSt';
    expect(capitalizeText(input)).toBe(expectedOutput);
  });
});
