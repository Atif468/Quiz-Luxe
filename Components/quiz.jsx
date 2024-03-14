import React from "react";
import { useEffect, useState } from "react";

function Quiz() {
    const [Collection, SetCollection] = useState([]);
    const [question, Setquestion] = useState([]);
    const [count, Setcount] = useState(0);

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple')
            .then((resp) => {
                return resp.json();
            })
            .then((response) => {
                SetCollection(response.results);
                console.log("ques", response.results);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [SetCollection]);
    function inc() {
        if (count == 19) {
            Setcount(count => count * 0)
        }
        console.log(count, Collection[count].question);
        Setcount(count => count + 1);
        Setquestion(question => Collection[count].question)   //use to change the question through index.
    }
    return (
        <div className=" h-96 flex justify-center items-center gap-11 text-white ">
            <div className="flex flex-col gap-6 rounded h-auto w-[600px]">
                <h1 className="text-2xl h-full w-auto text-white">
                    Q{count}. {question}
                </h1>
                <div className="flex flex-wrap gap-7 pl-5">
                    <button className="h-10 w-2/3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded">Options</button>
                    <button className="h-10 w-2/3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded">Options</button>
                    <button className="h-10 w-2/3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded">Options</button>
                    <button className="h-10 w-2/3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded">Options</button>
                </div>
                <button
                    onClick={inc}
                    className="h-12 w-40 bg-blue-500 rounded-xl">next</button>
            </div>
        </div>
    )
}


export default Quiz;
