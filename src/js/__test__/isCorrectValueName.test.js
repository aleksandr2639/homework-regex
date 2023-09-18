import Validator from '../isValidateData';

test('method validateUsername successful', () => {
  const user = new Validator('John12_67Logan');
  expect(user.validateUsername()).toBe(true);
});
test('method validateUsername successful', () => {
  const user = new Validator('Ann16-snow');
  expect(user.validateUsername()).toBe(true);
});
test('method validateUsername unsuccessful', () => {
  const user = new Validator('-John12_67Logan99');
  expect(user.validateUsername()).toBe(false);
});
test('method validateUsername unsuccessful', () => {
  const user = new Validator('567alex1267Logan_');
  expect(user.validateUsername()).toBe(false);
});
