import Card from "../../ui/Card/Card"
import "./Container.css"

const Container = () => {
    return(
        <div className="container">
            {
                Array(5).fill(0).map((each) => (<Card/>))
            }
        </div>
    )
}


export default Container