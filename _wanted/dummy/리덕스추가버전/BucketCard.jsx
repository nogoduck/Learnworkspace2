import React from "react";
import { Link } from "react-router-dom";

function bucketCard({ count, bucketText }){
    return (
        <div className='bucket' id={`${count}BucketDiv`}>
            <Link to={"/detail/" + bucketText}>{bucketText}</Link>
        </div>
    )
}

export default bucketCard;