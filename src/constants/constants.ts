import { Tool } from "../stores/types";

export const TOOLS: Tool[] = [
  {
    id: 0,
    name: "Administracion de usuarios",
    description: "Admin users",
  },
  {
    id: 1,
    name: "Administracion de guías",
    description: "Admin guides",
  },
];

export const USERTYPES = [
  {
    id: 0,
    name: "Usuario",
  },
  {
    id: 1,
    name: "Vip0",
  },
  {
    id: 2,
    name: "Vip1",
  },
  {
    id: 3,
    name: "Vip2",
  },
  { id: 4, name: "Helper" },
  { id: 5, name: "GM" },
  { id: 6, name: "CM" },
  { id: 7, name: "Administrador" },
  { id: 8, name: "Dueño" },
];

export const USERTOOLS = [
  {
    id: 0,
    name: "Añadir",
    description: "Añadir usuario",
  },
  {
    id: 1,
    name: "Editar",
    description: "Editar usuario",
  },
  {
    id: 2,
    name: "Eliminar",
    description: "Eliminar usuario",
  },
];
