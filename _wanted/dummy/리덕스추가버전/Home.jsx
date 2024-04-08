import React from "react";
import BucketCard from './BucketCard';
import { useSelector, useDispatch } from "react-redux"
import { addBucket2 } from "./redux/slices/bucket";

const Home = () => {
    const [count, setCount] = React.useState(0);

    const bucket_arr = useSelector((state) => state.bucket.bucket_arr);

    const dispatch = useDispatch();

    return (
        <div>
            <h1>내 버킷 리스트</h1>
            <div id="mainText">
                <div id="buckeList">
                    {bucket_arr.map((bucket, index) => {
                        return <p key={index}>{bucket}</p>
                    })}
                </div>
                <div id="inputBucket">
                    <input id="bucketText" type="text"/>
                    <button onClick={() => {dispatch(addBucket2(
                        <BucketCard key={`${count}bucketCard`} count={setCount(count + 1)} bucketText={document.getElementById("bucketText").value}/>
                    ))}}>추가하기</button>
                </div>
            </div>
        </div>
    )
}

export default Home;