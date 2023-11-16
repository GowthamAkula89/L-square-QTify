import React, {useState,useEffect} from "react";
import axios from "axios";
import "./albums.css";
import AlbumsType from "../AlbumsType";
const ENDPOINT="https://qtify-backend-labs.crio.do";
const Albums=()=>{
    const [topAlbums,setTopAlbums]=useState([]);
    const [newAlbums,setNewAlbums]=useState([]);
    useEffect (()=>{
        const fletchData=async()=>{
            const topAlbums_url=`${ENDPOINT}/albums/top`;
            const newAlbums_url=`${ENDPOINT}/albums/new`;
            try{
                const topAlbums_response= await axios.get(topAlbums_url);
                const newAlbums_response= await axios.get(newAlbums_url);
                setTopAlbums(topAlbums_response.data);
                setNewAlbums(newAlbums_response.data);
            }catch(err){
                console.log("Error occurs in Fletching data",err);
            }
        }
        fletchData();
    },[])
    return(
        <div className="section">
            <AlbumsType  albums={topAlbums} title={"Top Albums"}/>
            <AlbumsType  albums={newAlbums} title={"New Albums"}/>
        </div>
        
    )

}
export default Albums;