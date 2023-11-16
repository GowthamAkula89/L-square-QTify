import "./CardComponent.css";
const CardComponent=({album})=>{
    return(
        <div className="card-container">
            <div className="card-details">
                <img className="card-img" src={album.image} alt=""/>
                <div className="follow-container">
                    <div className="follows">
                    {album.follows} Follows
                    </div>
                </div>
            </div>
            <p className="card-title">
            {album.title}
            </p>
        </div>
    )
}
export default CardComponent;