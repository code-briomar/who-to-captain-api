import { validateManagerID, validateUsername, createErrorResponse } from "../../utils/validation.js";

describe('Validation Utilities', () => {
    describe('validateManagerID', () => {
        test('Should validate positive numbers', () => {
            const result = validateManagerID('123456');
            expect(result.isValid).toBe(true);
            expect(result.value).toBe(123456);
        });

        test('Should validate numeric inputs', () => {
            const result = validateManagerID(789012);
            expect(result.isValid).toBe(true);
            expect(result.value).toBe(789012);
        });

        test('Should reject non-numeric strings', () => {
            const result = validateManagerID('invalid');
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('Invalid manager ID. Must be a positive number.');
        });

        test('Should reject negative numbers', () => {
            const result = validateManagerID('-123');
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('Invalid manager ID. Must be a positive number.');
        });

        test('Should reject zero', () => {
            const result = validateManagerID('0');
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('Invalid manager ID. Must be a positive number.');
        });

        test('Should reject empty string', () => {
            const result = validateManagerID('');
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('Invalid manager ID. Must be a positive number.');
        });

        test('Should reject null and undefined', () => {
            expect(validateManagerID(null).isValid).toBe(false);
            expect(validateManagerID(undefined).isValid).toBe(false);
        });
    });

    describe('validateUsername', () => {
        test('Should validate normal usernames', () => {
            const result = validateUsername('TestUser123');
            expect(result.isValid).toBe(true);
            expect(result.value).toBe('TestUser123');
        });

        test('Should trim whitespace', () => {
            const result = validateUsername('  SpacedUser  ');
            expect(result.isValid).toBe(true);
            expect(result.value).toBe('SpacedUser');
        });

        test('Should validate usernames with special characters', () => {
            const result = validateUsername('User.Name-123');
            expect(result.isValid).toBe(true);
            expect(result.value).toBe('User.Name-123');
        });

        test('Should reject empty strings', () => {
            const result = validateUsername('');
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('Manager username is required.');
        });

        test('Should reject whitespace-only strings', () => {
            const result = validateUsername('   ');
            expect(result.isValid).toBe(false);
            expect(result.error).toBe('Manager username is required.');
        });

        test('Should reject null and undefined', () => {
            expect(validateUsername(null).isValid).toBe(false);
            expect(validateUsername(undefined).isValid).toBe(false);
        });
    });

    describe('createErrorResponse', () => {
        test('Should create error response with default status', () => {
            const result = createErrorResponse('Test error');
            expect(result.error).toBe('Test error');
            expect(result.status).toBe(400);
        });

        test('Should create error response with custom status', () => {
            const result = createErrorResponse('Not found', 404);
            expect(result.error).toBe('Not found');
            expect(result.status).toBe(404);
        });

        test('Should handle empty error message', () => {
            const result = createErrorResponse('');
            expect(result.error).toBe('');
            expect(result.status).toBe(400);
        });
    });
});