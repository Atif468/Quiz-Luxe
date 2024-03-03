import { useEffect, useState } from "react";

function Container() {

    const [, setquestion] = useState();

    function run() {
        fetch('https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple')
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then((response) => {
                return response.results;
            })
            .then((ques)=>
            {
                console.log(ques[0].question)
            })
            .catch((e) => {
                console.log(e);
            });
    }
    run();
    return (
        <div className=" h-96 flex justify-center items-center gap-11 text-white ">
            <div className="flex flex-col gap-6 rounded h-auto w-96">
                <h1 className="text-2xl">
                    Q. This is my first question.
                </h1>
                <div className="flex flex-wrap gap-7 pl-5">
                    <button className="h-10 w-2/3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded">Options</button>
                    <button className="h-10 w-2/3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded">Options</button>
                    <button className="h-10 w-2/3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded">Options</button>
                    <button className="h-10 w-2/3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded">Options</button>
                </div>

            </div>
        </div> 
    )
}


export default Container;
