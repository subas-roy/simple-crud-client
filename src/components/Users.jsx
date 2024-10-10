import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData()

  return (
    <div>
      <h2>Users: {users.length}</h2>
      <div>
        {
          users.map(user => <p key={user._id}>{user.name}: {user.email}</p>)
        }
      </div>
    </div>
  );
};

export default Users;