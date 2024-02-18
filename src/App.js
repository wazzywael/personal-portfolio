import { React, useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  const readtoken = "a0ae004cc7d735feeb32a906b97bcc9f8f1b102f";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios
        .get(
          `https://api.buttercms.com/v2/pages/portfolio/a-portfolio-site?auth_token=${readtoken}`
        )
        .then((res) => {
          console.log("res", res);
          setData(res.data.data.fields.my_personal_portfolio);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    };
    getData();
  }, []);
  return (
    <div>
      <NavBar />
      <Home content={data[0]} />
      <About content={data[1]} />
      <Skills content={data[2]} />
      <Works content={data[3]} />
      <Contact />
    </div>
  );
}

export default App;
