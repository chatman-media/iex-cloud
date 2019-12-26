module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['<rootDir>/**/*.test.ts'],
  testPathIgnorePatterns: ['node_modules', 'build'],
  globals: {
      'ts-jest': {
          diagnostics: false,
      },
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/testSetup.ts'],
  collectCoverage: true
};