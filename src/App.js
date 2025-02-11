import { BrowserRouter, Routes, Route, IndexRoute, useParams, Navigate } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Resume from "./Pages/Resume/Resume";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exert index element={<Dashboard/>}/>
        <Route path='/resume' exert index element={<Resume/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
