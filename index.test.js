
const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let _Date; // eslint-disable-line
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date; // eslint-disable-line 
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });

  test('Returns 1 if birthday is a year ago', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });

  test('Returns 1 if birthday is a year and a day ago', () => {
    expect(birthday.howOld(new Date('31 Dec 2016'))).toBe(1);
  });

  test('Returns 1 if birthday is 364 days ago', () => {
    expect(birthday.howOld(new Date('02 Jan 2017'))).toBe(0);
  });
});
