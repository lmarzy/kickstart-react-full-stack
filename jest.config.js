module.exports = {
  setupFiles: ["<rootDir>/config/test/setup.js"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/config/test/preprocessor.js"
  },
  testMatch: ["<rootDir>/src/**/*.spec.(ts|tsx|js)"],
  testURL: "http://localhost"
};
