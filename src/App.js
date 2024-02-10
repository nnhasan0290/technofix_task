import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import Form from "./ui/Form/Form";
import Heading from "./ui/Heading/Heading";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Heading />
              <Container />
              <Form />
            </>
          }
        />
        <Route path="/:id" element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
