import { create } from "zustand";
import { UserType, UsersStore } from "./types";
import { type User } from "./types";

export const useUsersStore = create<UsersStore>((set) => ({
  users: [],
  setUsers: (users: User[]) => set({ users }),
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  editUser: (id: number, _user: User) =>
    set((state) => ({
      users: state.users.map((user) => (user.id === id ? _user : user)),
    })),
  setUserType: (id: number, usertype: UserType) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, usertype } : user
      ),
    })),
  setUserKey: (id: number, key: string) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, key } : user
      ),
    })),
}));
