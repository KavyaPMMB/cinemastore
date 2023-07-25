import React, { useEffect, useState } from 'react';
import {API_KEY,imageUrl} from '../Constants/Constants'
import { Button } from 'react-bootstrap';
import axios from '../Components/Axios'
import './Banner.css';

function Banner1() {
  const [movie, setmovie] = useState([])
  
  

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data.results);
      setmovie(res.data.results[6])
    })
  }, [])
   
  
  return ( 
    
<div className='banner' style={{paddingLeft:"5%",backgroundImage: `-webkit-linear-gradient(rgba(0,0,0, 0.6) 0%,rgba(0,0,0, 0.8) 100%), url(${movie ? imageUrl+ movie.backdrop_path:""})`}}>

      
      <h1 style={{ paddingTop: '50px' ,width:"50%",color:"white"}}>{movie ? movie.name : movie.title}</h1>
  
      <Button variant='outline-light' size='lg'>
        Play
      </Button>{'    '}
      <Button variant='outline-light' size='lg'>
        My List
      </Button><br />
    <br /><p style={{width:"40%",textAlign:"justify"}}>{movie ? movie.overview : ""}</p>
      
    </div>
 );
}

export default Banner1;
