import { useEffect, useState } from "react";
import { Icons8Pin3 } from "../icons/Pin";
import { useBasicStore } from "../stores/basicStore";
import clsx from "clsx";
import { window as tauriwindow } from "@tauri-apps/api";
import { MdiReload } from "../icons/Reload";
import { useUsersStore } from "../stores/usersStore";
import usersService from "../services/users.service";
export const TopBar = () => {
    const { tool, setTool, tools } = useBasicStore((state) => state);
    const { setUsers } = useUsersStore((state) => state);
    const [pinnedWindow, setPinnedWindow] = useState(false);
    useEffect(() => {

        tauriwindow.appWindow.setAlwaysOnTop(pinnedWindow);
    }, [pinnedWindow]);

    const handleUpdate = () => {
        if (tool.id === 0) { // USER TOOL
            usersService.getAll().then((users) => {
                setUsers(users);
            });
        }

    }
    return (
        <div className="body text-white  w-full">
            <div className="navbar bg-base-100 bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                tools?.map((item, index) => (
                                    <li key={index} onClick={() => setTool(item)}><a>{item.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl font-thin">{tool?.name || "MuPVP Online"}</a>
                </div>
                <div className="navbar-end">
                    <button className={clsx("btn btn-circle btn-ghost")} onClick={handleUpdate}>
                        <MdiReload fontSize={24} />
                    </button>
                    <button className={clsx("btn btn-circle ", pinnedWindow ? "" : "btn-ghost")} onClick={() => { setPinnedWindow(!pinnedWindow) }}>
                        <Icons8Pin3 fontSize={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}