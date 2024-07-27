import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const roomArray = [];

  sizes.forEach((val) => roomArray.push(new ClassRoom(val)));
  return roomArray;
}
