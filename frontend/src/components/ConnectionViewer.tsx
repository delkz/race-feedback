import { useStore } from '../hooks/useStore'

const ConnectionViewer = () => {
    const connectedStateIracing = useStore((state => state.connectionToIracing))
    const toogleConnectionToIracing = useStore((state => state.toogleConnectionToIracing))
    const connectedStateServer = useStore((state => state.connectionToServer))

    return (
        <div className='w-full'>
            <div className='flex items-center gap-4 mt-5 flex-col'>
                <div className='flex items-center gap-4 mt-5'>
                    <span className={`status ${connectedStateServer ? "status-success" : "status-error"}`}></span>
                    <span><span className='capitalize'>{!connectedStateServer && "not"} connected</span> to server</span>
                </div>
                <div className='flex items-center gap-4 mt-0'>
                    <span className={`status ${connectedStateIracing ? "status-success" : "status-error"}`}></span>
                    <span><span className='capitalize'>{!connectedStateIracing && "not"} connected</span> to iracing</span>
                </div>
                <button className="btn w-full capitalize" onClick={() => toogleConnectionToIracing()}>
                    {connectedStateIracing ? "disconnect" : "connect"}
                </button>

            </div>
        </div>
    )
}

export default ConnectionViewer