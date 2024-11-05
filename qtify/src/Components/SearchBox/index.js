import { useState } from 'react';
import Menu from '../Menu';
import { ReactComponent as SearchIcon } from './search-icon.svg';
import './Search.css';
const SearchBox = ({allAlbums}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const[filteredAlbums,setFilteredAlbums]=useState([]);
    const[debounceTimer,setDebounceTimer]=useState(null);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const performSearch = async (text) => {
        try{
          const filterData=allAlbums.filter((album)=> album.title.toLowerCase().includes(text.toLowerCase()))
          setFilteredAlbums(filterData);
        }
        catch(e){
          if(e.response && e.response.status===404){
            setFilteredAlbums([]);
          }
        }
      };
    const debounceSearch = (event, debounceTimeout) => {
        if(debounceTimeout){
          clearTimeout(debounceTimer);
        }
        const timer=setTimeout(()=>{
          performSearch(event.target.value)
        },1000)
        setDebounceTimer(timer);
      };
    return (
        <div className="search-container">
            <form className="form">
                <input
                    placeholder="Search an album of your choice"
                    className="searchBox"
                    onFocus={toggleMenu}
                    onBlur={toggleMenu}
                    onChange={(e)=>debounceSearch(e,debounceTimer)}
                />
                <button id="searchBtn">
                    <SearchIcon />
                </button>
            </form>
            {isMenuOpen && <Menu data={filteredAlbums} />}
        </div>
    );
};
export default SearchBox;