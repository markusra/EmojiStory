import history from "../history";

export const redirectUser = userProgress => {
  if (history.location.pathname !== userProgress) {
    history.push(userProgress);
  }
};
