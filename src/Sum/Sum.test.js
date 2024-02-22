import Sum from './Sum'; // Assuming Sum is the default export from './Sum'

test('sum text', () => {
    expect(Sum(10, 10)).toBe(20); // Corrected the syntax
});
