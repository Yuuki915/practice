import React from "react";
import { createContext } from "react/cjs/react.production.min";

export const UserContext = createContext(null);

export function userContext() {
  return <div>UserContext</div>;
}
