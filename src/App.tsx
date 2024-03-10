import './App.css'
import Login from "./view/login.tsx";
import AdminView from "./view/adminView.tsx";
import UserView from "./view/userView.tsx";
import Adduser from "./view/adduser.tsx";
import ItemView from "./view/itemView.tsx";
import AddItem from "./view/addItem.tsx";
import CheackOutView from "./view/cheackOutView.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

    // const [expanded, setExpanded] = useState(true)
    //
    // function handleSidebar(){
    //     setExpanded(value => !value)
    // }

  return (
    <>

        <BrowserRouter >
            {/*<AdminView/>*/}

            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/admin"} element={<AdminView/>}>
                    <Route path={"user"} element={<UserView/>}/>
                    <Route path={"item"} element={<ItemView/>}/>
                    <Route path={"add-item"} element={<AddItem/>}/>
                    <Route path={"add-user"} element={<Adduser/>}/>
                    <Route path={"cart"} element={<CheackOutView/>}/>
                </Route>
            </Routes>

        </BrowserRouter>



        {/*<Login/>*/}
        {/*<div className={"w-full h-screen flex flex-col justify-center items-center bg-green-200"}>*/}
        {/*</div>*/}

    </>
  )
}

export default App
