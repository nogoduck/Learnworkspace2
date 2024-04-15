const Dog = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("강아지로 이름 변경");
        }}
      >
        강아지로 이름 변경
      </button>
    </div>
  );
};

export default Dog;
