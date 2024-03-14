import Select from '../Components/select';
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="h-full text-white">
            <div className="h-screen  grid place-content-center sm:p-3">
                <h1 className="mb-4 sm:text-2xl md:text-3xl lg:text-4xl">Hello there, Quizzer!</h1>
                <p className="h-auto sm:w-[500px] md:w-[700px] lg:w-[900px] sm:m-2 sm:text-xl md:text-2xl lg:test-3xl">
                    Welcome to Quizzit, your ultimafte destination for fun and challenging quizzes! Whether you're a trivia aficionado, a knowledge seeker, or just looking to have some fun, you've come to the right place.</p>
                <Link to="/Select" className="hover:bg-blue-600 text-3xl bg-blue-500 rounded-lg m-10  sm:h-10 sm:w-20 md:h-12 md:w-28 grid place-content-center lg:h-14 lg:w-32">Next</Link>
            </div>
        </div >

    )
}

export default Home;