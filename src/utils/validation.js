/**
 * Validation utilities for API endpoints
 */

/**
 * Validates if a manager ID is valid
 * @param {string|number} managerID - The manager ID to validate
 * @returns {Object} Validation result with isValid boolean and error message
 */
export const validateManagerID = (managerID) => {
    const id = parseInt(managerID);
    
    if (isNaN(id) || id <= 0) {
        return {
            isValid: false,
            error: "Invalid manager ID. Must be a positive number."
        };
    }
    
    return {
        isValid: true,
        value: id
    };
};

/**
 * Validates if a username is valid
 * @param {string} username - The username to validate
 * @returns {Object} Validation result with isValid boolean and error message
 */
export const validateUsername = (username) => {
    if (!username || username.trim().length === 0) {
        return {
            isValid: false,
            error: "Manager username is required."
        };
    }
    
    return {
        isValid: true,
        value: username.trim()
    };
};

/**
 * Creates a standardized error response
 * @param {string} message - Error message
 * @param {number} status - HTTP status code
 * @returns {Object} Standardized error response object
 */
export const createErrorResponse = (message, status = 400) => {
    return {
        error: message,
        status: status
    };
};