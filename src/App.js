import Dashboard from './Pages/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route, IndexRoute, useParams, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exert index element={<Dashboard/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
