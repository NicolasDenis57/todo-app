import { /*Outlet*/ Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Tasks from "./Components/Tasks/Tasks";
import Api from "./Components/Api/Api"

const App = () => {

  return (
    <>
    {/* Methode la plus récente}*/}
      {/*<Header />*/}
      {/*<Outlet />*/}

      {/*Methode la plus ancienne*/}
      <Header />
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:name" element={<About />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </>
  );
};

export default App;