"use client";
// The main context of the app which manage the cart state

import React, { createContext, useState } from "react";
type ThemeType = "light" | "dark";
type AppContextType = {
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
  const [menuVisible, setMenuVisible] = useState(false);
  const [theme, setTheme] = useState<ThemeType>("light");
  return (
    <AppContext.Provider
      value={{
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
