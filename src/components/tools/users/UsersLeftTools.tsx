import { useUsersToolsStore } from "../../../stores/usersToolsStore";

export const UsersLeftTools = () => {
    const { tools, setTool } = useUsersToolsStore((state) => state);
    const openAddModal = () => {
        const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
        modal.showModal();
    }

    return (
        <>
            {
                tools.map((tool) => {
                    if (tool.id === 0) {
                        return (
                            <button key={tool.id} className="btn btn-md join-item" onClick={openAddModal}>{tool.name}</button>
                        )
                    }
                    return (
                        <button key={tool.id} className="btn btn-md join-item" onClick={() => setTool(tool)}>{tool.name}</button>
                    )
                })
            }

        </>
    )
}