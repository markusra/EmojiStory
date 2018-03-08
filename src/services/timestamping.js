export function createTimestamp() {
  const dateTime = Date.now();
  return (dateTime / 1000);
}

export function calculateTimeUsed(timestamp1, timestamp2) {
  return Math.floor(timestamp2 - timestamp1);
}
