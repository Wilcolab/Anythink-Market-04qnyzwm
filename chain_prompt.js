function toKebabCase(str) {
    return str
        // Replace underscores and spaces with hyphens
        .replace(/[_\s]+/g, '-')
        // Insert hyphen before uppercase letters (not at the start)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // Handle consecutive uppercase letters (e.g., "APIResponse" -> "api-response")
        .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
        // Convert to lowercase
        .toLowerCase()
        // Remove leading/trailing hyphens and collapse multiple hyphens
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

// Example usage:
// console.log(toKebabCase('myVariableName')); // "my-variable-name"
// console.log(toKebabCase('MyVariableName')); // "my-variable-name"
// console.log(toKebabCase('APIResponse'));    // "api-response"
// console.log(toKebabCase('some_value here')); // "some-value-here"