import * as React from "react";
import UseFetch from "./useFetch";

const User = () => {
  const { data: user, loading, error } = UseFetch(`https://jsonplaceholder.typicode.com/users/${2}`);

  //   Loading State
  if (loading) return <div>Loading...</div>;

  //   Error State
  if (error) return <div>Fehler: {error}</div>;

  //   Empty State
  if (!user) return <p>Kein Benutzer gefunden.</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
