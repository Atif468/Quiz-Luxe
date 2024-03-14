import {Link} from "react-router-dom"
function Select() {
    return (
        <>
            <div className="h-screen sm:w-56 md:w-64  lg:w-1/2 mx-auto my-auto">
                <h1 className="text-center text-white text-xl sm:text-2xl md:text-3xl">Select Quiz type and Category</h1>
                <div className="h-auto w-60 m-auto sm:w-72 md:w-80 lg:w-96 my-11 rounded-xl bg-white p-7 grid place-content-center">
                    <h1>Difficulty</h1>
                    <select name="select" id="category" className="h-11 w-44 sm:w-64 md:w-72 rounded-md border border-sky-600 focus:border-sky-600">
                        <option value="easy">easy</option>
                        <option value="mediun">medium</option>
                        <option value="hard">hard</option>
                    </select>
                    <h1>category</h1>
                    <select name="select" id="category" className="h-11 w-44 sm:w-64 md:w-72 rounded-md border border-sky-600 focus:border-sky-600">
                        <option value="politics">politics</option>
                        <option value="history">history</option>
                        <option value="science">science</option>
                        <option value="film">film</option>
                    </select>
                    <h1>Amount</h1>
                    <select name="select" id="category" className="h-11 w-44 sm:w-64 md:w-72 rounded-md border border-sky-600 focus:border-sky-600">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>


                   <Link to="/Quiz" className="m-3 h-9 w-36 sm:w-48 md:w-520 lg:w-60 rounded-lg text-white bg-blue-500 hover:bg-blue-600">Show Quiz</Link>
                </div>
            </div>
        </>
    )
}
export default Select;