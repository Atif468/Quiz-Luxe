import React from "react";
import { useEffect, useState } from "react";

function Container() {

    var [questions, Setquestion] = useState();
    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple')
            .then((resp) => {
                return resp.json();
            })
            .then((response) => {
                return response.results;
            })
            .then((ques) => {
                console.log(ques[0].question);
                console.log(ques[1].question);

                questions = ques[0].question
            })
            .catch((e) => {
                console.log(e);
            });
    },[]);

    return (
        <div className=" h-96 flex justify-center items-center gap-11 text-white ">
              <div className="flex flex-col gap-6 rounded h-auto w-96">
                 <h1 className="text-2xl h-full w-full bg-white text-black">
                     Q.{questions}
                 </h1>
             </div> 
        </div>
    )
}


export default Container;
