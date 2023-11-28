import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import "./CardComponent.css";
const CardComponent = ({ item, title, index}) => {
    return (
        <Tooltip title={`${item.songs?.length} Songs`} placement="top" arrow>
            
        <div className="card-container">
        <div className="card-details">
            <img className="card-img" src={item.image} alt="" />
            <div className="follow-like-container">
                <div className="follows-likes">
                    {title === 'songs' ? `${item.likes} Likes` : `${item.follows} Follows`}
                </div>
            </div>
        </div>
        <p className="card-title">
            {item.title}
        </p>
        </div>
        </Tooltip>
    )
}
export default CardComponent;