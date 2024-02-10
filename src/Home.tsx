
import { useEffect } from "react"
import { TopBar } from "./components/TopBar"
import { GuidesContent } from "./components/tools/guides/GuidesContent"
import { GuidesLeftTools } from "./components/tools/guides/GuidesLeftTools"
import { UsersContent } from "./components/tools/users/UsersContent"
import { UsersLeftTools } from "./components/tools/users/UsersLeftTools"

import { useBasicStore } from "./stores/basicStore"

export const Home = () => {
    const { tool } = useBasicStore((state) => state);

    const preparedTools = [
        { id: 0, leftTool: <UsersLeftTools></UsersLeftTools>, content: <UsersContent></UsersContent> },
        { id: 1, leftTool: <GuidesLeftTools></GuidesLeftTools>, content: <GuidesContent></GuidesContent> }
    ]

    useEffect(() => {
        console.log(tool)
    }, [tool]);




    return (
        <div className="flex flex-col app-wrapper h-full w-full">
            <TopBar />
            <div className="grid grid-cols-[200px_1fr]">
                <div className="join join-vertical mx-2 h-fit shadow-sm shadow-black/30 ">
                    {preparedTools[tool.id].leftTool}
                </div>
                <div className="wrapper px-2 w-full ">
                    <div className="shadow-sm shadow-black/30 main-container bg-base-300 w-full h-full rounded-lg overflow-hidden flex flex-wrap">
                        {preparedTools[tool.id].content}
                    </div>
                </div>
            </div>

        </div>

    )
}