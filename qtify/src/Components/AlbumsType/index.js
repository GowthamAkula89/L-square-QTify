import CardComponent from "../CardComponet";
import "./albumsType.css";
const AlbumsType=({albums,title})=>{
    console.log("Albums type");
    console.log(albums);


    return(
        <div className="sub-section">
            <h1 className="section-albums-heading">{title}</h1>
            <div className="section-albums">
            {albums.map((album) => (
                <div key={album.id}>
                <CardComponent album={album} />
                </div>
                
            ))}
            </div>
        </div>
    )
}
export default AlbumsType;