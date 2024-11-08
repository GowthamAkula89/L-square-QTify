import React, {useState,useEffect} from "react";
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Albums from './Components/Albums';
import FilterSection from './Components/FilterSection';
import FAQ from './Components/FAQ';
import axios from "axios";
const ENDPOINT="https://qtify-backend-labs.crio.do";
function App() {
  const [topAlbums,setTopAlbums]=useState([]);
  const [newAlbums,setNewAlbums]=useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [allAlbums,setAllAlbums]=useState([]);
  useEffect (()=>{
    const fletchData=async()=>{
      const topAlbums_url=`${ENDPOINT}/albums/top`;
      const newAlbums_url=`${ENDPOINT}/albums/new`;
      try{
        const topAlbums_response= await axios.get(topAlbums_url);
        const newAlbums_response= await axios.get(newAlbums_url);
        setTopAlbums(topAlbums_response.data);
        setNewAlbums(newAlbums_response.data);
        setAllAlbums([...topAlbums_response.data,...newAlbums_response.data]);
        const [songsResponse, genresResponse] = await Promise.all([
          axios.get(`${ENDPOINT}/songs`),
          axios.get(`${ENDPOINT}/genres`)
        ]);
        setSongs(songsResponse.data);
        setFilteredSongs(songsResponse.data);
        setGenres([{ "key": "all", "label": "All" }, ...genresResponse.data.data]);
      }catch(err){
          console.log("Error occurs in Fletching data",err);
      }
    }
    fletchData();
  },[])
  return (
    <div className="App">
      <Navbar allAlbums={allAlbums}/>
      <HeroSection/>
      <Albums topAlbums={topAlbums} newAlbums={newAlbums}/>
      <FilterSection title={"Songs"} data={filteredSongs} filters={genres}
        executeFilters = {(genre) => {
          if (genre === "all"){
              setFilteredSongs(songs);
          } else{
              const filteredData = songs.filter(song => song.genre.key === genre);
              setFilteredSongs(filteredData);
          }
      }}/>
      <FAQ/>
    </div>
  );
}
export default App;