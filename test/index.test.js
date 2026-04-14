const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

// ============== capitalizeWords ==============
// Hello world test
describe('capitalizeWords', () => {
    test('capitalizes each word of a string', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });
});

// Empty string test
describe('capitalizeWords', () => {
    test('returns empty string if sent empty string', () => {
        expect(capitalizeWords('')).toBe('');
    });
});

// Strings with special characters test
describe('capitalizeWords', () => {
    test('capitalizes each word of a string with special characters', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-World');
    });
});

// Single-word string test
describe('capitalizeWords', () => {
    test('capitalizes the word of a single string', () => {
        expect(capitalizeWords('title')).toBe('Title');
    });
});

// ============== filterActiveUsers ==============
// Filters only users who are active in an array of active/inactive users
describe('filterActiveUsers', () => {
    test('Filters out only users who are active', () => {

    });
});

// Filters only users who are active in an array with only inactive users
describe('filterActiveUsers', () => {
    test('An array of only inactive users', () => {

    });
});

// Filters only users who are active in an empty array
describe('filterActiveUsers', () => {
    test('An empty array', () => {

    });
});


// ============== logAction ==============
// Missing action or username
describe('logAction', () => {
    test('Missing action or username', () => {

    });
});

// Empty strings as input
describe('logAction', () => {
    test('Empty strings as input', () => {

    });
});
