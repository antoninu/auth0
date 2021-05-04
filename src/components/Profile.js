import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!isAuthenticated) {
    return <div>EL usuario no está autenticado.</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} style={{ borderRadius: 30 }} />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
