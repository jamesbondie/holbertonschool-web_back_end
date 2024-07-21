import ClassRoom from "./0-classroom";
function initializeRooms() {
  const room1 = ClassRoom(19);
  const room2 = ClassRoom(20);
  const room3 = ClassRoom(34);

  return [room1, room2, room3];
}

export default initializeRooms;