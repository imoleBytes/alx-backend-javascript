import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];

  const roomArray = [];
  return sizes.forEach((val) => roomArray.push(new ClassRoom(val)));
}
