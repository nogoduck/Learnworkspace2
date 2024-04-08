import { useSelector } from "react-redux";

const Dog = () => {
  const dog_arr = useSelector((state) => state.dog.dog_arr);

  console.log(dog_arr);
  return (
    <div>
      <h1>Dog</h1>
      {dog_arr.map((dog, index) => {
        return <div key={index}>{dog}</div>;
      })}
    </div>
  );
};

export default Dog;
