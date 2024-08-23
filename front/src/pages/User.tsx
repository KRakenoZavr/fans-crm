import React from "react";
import { useUser } from "../Context";
import { Link } from "react-router-dom";

const UserComponent = () => {
  const { ctx } = useUser();

  if (!ctx.isLogged) {
    return <NoInfo />;
  }

  return (
    <div>
      <p>Email: {ctx.user.email}</p>
      <p>Name: {ctx.user.name}</p>
      <p>Phone: {ctx.user.phone}</p>
      <Link to="/login">login</Link>
    </div>
  );
};

const NoInfo = () => {
  return <div>you are not logged, loggind first to view your info</div>;
};

export default UserComponent;
