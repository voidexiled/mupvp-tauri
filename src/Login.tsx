import { useAuthStore } from "./stores/authStore";

export const Login = () => {
    const { setLoggedIn } = useAuthStore((state) => state);
    const tryLogin = () => {
        console.log("Trying to login")
        setLoggedIn(true)

    }
    return (
        <div className="grid w-full h-full">
            <div className="m-auto bg-accent-content/80 px-8 py-4 flex flex-col gap-4">
                <h1 className="text-xl text-center text-white">Inicia sesión</h1>


                <input type="text" placeholder="Ingresa tu licencia " className="border-none px-3 py-1 rounded-md " />
                <button className=" btn-ghost text-white w-[80px] " value="Login" onClick={tryLogin}>Login</button>

            </div>
        </div>
    )
}