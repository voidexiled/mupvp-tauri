export type BasicStore = {
  tool: Tool;
  tools: Tool[];
  setTool: (tool: Tool) => void;
  onTop: boolean;
  setOnTop: (onTop: boolean) => void;
};

export type UsersStore = {
  users: User[];
  setUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  removeUser: (id: number) => void;
  editUser: (id: number, user: User) => void;
  setUserType: (id: number, usertype: UserType) => void;
  setUserKey: (id: number, key: string) => void;
};

export type AuthStore = {
  name: string;
  rank: string;
  key: string;
  loggedIn: boolean;
  setKey: (key: string) => void;
  setLoggedIn: (loggedIn: boolean) => void;
  setName: (name: string) => void;
  setRank: (rank: string) => void;
};

export type UsersToolsStore = {
  tool: UserTool;
  tools: UserTool[];
  setTool: (tool: UserTool) => void;
};

export type UserTool = {
  id: number;
  name: string;
  description: string;
};

export type Tool = {
  id: number;
  name: string;
  description: string;
};

export type User = {
  id: number;
  key: string;
  usertype: UserType;
};

type UserType = {
  id: number;
  name: string;
};
