import { Container } from "./styled";
import { useEffect, useState } from "react";

const ListPage = () => {
  const [list, setList] = useState([]);

  const creteaDummyData = () => {
    let seqId = 0;

    const dummyQuestionList = [];
    for (let i = 0; i < 64; i++) {
      const dummyQuestion = {
        type: "question",
        id: (seqId += 1),
        title: `${seqId}# issue title`,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt dolorum explicabo, facilis incidunt magnam odio rem saepe ut voluptatem.",
        writer: "name",
        createdAt: new Date(),
        comment_cnt: 74,
      };

      if (i === 4) {
        dummyQuestionList.push({
          type: "ad",
          imgUrl: "http://via.placeholder.com/640x120",
          link: "https://www.wanted.co.kr",
        });
      }

      dummyQuestionList.push(dummyQuestion);
    }

    console.log(dummyQuestionList);

    return dummyQuestionList;
  };

  useEffect(() => {
    setList(creteaDummyData());
  }, []);

  return (
    <Container>
      <ul>
        {list.map((item, index) => (
          <>
            {item.type === "question" && <li key={index}>{item.title}</li>}
            {item.type === "ad" && <li key={index}></li>}
          </>
        ))}
      </ul>
    </Container>
  );
};

export default ListPage;
