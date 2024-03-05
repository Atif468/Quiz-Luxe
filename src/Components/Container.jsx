import React from "react";
import { useEffect, useState } from "react";

function Container() {

    var [questions, Setquestion] = useState([]);
    const [count, Setcount] = useState(0);

    // React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple')
        .then((resp) => {
            return resp.json();
        })
        .then((response) => {
            return response.results;
        })
        .then((ques) => {
            console.log(ques[count].question);
            Setquestion(ques[count].question);
        })
        .catch((e) => {
            console.log(e);
        });
    // },[]);
    function inc() {
        if (count == 20) {
            alert("you scored -----");
        }
        Setcount(count => count + 1)
        console.log(count);
        ques[count].question
    }
    return (
        <div className=" h-96 flex justify-center items-center gap-11 text-white ">
            <div className="flex flex-col gap-6 rounded h-auto w-auto">
                <h1 className="text-2xl h-full w-full text-white">
                    Q{count}. {questions}
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


export default Container;
