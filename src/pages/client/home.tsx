import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/others/navbar";

const Home = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Navbar />
            <h1 className="font-medium">WELCOME TO HOME</h1>
            <div className="mt-3">
                <ModeToggle />
            </div>
        </div>
    )
}


export default Home;