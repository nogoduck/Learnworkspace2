import { useSelector } from "react-redux";

function Cat() {
  const cat_arr = useSelector((state) => state);
  return (
    <div>
      <h1>Cat</h1>
    </div>
  );
}

export default Cat;
