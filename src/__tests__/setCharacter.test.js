import CreateCharacter from '../js/character';
import Team from '../js/setCharacter';

test('error when add new player', () => {
  const createTeam = new Team();
  const player = new CreateCharacter('John');
  createTeam.add(player);
  try {
    createTeam.add(player);
  } catch (e) {
    expect(e).not.toBeNull();
  }
});

test('error when addAll new players', () => {
  const createTeam = new Team();
  const player1 = createTeam.add(new CreateCharacter('John'));
  const player2 = createTeam.add(new CreateCharacter('Alex'));
  const player3 = createTeam.add(new CreateCharacter('Johan'));
  const addAllPlayers = createTeam.addAll(player1, player2, player3);
  expect(addAllPlayers).toBe(player1, player2, player3);
});

test('to array', () => {
  const createTeam = new Team();
  createTeam.add(new CreateCharacter('John'));
  const result = createTeam.toArray();
  expect(result).toStrictEqual(result);
});
