import {ReactComponent as SearchIcon} from "./search-icon.svg";
import "./Search.css";
const SearchBox=()=>{
    return(
        <form className="form">
            <input placeholder="Search a album for your choise" className="searchBox"/>
            <button id="searchBtn">
                <SearchIcon/>
            </button>
        </form>
    )
}
export default SearchBox;