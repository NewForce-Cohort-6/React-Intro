import React from 'react'



export const TacoJr = ({singleObj}) => {




    return(
        <div className="jrCard">
            <h3>{singleObj.name}</h3>
            {/* should be bool */}
            {singleObj.doesItBlend? <p>Yes</p>: <p>No</p>}
        </div>
    )
}