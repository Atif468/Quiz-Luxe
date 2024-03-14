function Result(props)
{
    return (
        <>
            <div className="h-40 w-56 bg-white rounded">
                <h1 className="text-white text-2xl font-mono">you scored {props.scr}</h1>
            </div>
        </>
    )
}
export default Result;