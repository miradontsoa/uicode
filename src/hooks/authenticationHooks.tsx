import { useContext } from "react";

import { AppContext } from "@/contexts/AppContext";

// get the user
export function useUser() {
  const appContext = useContext(AppContext);
  const user = appContext.user;
  return user;
}
