import { useState } from "react";

const Cat = () => {
  const [name, setName] = useState();

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Cat;
