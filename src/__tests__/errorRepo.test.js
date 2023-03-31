import ErrorRepository from '../js/errorRepo';

test('get error', () => {
  const result = new ErrorRepository(1, 'test error').translate(1);
  expect(new ErrorRepository(1, 'test error').translate(1)).toStrictEqual(result);
});

test('Unknown error', () => {
  expect(new ErrorRepository(1, 'test error').translate(2)).toStrictEqual('Unknown error');
});
