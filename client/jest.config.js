export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
  },
  testMatch: ['<rootDir>/__test__/**/*.(test|spec).(ts|tsx)'],
};

