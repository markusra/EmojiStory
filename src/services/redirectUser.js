import history from "../history";


export function redirectUser(userProgress) {
  if (history.location.pathname !== userProgress) {
    history.push(userProgress);
    return true;
  }
  return false;
}
