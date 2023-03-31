import CreateCharacter from '../js/character';

test('create character', () => {
  const result = new CreateCharacter('John');
  expect(new CreateCharacter('John')).toStrictEqual(result);
});
