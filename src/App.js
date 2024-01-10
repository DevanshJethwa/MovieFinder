// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [progress, setProgress] = useState(0);
  const [mode, updateMode] = useState(true);
  document.body.style.backgroundColor = mode ? "white" : "#000000";

  const [inputData, UpdateInputData] = useState("");
  const [MovieInfo, updateMovieInfo] = useState("");

  const changeInput = (e) => {
    UpdateInputData(e.target.value);
  };

  const getData = async () => {
    setProgress(30);
    let data = await fetch(
      `http://www.omdbapi.com/?apikey=e2104319&t=${inputData}`
    );
    let parsedData = await data.json();
    setProgress(60);
    // console.log(parsedData);
    // console.log(parsedData.Title);
    updateMovieInfo(parsedData);
    setProgress(100);
  };

  const changeMode = () => {
    updateMode(!mode);
    // console.log("changed...");
  };
  return (
    <>
      <LoadingBar
        color="#ffa500"
        progress={progress}
        height={5}
        onLoaderFinished={() => setProgress(0)}
      />

      {/* <Router basename="MovieFinder"> */}
        
        <Navbar mode={mode} func={changeMode}></Navbar>
        {/* <Routes> */}
          {/* <Route path="/" element={ */}
          <div>
                <div
                  className="container mx-auto my-5 "
                  style={{ maxWidth: "1100px" }}
                >
                  <div className="d-flex justify-content-center mb-5">
                    <input
                      type="search"
                      className={`form-control fs-5 rounded-end-0 bg-${
                        mode ? "light" : "dark"
                      } text-${mode ? "dark" : "light"}`}
                      id="search"
                      aria-describedby="emailHelp"
                      placeholder="search movies/series name here"
                      onChange={changeInput}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary px-3 fs-5 rounded-start-0"
                      onClick={getData}
                    >
                      Search
                    </button>
                  </div>

                  {MovieInfo.Title && (
                    <div className="row">
                      <div className="col-md-5">
                        <img
                          src={
                            MovieInfo.Poster == "N/A"
                              ? "https://cdn2.iconfinder.com/data/icons/symbol-blue-set-3/100/Untitled-1-94-512.png"
                              : MovieInfo.Poster
                          }
                          className="img-fluid h-100 "
                          style={{ width: "500px" }}
                        />
                      </div>
                      <div
                        className={`col-md-7 text-${mode ? "dark" : "light"}`}
                      >
                        <h1 className="text-md-start text-center my-md-0 my-3">
                          Title :- {MovieInfo.Title}
                        </h1>
                        <h5 className="my-2">Type :- {MovieInfo.Type}</h5>
                        <div className="d-flex align-items-center mb-0">
                          <h5 className="me-3">
                            IMDB :- {MovieInfo.imdbRating}
                          </h5>
                          <h5 className="text-secondary">
                            {MovieInfo.imdbVotes} votes
                          </h5>
                        </div>
                        <h5 className="">Genre :- {MovieInfo.Genre}</h5>
                        <h5 className="my-2">
                          Released Date :- {MovieInfo.Released}
                        </h5>
                        <h5 className="my-2">
                          Duration :- {MovieInfo.Runtime}
                        </h5>
                        <h5 className="my-2">
                          Director :- {MovieInfo.Director}
                        </h5>
                        <h5 className="my-2">Actors :- {MovieInfo.Actors}</h5>
                        <h5 className="my-2">Writers :- {MovieInfo.Writer}</h5>
                        <h5 className="my-2">
                          Countries :- {MovieInfo.Country}
                        </h5>
                        <h5 className="my-2">
                          Languages :- {MovieInfo.Language}
                        </h5>
                        <h5 className="my-2">
                          Box office :- {MovieInfo.BoxOffice}
                        </h5>
                        <h5 className="">Plot :- {MovieInfo.Plot}</h5>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* }></Route> */}
            {/* <Route path="/about" element={<About/>}></Route> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
