module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    '\\.svg$': '<rootDir>/src/__mocks__/svgMock.js'
  },
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ]
}

