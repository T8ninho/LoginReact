import Layout from "./Layout";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextoProvider } from "./Context/UseContext";

const App = () => {
  return (
    <BrowserRouter>
      <ContextoProvider>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Login /> }></Route>
            <Route path="/signup" element={ <Signup />} ></Route>
            <Route path="/profile" element={ <Profile /> }></Route>
          </Route>
        </Routes>
      </ContextoProvider>
    </BrowserRouter>
  )
}

export default App