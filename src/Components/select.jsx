import { Link } from "react-router-dom"
import Options from "./options";
import {useState} from "react";
function Select() {
    const [d, Diff] = useState("easy");
    // const [Category, catg] = useState("computer");
    // const [Amount, amnt] = useState("10");

    return (
        <>
            <div className="h-screen w-screen  grid place-content-center items-center">
                <h1 className="text-center text-white text-xl sm:text-2xl md:text-3xl">Select Quiz type and Category</h1>
                <div className="h-auto w-60 m-auto sm:w-72 md:w-80 lg:w-96 my-11 rounded-xl bg-white p-7 grid place-content-center">
                    <h1>Difficulty</h1>
                    <select name="Difficulty" id="category" className="h-11 w-44 sm:w-64 md:w-72 rounded-md border border-sky-600 focus:border-sky-600">
                        <Options type="easy" />
                        <Options type="medium" />
                        <Options type="hard" />
                    </select>
                    <h1>Category</h1>
                    <select name="Category" id="category" className="h-11 w-44 sm:w-64 md:w-72 rounded-md border border-sky-600 focus:border-sky-600">
                        <Options type="politics" />
                        <Options type="history" />
                        <Options type="computer" />
                        <Options type="film" />
                    </select>
                    <h1>Amount</h1>
                    <select name="Amount" id="category" className="h-11 w-44 sm:w-64 md:w-72 rounded-md border border-sky-600 focus:border-sky-600">
                        <Options type="10" />
                        <Options type="20" />
                        <Options type="30" />
                    </select>


                    <Link to="/Quiz"
                        className="m-3 grid place-content-center items-center h-9 w-36 sm:w-48 md:w-520 lg:w-60 rounded-lg text-white bg-blue-500 hover:bg-blue-600">Show Quiz</Link>
                </div>
            </div >
        </>
    )
}
export default Select;