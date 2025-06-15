/**
 * Converts a given string to camelCase.
 *
 * The function accepts strings containing letters, numbers, spaces, underscores, and hyphens.
 * It splits the input into words by spaces, underscores, or hyphens, lowercases all words,
 * and then capitalizes the first letter of each word except the first one.
 * 
 * @param {string} str - The input string to convert to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input contains invalid characters (anything other than letters, numbers, spaces, underscores, or hyphens).
 *
 * @example
 * toCamelCase('first name'); // returns 'firstName'
 * toCamelCase('user_id'); // returns 'userId'
 * toCamelCase('SCREEN_NAME'); // returns 'screenName'
 * toCamelCase('mobile-number'); // returns 'mobileNumber'
 * toCamelCase('hello'); // returns 'hello'
 * toCamelCase(''); // returns ''
 * toCamelCase('user@name'); // throws Error
 */

/**
 * Converts a given string to dot.case.
 *
 * The function accepts strings containing letters, numbers, spaces, underscores, and hyphens.
 * It splits the input into words by spaces, underscores, or hyphens, lowercases all words,
 * and joins them with dots.
 * 
 * @param {string} str - The input string to convert to dot.case.
 * @returns {string} The dot.case version of the input string.
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the input contains invalid characters (anything other than letters, numbers, spaces, underscores, or hyphens).
 *
 * @example
 * toDotCase('first name'); // returns 'first.name'
 * toDotCase('user_id'); // returns 'user.id'
 * toDotCase('SCREEN_NAME'); // returns 'screen.name'
 * toDotCase('mobile-number'); // returns 'mobile.number'
 * toDotCase('hello'); // returns 'hello'
 * toDotCase(''); // returns ''
 * toDotCase('user@name'); // throws Error
 */
function toCamelCase(str) {
    if (typeof str !== 'string') throw new TypeError('Input must be a string');
    if (!str.trim()) return '';

    // Only allow letters, numbers, spaces, underscores, and hyphens
    if (/[^a-zA-Z0-9 _-]/.test(str)) {
        throw new Error('Invalid characters in input');
    }

    // Split by space, underscore, or hyphen
    const words = str
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase all words
    const lowerWords = words.map(w => w.toLowerCase());

    // First word stays lowercase, capitalize the rest
    const camelCased = lowerWords[0] +
        lowerWords.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

    return camelCased;
}

// Example usage:
// console.log(toCamelCase('first name')); // firstName
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber
// console.log(toCamelCase('hello')); // hello
// console.log(toCamelCase('')); // ''
// console.log(toCamelCase('user@name')); // Error

function toDotCase(str) {
    if (typeof str !== 'string') throw new TypeError('Input must be a string');
    if (!str.trim()) return '';

    // Only allow letters, numbers, spaces, underscores, and hyphens
    if (/[^a-zA-Z0-9 _-]/.test(str)) {
        throw new Error('Invalid characters in input');
    }

    // Split by space, underscore, or hyphen
    const words = str
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase all words and join with dots
    return words.map(w => w.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase('first name')); // first.name
// console.log(toDotCase('user_id')); // user.id
// console.log(toDotCase('SCREEN_NAME')); // screen.name
// console.log(toDotCase('mobile-number')); // mobile.number
// console.log(toDotCase('hello')); // hello
// console.log(toDotCase('')); // ''
// console.log(toDotCase('user@name')); // Error

