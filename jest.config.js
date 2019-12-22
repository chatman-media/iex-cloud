module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['<rootDir>/**/*.spec.ts'],
  testPathIgnorePatterns: ['node_modules', 'build'],
  globals: {
      'ts-jest': {
          diagnostics: false,
      },
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/testSetup.ts']
};