
import { useEffect, useState } from "react";
import { useUsersStore } from "../../../stores/usersStore";
import { useUsersToolsStore } from "../../../stores/usersToolsStore";
import usersService from "../../../services/users.service";

import { USERTYPES } from "../../../constants/constants";

export const UsersContent = () => {
    const [usertype, setUsertype] = useState(0);
    const [key, setKey] = useState("");
    const { tool } = useUsersToolsStore((state) => state);
    const { users, removeUser, setUsers } = useUsersStore((state) => state);
    useEffect(() => {
        usersService.getAll().then((users) => {
            setUsers(users);
            console.log(users);
        });
        console.log(users)
    }, []);


    const generateKey = (): string => {
        const key = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            console.log(v.toString(16));
            return v.toString(16);
        });
        setKey(key);
        return key;
    }


    return (
        <div className="text-white overflow-x-auto w-full max-h-[320px] overflow-y-scroll custom_scrollbar ">
            <table className="table table-xs h-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Licencia</th>
                        <th>Tipo de usuario</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.key}</td>
                                    <td>{user.usertype.name}</td>
                                    <td>
                                        {tool.id === 1 && <button className="btn btn-sm btn-warning" onClick={() => removeUser(user.id)}>Editar</button>}
                                        {tool.id === 2 && <button className="btn btn-sm btn-danger" onClick={() => removeUser(user.id)}>Eliminar</button>}

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Licencia</th>
                        <th>Tipo de usuario</th>
                        <th>Accion</th>
                    </tr>
                </tfoot>
            </table>
            <dialog id="my_modal_1" className="modal max-w-sm m-auto border-none" role="dialog" >
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Añadir usuario</h3>
                    <div className="modal-body py-2 gap-4 flex flex-col">

                        <div className="form-control">
                            <label htmlFor="key">Licencia</label>
                            <div className="input-btn input input-bordered input-sm w-full max-w-xs flex overflow-hidden items-center p-0 ">
                                <input disabled type="text" id="key" name="key " value={key} onChange={(e) => setKey(e.target.value)} className="input input-ghost w-full border-none p-0 px-2 align-middle hover:cursor-grabbing select-none"
                                    onClick={async (e) => {
                                        e.currentTarget.select();
                                        document.execCommand("copy");
                                    }}
                                    onSelect={(e) => {
                                        e.currentTarget.selectionStart = e.currentTarget.selectionEnd;
                                    }}
                                    onMouseDown={(e) => { e.preventDefault() }}
                                />
                                <button className="btn btn-sm btn-ghost border-0 border-l border-[var(--fallback-bc,oklch(var(--bc)/0.2))] rounded-none grow"
                                    onClick={generateKey}
                                >Generar</button>
                            </div>

                        </div>
                        <div className="form-control">
                            <label htmlFor="usertype">Tipo de usuario</label>
                            <select name="usertype" id="usertype" className="select select-bordered select-sm w-full max-w-xs" value={usertype} onChange={(e) => setUsertype(Number(e.target.value))}>
                                {
                                    USERTYPES.map((usertype) => {
                                        return (
                                            <option key={usertype.id} value={usertype.id}>{usertype.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="pt-2 flex gap-2">

                            <button className="btn btn-primary" onClick={
                                async () => {
                                    console.log({ id: 0, key, usertype });
                                    const nextId = await usersService.getNextId();
                                    const user = { id: nextId, key, usertype: USERTYPES.filter((type) => type.id === usertype)[0] };
                                    console.log(user);
                                    const response = usersService.create(user);
                                    console.log(response);
                                }
                            }>Guardar</button>
                            <form method="dialog">
                                <button className="btn btn-error">Cancelar</button>
                            </form>
                        </div>
                    </div>
                    <div className="modal-action">

                    </div>
                </div>

            </dialog>
        </div>
    )
}  