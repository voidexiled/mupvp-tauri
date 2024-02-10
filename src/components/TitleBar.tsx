import { appWindow } from '@tauri-apps/api/window'
import { MdiWindowMinimize } from "../icons/Minimize";
import { MdiWindowMaximize } from "../icons/Maximize";
import { MdiWindowClose } from "../icons/Close";

export const TitleBar = () => {
    return (
        <div className="title-bar relative min-h-[42px] max-h-[42px] z-50 bg-neutral-950/80 flex justify-between items-center no_selectable overflow-hidden font-thin" data-tauri-drag-region>
            <div className="px-4 flex gap-4 items-center justify-start">
                <img src="/icon.png" alt="logo" className="h-6 w-6 " data-tauri-drag-region />

                <h1 className="text-white text-sm font-sans" data-tauri-drag-region>MuPVP Online Admin Tool</h1>
            </div>
            <div className="title-bar-controls flex text-white h-full justify-center items-center">
                <div className="titlebar-button" id="titlebar-minimize" onClick={() => {
                    appWindow.minimize()
                }}>
                    <MdiWindowMinimize />

                </div>
                <div className="titlebar-button" id="titlebar-maximize" onClick={
                    () => {
                        appWindow.toggleMaximize()
                    }
                }>
                    <MdiWindowMaximize />
                </div>
                <div className="titlebar-button" id="titlebar-close"
                    onClick={() => {
                        appWindow.close()
                    }}
                >
                    <MdiWindowClose />
                </div>
            </div>
        </div>
    )
}