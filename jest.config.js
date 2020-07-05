// https://www.gatsbyjs.org/docs/unit-testing/
module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest/transform.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', 'public', 'cypress'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost:8000',
  setupFiles: ['<rootDir>/jest/loadershim.js'],
  setupFilesAfterEnv: [
    '<rootDir>/jest/testing-library.js',
    '<rootDir>/jest/jsdom.js',
  ],
};
