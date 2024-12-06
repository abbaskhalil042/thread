import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/protected/Home";
import Search from "./pages/protected/Search";
import Error from "./pages/Error";
import Register from "./pages/Register";
import ProtectedLayout from "./pages/protected/ProtectedLayout";
import CreatePost from "./components/home/CreatePost";
import ProfileLayout from "./pages/protected/profile/ProfileLayout";
import Threads from "./pages/protected/profile/Threads";
import Respost from "./pages/protected/profile/Respost";
import Replies from "./pages/protected/profile/Replies";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <Register /> */}
      {/* <CreatePost /> */}

      <Routes>
        <Route exact path="/" element={<ProtectedLayout />}>
          <Route exact path="" element={<Home />}></Route>
          <Route exact path="post/:id" element={<h1>Post</h1>}></Route>
          <Route exact path="search" element={<Search />}></Route>
          <Route exact path="profile" element={<ProfileLayout />}>
            <Route exact path="threads/:id" element={<Threads />}></Route>
            <Route exact path="respost/:id" element={<Respost />}></Route>
            <Route exact path="replies/:id" element={<Replies />}></Route>
          </Route>
          <Route exact path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
