import {useSelector} from "react-redux";

const Cat = () => {

  const cat_arr = useSelector((state) => state.cat.cat_arr);

  

  console.log(cat_arr);
  return (
    <div>
      <h1>Cat</h1>

      {cat_arr.map((cat, index) =>  {
        return <div key={index}>{cat}</div>;
      })}
    </div>
  );
}

export default Cat;