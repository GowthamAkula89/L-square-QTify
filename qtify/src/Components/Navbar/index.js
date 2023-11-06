import FeedbackButton from "../Button";
import SearchBox from "../SearchBox";
import "./Navbar.css";
const Navbar =()=>{
    return(
        <div className="navBar">
            <img src="qtifyLogo.png" alt=""/>
            <SearchBox/>
            <FeedbackButton children={"Give Feedbacks"}/>
        </div>
        
    )
}
export default Navbar;