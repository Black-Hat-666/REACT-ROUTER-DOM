import { Home } from "./Components/Pages/Home/Home";
import{ Route, Routes } from 'react-router-dom';

import { Destination } from "./Components/Pages/Destination/Destination";
import { NotFound } from "./Components/UI/NotFound/NotFound";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Destination" element={<Destination />}/>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
