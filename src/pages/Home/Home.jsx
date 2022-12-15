import React, {useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

  export default function Home(){
    
    return (
      <>
        <h1>Home</h1> 
        <Link to={'/playground'}>
            to playground
        </Link>
        <Link to={'/create_playground'}>
            new
        </Link>
      </>
    )
  }