import FeedbackButton from "../Button";
import SearchBox from "../SearchBox";
import "./Navbar.css";
const Navbar =({allAlbums})=>{
    return(
        <div className="navBar">
            <img src="qtifyLogo.png" alt=""/>

            <SearchBox allAlbums={allAlbums}/>
            <FeedbackButton children={"Give Feedback"}/>
        </div>
    )
}
export default Navbar;