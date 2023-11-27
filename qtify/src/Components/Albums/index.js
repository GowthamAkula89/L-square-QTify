import "./albums.css";
import AlbumsType from "../AlbumsType";
const Albums=({topAlbums,newAlbums})=>{
    return(
        <div className="section">
            <AlbumsType  albums={topAlbums} title={"Top Albums"} albumsType={"top-albums"}/>
            <AlbumsType  albums={newAlbums} title={"New Albums"} albumsType={"new-albums"}/>
        </div>
    )
}
export default Albums;