/*
  * For a detailed explanation regarding each configuration property an  type check, visit:
  * https://jestjs.io/docs/configuration
  */

export default {
  roots: ['<rootDir>/src/__tests__/unit'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};
