import { type User } from "../stores/types";
import app from "../api/firebase";

import { getDatabase, ref, onValue, get, set, push } from "firebase/database";
import { USERTYPES } from "../constants/constants";
const db = getDatabase(app);

class UsersService {
  async getAll() {
    const dbRef = ref(db, "users");
    const users: User[] = [];
    await get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          for (const key in data) {
            const keyData = data[key];
            console.log(keyData.id);
            const tempUser: User = {
              id: parseInt(keyData.id),
              key: keyData.key,
              usertype: USERTYPES.filter(
                (usertype) => usertype.id === keyData.usertype
              )[0],
            };

            users.push(tempUser);
          }
        } else {
          console.log("No data available");
        }
      })
      .finally(() => {
        console.log(users);
        return users;
      });
    return users;
  }

  async getAllRealtime() {
    const dbRef = ref(db, "users");
    const users: User[] = [];

    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        for (const key in data) {
          console.log(key);
          const keyData = data[key];
          console.log(keyData.id);
          const tempUser: User = {
            id: parseInt(keyData.id),
            key: keyData.key,
            usertype: USERTYPES.filter(
              (usertype) => usertype.id === keyData.usertype
            )[0],
          };

          users.push(tempUser);
        }
      } else {
        console.log("No data available");
      }
    });
    console.log(users);
    console.log("hola");
    return users;
  }

  async create(user: User) {
    const dbRef = ref(db, "users");
    const newPostRef = push(dbRef);
    const exists = await this.keyAlreadyExists(user.key);
    if (exists) {
      return new Error("La llave ya existe");
    }

    set(newPostRef, {
      id: user.id,
      key: user.key,
      usertype: user.usertype.id,
    });
  }

  async keyAlreadyExists(_key: string) {
    const dbRef = ref(db, "users");
    let exists = false;
    await get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          for (const key in data) {
            const keyData = data[key];
            if (keyData.key === _key) {
              exists = true;
            }
          }
        } else {
          console.log("No data available");
        }
      })
      .finally(() => {
        return exists;
      });
    return exists;
  }

  async getNextId() {
    const dbRef = ref(db, "users");
    let nextId = 0;
    await get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          for (const key in data) {
            const keyData = data[key];
            if (keyData.id > nextId) {
              nextId = keyData.id;
            }
          }
        } else {
          console.log("No data available");
        }
      })
      .finally(() => {
        nextId++;
        return nextId;
      });
    return nextId;
  }
}

export default new UsersService();
