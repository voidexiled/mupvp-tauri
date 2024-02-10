
import "./App.css";
import { Home } from "./Home";
import { Login } from "./Login";
import { TitleBar } from "./components/TitleBar";

import { useAuthStore } from "./stores/authStore";

function App() {
  const { loggedIn } = useAuthStore((state) => state);




  return (
    <div className="h-screen flex flex-col ">
      <TitleBar />
      <div className="flex flex-col w-full  h-full bg-gradient-to-br from-fuchsia-950 via-purple-950 to-violet-950">
        {!loggedIn ? <Login /> : <Home />}
      </div>

    </div>
  );
}

export default App;
