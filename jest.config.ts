import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Custom Jest configuration
const customJestConfig = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom', // Use jsdom for testing components
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    // Add any other path aliases you might have
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Add any custom setup needed before tests run
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Ensure ts-jest is used to transpile TypeScript files
  },
};

// Export the Jest configuration
export default createJestConfig(customJestConfig);
