import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/protected/Home";
import Search from "./pages/protected/Search";
import Error from "./pages/Error";
import Register from "./pages/Register";
import ProtectedLayout from "./pages/protected/ProtectedLayout";
import CreatePost from "./components/home/CreatePost";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header />
      <Register /> */}
      <CreatePost />
      
      <Routes>
        <Route exact path="/" element={<ProtectedLayout />}>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="post/:id" element={<h1>Post</h1>}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
