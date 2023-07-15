import "./App.css";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ContentDetail from "./components/ContentDetail";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Join from "./components/Join";
import Search from "./components/Search";

function App() {
  //컴포넌트를 만드는 코드
  //수정중입니다...
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          {/* 메인페이지*/}
          <Route path="/" element={<Home />} />
          {/* 제품상세 페이지 */}
          <Route path="/product/:itemId" element={<ContentDetail />} />
        </Route>
        {/* <NotFoundPage /> */}
        <Route path="*" element={<NotFoundPage />} />
        {/* 로그인 */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Join" element={<Join />} />
        {/* 검색 */}
        <Route path="/search/:word" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
