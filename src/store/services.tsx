export const getUsers = async () => {
  const response = await fetch(
    `https://yalantis-react-school-api.yalantis.com/api/task0/users`
  );
  const data = await response.json();
  return data;
};
