"use client";
import { AppUser } from "@/types";
// The main context of the app which manage the cart state

import React, { createContext, useState } from "react";
type ThemeType = "light" | "dark";
type AppContextType = {
  user?: AppUser | null;
  setUser: (user: AppUser | null) => void;
  errorUser?: AppUser | null;
  setErrorUser: (user: AppUser | null) => void;
  menuVisible: boolean;
  setMenuVisible: (visible: boolean) => void;
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

const AppContext = createContext({} as AppContextType);

const AppContextProvider = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  // an user (a premium buyer)
  const [user, setUser] = useState<AppUser | null>();
  // session && {
  //   name: session?.user?.name,
  //   image: session?.user?.image || undefined,
  //   email: session?.user?.email  || undefined,
  //   accountType: session?.accountType,
  // }
  // session && {
  //   name: undefined,
  //   image: undefined,
  //   email: undefined,
  //   accountType: undefined,
  // }
  // an user is not yet a customer and is invited to be one
  const [errorUser, setErrorUser] = useState<AppUser | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [theme, setTheme] = useState<ThemeType>("light");
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        errorUser,
        setErrorUser,
        menuVisible,
        setMenuVisible,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
