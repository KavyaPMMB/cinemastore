import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardPost.css";
import axios from "../Components/Axios";
import { API_KEY, imageUrl } from "../Constants/Constants";
import YouTube from "react-youtube";

function Cardposts(props) {
  const [movies, setmovies] = useState([]);
  const [urlid, seturlid] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  
  useEffect(() => {
    axios.get(props.url).then((res) => {
      console.log(res.data);
      setmovies(res.data.results);
    });
  }, []);



  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        if (res.data.results.length !== 0) {
          seturlid(res.data.results[0].key);
          console.log("vdo Running");
          setShowVideo(true);
        } else {
          console.log("not available");
        }
      });
  };

  const handleCloseVideo = () => {
    seturlid("");
    setShowVideo(false);
  };

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div
      className="container-fluid d-flex justify-content-left"
      style={{
        overflowX: "scroll",
        overflowY: "scroll",
        backgroundColor: "black",
      }}
    >
      <div className="d-flex ">
        {movies.map((res) => (
          <Card
            className="posters"
            style={{
              height:"15rem",
              width: "10rem",
              margin: "15px",
              backgroundColor: "black",
              color: "white",
            }}
            key={res.id}
          >
            <Card.Img
              variant="top"
              src={`${imageUrl + res.backdrop_path}`}
            />
            <Card.Body>
              <p>{res.title || res.name}</p>
    
              <Button
                variant="outline-light"
                onClick={() => handleMovie(res.id)}
              >
                PLAY
              </Button>
            </Card.Body>
          </Card>
        ))}
        {showVideo && (
          <div className="abc">
            <div className="video-container">
              <YouTube opts={opts} videoId={urlid} />
              <button className="close-btn" onClick={handleCloseVideo}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cardposts;
