import { useState } from "react";
import CardComponent from "../CardComponet";
import "./albumsType.css";
import Carousel from "../Carousel";
const AlbumsType=({albums,title,albumsType})=>{
    const [isCollapsed,setIsCollapsed]=useState(true);
    return(
        <div className="sub-section">
            <div className="section-heading">
                <h1 className="section-albums-heading">{title}</h1>
                <h1 className="section-toggle-button" 
                    onClick={()=>setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? "Show all": "Collapse"}
                </h1>
            </div>
            {isCollapsed ? <Carousel data={albums} title={albumsType}/> : 
            <div className="section-albums">
                {albums.map((album) => (
                    <div key={album.id}>
                    <CardComponent item={album} />
                    </div>
                ))}
            </div>}
        </div>
    )
}
export default AlbumsType;