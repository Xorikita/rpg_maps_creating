import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import Header from "./components/Header/Header";
// import Title from "./components/Title/Title";
// import s from "./App.module.css";
import Body from "./components/Body/Body";

export default function App() {
  const [title, setTitle] = useState("")
  const location = useLocation()
  useEffect(() => {
    setTitle(location.pathname)
  }, [location])
  return (
    <div>
        {/* <Header>
          <Link to="/">home</Link>
          <Title location={title} />
        </Header> */}
        <Body>
          <Outlet/>
        </Body>
        {/* <div style={{height: '100px', backgroundColor: '#253350', width: '100%', marginTop: '80px'}}></div> */}
    </div>
  );
}