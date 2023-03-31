import CreateCharacter from './character.js';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (!this.members.has(player)) {
      this.members.add(player);
    } else throw new Error('Вы пытаетесь добавить персонажа, который уже есть в команде!');
  }

  addAll(...players) {
    players.forEach((player) => {
      this.members.add(player);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
