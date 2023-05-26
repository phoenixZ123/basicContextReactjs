import { createContext } from "react";
import { theme } from "./Theme";

type UserContextProviderProps = {
  children: React.ReactNode;
};
const user = {
  name: "",
  setName: (str: string) => {},
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  // const [name, setName] = useState("");

  return (
    <UserContext.Provider value={{ user, theme }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext({ user, theme });
