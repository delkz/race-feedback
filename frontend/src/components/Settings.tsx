
const Settings = () => {
    return (
        <div className='rounded-lg p-6 bg-base-300'>
            <form action="" className=''>
                <fieldset className="fieldset rounded-box w-full">
                    <legend className="fieldset-legend">Options</legend>
                    <label className="label mb-5">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        Use TTS
                    </label>
                    <button className="btn btn-success">
                        Apply changes
                    </button>
                </fieldset>
            </form>
            <span className='mt-5 block w-full'>Client version 0.0.1</span>
        </div>
    )
}

export default Settings