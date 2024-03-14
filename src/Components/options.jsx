import Select from "./select";
function Options(props)
{
    return (
        <option value={props.type}
        onChange={()=>
            {
                diff(difficulty = props.type)
                alert(props.type);
            }}
        >{props.type}</option>
    )
}
export default Options;