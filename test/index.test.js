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
        const users = [
            {name: 'Alice', isActive: true },
            {name: 'Bob', isActive: false }
        ];

        const result = filterActiveUsers(users);

        expect(result).toEqual([
            { name: 'Alice', isActive: true },
        ]);
    });
});

// Filters only users who are active in an array with only inactive users
describe('filterActiveUsers', () => {
    test('An array of only inactive users', () => {
        const users = [
            { name: 'Alice', isActive: false },
            { name: 'Bob', isActive: false }
        ];

        const result = filterActiveUsers(users);

        expect(result).toEqual([]);
    });
});

// Filters only users who are active in an empty array
describe('filterActiveUsers', () => {
    test('An empty array', () => {
        const result = filterActiveUsers([]);
        expect(result).toEqual([]);
    });
});


// ============== logAction ==============
// Correct output
describe('logAction', () => {
    test('Output with action and username', () => {
        const timestamp = new Date().toISOString();
        const log = logAction('login', 'Alice');
        expect(log).toBe(`User Alice performed login at ${timestamp}`);
    });
});

// Missing action or username
describe('logAction', () => {
    test('Missing action', () => {
        const timestamp = new Date().toISOString();
        const log = logAction('', 'Alice');
        expect(log).toBe(`User Alice performed  at ${timestamp}`);
    });

    test('Missing username', () => {
        const timestamp = new Date().toISOString();
        const log = logAction('password reset', '');
        expect(log).toBe(`User  performed password reset at ${timestamp}`);
    });
});


// Empty strings as input
describe('logAction', () => {
    test('Empty strings as input', () => {
        const timestamp = new Date().toISOString();
        const log = logAction('', '');
        expect(log).toBe(`User  performed  at ${timestamp}`);
    });
});
