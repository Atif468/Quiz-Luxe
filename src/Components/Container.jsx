import React from "react";
import { useEffect, useState } from "react";

function Container() {
  const [option, setOption] = useState([]);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple"
    )
      .then((resp) => {
        return resp.json();
      })
      .then((response) => {
        setData(response.results);
        getOptions(response.results[count]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const getOptions = (obj) => {
    var c = 0;
    var w = 0;
    var correct = setCorrectOption();
    var options = [];
    while (c < 4) {
      if (c == correct) {
        options = [...options, obj.correct_answer];
        c += 1;
      } else {
        options = [...options, obj.incorrect_answers[w]];
        w += 1;
        c += 1;
      }
    }
    setOption(options);
  };

  const setCorrectOption = () => {
    return Math.floor(Math.random() * 4);
  };

  function inc() {
    if (count > 19) {
      alert("you scored -----");
      setCount(0);
    } else {
      const co = count + 1;
      setCount((count) => count + 1);
      getOptions(data[co]);
    }
  }
  return (
    <div className=" h-96 flex justify-center items-center gap-11 text-white ">
      <div className="flex flex-col gap-6 rounded h-auto w-auto">
        <h1 className="text-2xl h-full w-full text-white">
          Q{count + 1}: {data?.length ? data[count].question : "Loading..."}
        </h1>
        <div className="flex flex-col gap-7 pl-5">
          {option?.length
            ? option?.map((o, i) => {
                return (
                  <button
                    onClick={(e) => {
                      if (e.target.innerHTML == data[count].correct_answer)
                        setScore((prev) => (prev += 1));
                      inc();
                    }}
                    className="bg-red-300 p-3 text-left"
                    key={i}
                  >
                    {o}
                  </button>
                );
              })
            : "loading Options"}
        </div>
        <button onClick={inc} className="h-12 w-40 bg-blue-500 rounded-xl">
          next
        </button>
        <h1>Score: {score}</h1>
      </div>
    </div>
  );
}

export default Container;
