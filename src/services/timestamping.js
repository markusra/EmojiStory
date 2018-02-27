export function createTimestamp() {
  const dateTime = Date.now();
  return Math.floor(dateTime / 100);
}

export function calculateTimeUsed(timestamp1, timestamp2) {
  return (timestamp2 - timestamp1) / 10;
}
