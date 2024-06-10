import ReactDOM from "react-dom/client"
import MovieCard from "./card"
import './style.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <div className="movie-cards-container">
            <MovieCard
                title="BATHRINATH KI DULHAN"
                
                url="https://th.bing.com/th/id/OIP.2yK7uGlzwXnUQxlU2o0SWgAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            />
            <MovieCard
                title="TAMASHA"
               
                url="https://th.bing.com/th/id/OIP.L1lfsv8VYuLpj7UB0FY00QHaKu?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            />
            <MovieCard
                title="DHADAK"
               
                url="https://th.bing.com/th/id/OIP.LditLNNgSzwyK25VC2zFkgAAAA?w=149&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            />
        </div>
    </>
)
