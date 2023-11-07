import "./CardComponent.css";
const CardComponent=()=>{
    return(
        <div className="card">
            <img className="card-img" src="card_img.png" alt=""/>
            <div className="follow-container">
                <div className="follows">
                100M Follow
                </div>
            </div>
            <p className="card-title">
            New Bollywood
            </p>
        </div>
    )
}
export default CardComponent;