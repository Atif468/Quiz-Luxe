import React from "react";
import { useEffect, useState } from "react";

function Container() {
  const [option, setOption] = useState([]);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  // const [bg, bgColor] = useState("transparent");
  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount={}&category={}&difficulty={}&type=multiple"
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
    if (count+1 > 19) {
      alert("Please refresh the page..!!!!")
      setCount(count => count * 0);
    } else {
      const co = count + 1;
      setCount((count) => count + 1);
      getOptions(data[co]);
    }
  }
  function onclick(option) {
    if ( option === data[count].correct_answer) {
      // alert(score)
      setScore(score => score + 1);
      console.log(score);
    }
  }
  return (
    <div className="h-screen w-screen sm:text-xl p- lg:text-2xl text-white">
      <div className="grid place-content-center items-center mt-10">
        <h1 className="h-full w-auto sm:w-auto border rounded p-4 text-white">
          Q{count + 1}: {data?.length ? data[count].question : "Loading..."}
        </h1>
        <div className="flex flex-col gap-5 border w-full pl-11 p-11">
          {option?.length
            ? option?.map((o, i) => {
              return (
                <li
                  onClick={(e) => {
                    const option = e.target.innerHTML;
                    onclick(option);
                    // inc();
                  }}
                  className="p-3 w-auto text-left rounded text-nowrap border"
                  key={i}
                >
                  {o}
                </li>
              );
            })
            : "loading Options"}
        </div>
        <button onClick={inc} className="h-12 m-5 mt-6 w-72 sm:w-auto  bg-blue-500 rounded-xl">
          next
        </button>
        <h1>Score: {score}</h1>
      </div>
    </div>
  );
}

export default Container;