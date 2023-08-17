import { Route,  Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Table from "./components/Table";
import AddEmp from "./components/AddEmp";
import EditEmp from "./components/EditEmp";
import DeleteEmp from './components/DeleteEmp'
import EmpDetails from "./components/EmpDetails";

function App() {
  return (
    <div className="App">

        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/api/" element={<Home />} />
          <Route exact path="/cruds" element={<Table />} />	
          <Route exact path="/cruds/new" element={<AddEmp />} />
          <Route exact path="/cruds/:_id" element={<EmpDetails />} />
          <Route exact path="/cruds/:_id/edit" element={<EditEmp />} />	
          <Route exact path="/cruds/:_id/delete" element={<DeleteEmp />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
