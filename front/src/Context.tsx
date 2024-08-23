import React, { createContext, useContext, useState } from "react";
import { Context as IContext } from "./types/ctx";
import { User } from "./types/user";

const UserContext = createContext<IContext>();

const UserProvider = ({ children }) => {
  const [ctx, setCtx] = useState<IContext>({
    isLogged: false,
    user: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const changeLogged = (v: boolean) => {
    setCtx((prevState) => ({
      ...prevState,
      isLogged: v,
    }));
  };

  const changeUser = (user: User) => {
    console.log("user: ", user);

    setCtx((prevState) => ({
      isLogged: prevState.isLogged,
      user,
    }));

    console.log(ctx);
  };

  return (
    <UserContext.Provider value={{ ctx, changeLogged, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
export default UserContext;
