# Testing Guide

## Overview
This project uses Jest for testing with comprehensive coverage of API endpoints, utility functions, and business logic.

## Test Structure
```
src/__tests__/
├── api/fpl/index.test.js          # API endpoint tests
├── services/
│   ├── utils/selectBestCaptain.test.js    # Captain selection logic
│   └── who-to-captain/
│       └── filterOutAvailablePlayers.test.js  # Player filtering
└── utils/validation.test.js        # Input validation utilities
```

## Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Test Coverage Areas

### API Endpoints (`src/__tests__/api/fpl/index.test.js`)
- ✅ Input validation (invalid IDs, empty usernames)
- ✅ Error handling (400, 404 responses)
- ✅ Welcome endpoint functionality
- ⚠️ Integration tests require FPL API access (currently disabled for reliability)

### Utility Functions
- ✅ `selectBestCaptain` - Captain selection algorithm
- ✅ `filterOutAvailablePlayers` - Player availability filtering
- ✅ `validation` - Input validation utilities

### Test Data
- Uses real manager ID: `4791912`
- Uses real username: `"Mk. ."`
- Covers edge cases: empty arrays, missing properties, null values

## Quick Wins Implemented

### 1. Code Quality ✅
- Removed unused imports (`https`, `axios`)
- Added proper error handling with try-catch
- Fixed TypeScript hints with `@types/express`, `@types/cors`
- Added JSDoc documentation

### 2. Input Validation ✅
- Manager ID validation (positive numbers only)
- Username validation (non-empty strings)
- Standardized error responses
- Reusable validation utilities

### 3. Test Coverage ✅
- Comprehensive API endpoint testing
- Unit tests for utility functions
- Edge case handling
- Error scenario testing

### 4. Error Handling ✅
- Global error handler middleware
- 404 handler for unknown routes
- Consistent error response format
- Proper HTTP status codes

## Next Steps
- Add integration tests with mocked FPL API
- Test the prediction algorithm components
- Add performance testing for large datasets
- Implement test fixtures for consistent data
#
# Test Strategy

### Unit Tests (Reliable)
- Focus on business logic and utility functions
- No external dependencies
- Fast execution
- High reliability

### Integration Tests (External Dependencies)
- Test full API endpoints with real FPL data
- Require internet connection and FPL API availability
- May be slower and less reliable
- Currently focused on validation logic only

## Known Issues & Solutions

### FPL API Dependency
The full integration tests depend on the external FPL API which can be unreliable. Current approach:
- Focus unit tests on validation and business logic
- Integration tests cover error handling and validation
- Success cases with real data can be tested manually

### Running Specific Test Suites
```bash
# Run only unit tests (reliable)
npm test -- --testPathPattern="utils|services"

# Run only API validation tests
npm test -- --testPathPattern="api"

# Run a specific test file
npm test -- src/__tests__/utils/validation.test.js
```