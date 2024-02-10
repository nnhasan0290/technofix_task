import "./Link.css"

const Link = ({value, onClick}) => {
    return(
        <h4 className="link" onClick={onClick}>{value}</h4>
    )
}

export default Link