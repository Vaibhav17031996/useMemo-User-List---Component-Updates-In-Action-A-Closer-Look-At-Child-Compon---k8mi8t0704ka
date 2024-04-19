import { useMemo } from "react";

function UsersList({ users, startingLetter }) {
  const filteredUsers = useMemo(() => {
    if (!startingLetter) return users;
    return users.filter(({ name }) => {
      return name[0] === startingLetter;
    });
  }, [startingLetter]);

  return (
    <ul>
      {filteredUsers.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}

export default UsersList;
