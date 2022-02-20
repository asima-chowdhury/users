import Navbar from './components/Navbar';
import CodeForInterview from './components/CodeForInterview';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import EditUser from './components/EditUser';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CodeForInterview />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/add" element={<AddUsers />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
