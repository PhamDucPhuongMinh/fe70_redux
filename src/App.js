import "./App.css";
import { useState } from "react";
import BookingMovieTicket from "./Component/BookingMovieTicket/BookingMovieTicket";
import Glasses from "./Component/Glasses/Glasses";

function App() {
  const [isMovie, setIsMovie] = useState(false);
  const changeExam = () => {
    setIsMovie(!isMovie);
  };
  return (
    <div className="App">
      <button className="btn btn-warning my-3" onClick={changeExam}>
        Chuyển bài tập
      </button>
      {isMovie === true ? <BookingMovieTicket /> : <Glasses />}
    </div>
  );
}

export default App;
