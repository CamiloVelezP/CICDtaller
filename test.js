// test.js
const add = require('./suma.js');

test('Adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(4);
});