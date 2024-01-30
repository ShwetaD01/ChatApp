
import './App.css';
import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path={"/"} element={<HomePage></HomePage>}></Route>
   <Route path={"/chats"} element={<ChatPage></ChatPage>}></Route>
    </Routes>
  
    </div>
  );
}

export default App;
