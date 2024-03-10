import SidebarContext from "../context/contexts.ts";
import Sidebar from "../components/sidebar/sidebar.tsx";
import SidebarItem from "../components/sidebarItems/sidebarItem.tsx";
import Header from "../components/header/header.tsx";
import {useState} from "react";
import {FiCpu} from "react-icons/fi";
import {CiAlignBottom, CiGrid42, CiMicrochip, CiUser} from "react-icons/ci";
import Cookies from 'js-cookie'

// import CheackOutView from "./cheackOutView.tsx";
//
// import UserView from "./userView.tsx";
// import Adduser from "./adduser.tsx";
// import ItemView from "./itemView.tsx";
// import AddItem from "./addItem.tsx";
// import Card from "../components/card/card.tsx";
import {Outlet} from "react-router-dom";
// import {BiSolidDashboard, BiSolidGroup, BiSolidPieChartAlt2} from "react-icons/bi";


function AdminView(){

    const [expanded, setExpanded] = useState(true)


    function handleSidebar(){
        setExpanded(value => !value)
    }

    return (
        <>
            {/*<Login/>*/}
            {/*<div className={"w-full h-screen flex flex-col justify-center items-center bg-green-200"}>*/}
            {/*</div>*/}

            <section className={"flex flex-row"}>

                <SidebarContext.Provider value={expanded}>

                    <aside className={"w-max"}>
                        <Sidebar children={
                            [
                                <SidebarItem
                                    text={"Dashboard"}
                                    // icon={<BiSolidDashboard size={20}/>}
                                    icon={<CiGrid42 size={20}/>}
                                    navigate={"cart"}

                                />,

                                <SidebarItem
                                    text={"User"}
                                    // icon={<BiSolidGroup size={20}/>}
                                    // icon={<FiUsers size={20}/>}
                                    icon={<CiUser size={20}/>}
                                    active
                                    navigate={"user"}
                                />,

                                <SidebarItem
                                    icon={<CiMicrochip size={20}/>}
                                    text={"Items"}
                                    navigate={"item"}
                                />,

                                <SidebarItem
                                    text={"Report/Add Item"}
                                    // icon={<BiSolidPieChartAlt2 size={20}/>}
                                    // icon={<CiWavePulse1 size={20}/>}
                                    icon={<CiAlignBottom  size={20}/>}
                                    navigate={"add-item"}
                                />,

                                // <SidebarItem icon={<FiSlack size={20}/>} text={"Items"}/>,

                                <SidebarItem
                                    icon={<FiCpu size={20}/>}
                                    text={"Add User"}
                                    navigate={"add-user"}
                                />
                            ]
                        }/>
                    </aside>

                </SidebarContext.Provider>


                <main id={"main-content"} className={"flex-1 flex flex-col"}>

                    <Header
                        username={`${JSON.parse(Cookies.get('user')).username}`}
                        email={`${JSON.parse(Cookies.get('user')).email}`}
                        proPic={`${JSON.parse(Cookies.get('user')).proPic}`}
                        callBack={handleSidebar}
                    />

                    {/*------------------------------- Content here ----------------------------------*/}

                    {/*#EDEFEE*/}
                    <section className={"p-3 flex-1 flex justify-center items-center bg-[#F6F8FC]"}>

                        <Outlet/>

                        {/*<Card/>*/}

                        {/*<UserView/>*/}

                        {/*<ItemView/>*/}

                        {/*<Adduser/>*/}

                        {/*<AddItem/>*/}

                        {/*<CheackOutView/>*/}

                        {/*<Routes>*/}
                        {/*    /!*<Route path={"/"} element={<AdminView/>}/>*!/*/}
                        {/*    <Route path={"admin/user"} element={<UserView/>}/>*/}
                        {/*    <Route path={"admin/item"} element={<ItemView/>}/>*/}
                        {/*    <Route path={"admin/add-item"} element={<AddItem/>}/>*/}
                        {/*    <Route path={"admin/add-user"} element={<Adduser/>}/>*/}
                        {/*    <Route path={"admin/cart"} element={<CheackOutView/>}/>*/}
                        {/*    /!*<Route path={"reception/cart"} element={<CheackOutView/>}/>*!/*/}
                        {/*</Routes>*/}

                    </section>



                </main>

            </section>
        </>
    )
}

export default AdminView;