function Header(){
    return (
        <nav className="flex items-center justify-between bg-black h-auto md:h-16 w-auto px-4 py-2 md:py-0">
                <div className="flex items-center space-x-2 md:space-x-4 ">
                    <img src="./assets/Brain Chat logo,brain bubble chat logo.jpg" className="h-10 w-10 ml-3 md:h-14 md:w-14 bg-cover" alt="" />
                    <h1 className="text-xl md:text-3xl text-white font-bold ">Quiz <span className="text-blue-400">Luxe</span></h1>
                </div>

                <div className="flex items-center space-x-2 md:space-x-4 md:mt-0">
                    <span className="text-white text-lg  md:text-xl lg:text-2xl">Login</span>
                    <button className="h-10 w-28 md:w-36 rounded-xl text-white md:text-lg bg-blue-500 hover:bg-blue-500 cursor-pointer">Register</button>
                </div>
            </nav>
    )
}
export default Header;