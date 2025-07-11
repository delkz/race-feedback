import { useState } from 'react'

const ConnectionViewer = () => {
    const [connectedState, setConnectedState] = useState(true)
    return (
        <div className='w-full'>
            <div className='flex items-center gap-4 mt-5 flex-col'>
                <div className='flex items-center gap-4 mt-5'>
                    <span className={`status ${connectedState ? "status-success" : "status-error"}`}></span>
                    <span><span className='capitalize'>{!connectedState && "not"} connected</span> to iracing</span>
                </div>
                <button className="btn w-full capitalize" onClick={() => setConnectedState(!connectedState)}>
                    {connectedState ? "disconnect" : "connect"}
                </button>

            </div>
        </div>
    )
}

export default ConnectionViewer