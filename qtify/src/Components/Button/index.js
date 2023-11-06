import React from "react";
import "./Button.css";
const FeedbackButton= ({children})=>{
    return(
        <button className="feedbackBtn">
            {children}
        </button>
    )
}
export default FeedbackButton;