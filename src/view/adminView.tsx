import SidebarContext from "../context/contexts.ts";
import Sidebar from "../components/sidebar/sidebar.tsx";
import SidebarItem from "../components/sidebarItems/sidebarItem.tsx";
import Header from "../components/header/header.tsx";
import {useEffect, useState} from "react";
import {FiCpu} from "react-icons/fi";
import {CiAlignBottom, CiGrid42, CiMicrochip, CiPenpot, CiShop, CiUser, CiViewList} from "react-icons/ci";
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
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [proPic, setProPic] = useState("")

    const [dashboardActive, setDashboardActive] = useState<boolean>(true)
    const [userActive, setUserActive] = useState<boolean>(false)
    const [itemActive, setItemActive] = useState<boolean>(false)
    const [addOrderActive, setAddOrderActive] = useState(false)
    const [orderActive, setOrderActive] = useState(false)
    const [loginActive, setLoginActive] = useState(false)

    useEffect(() => {
        //@ts-ignore
        let user: string = Cookies.get('user');
        setUsername(JSON.parse(user).username)
        setEmail(JSON.parse(user).email)
        setProPic(JSON.parse(user).proPic)
    }, []);

    function handleSidebar(){
        setExpanded(value => !value)
    }

    const toggleClass = (text:string) => {
        setFalseAll()
        switch (true){
            case "Dashboard":
                setDashboardActive(true)
                break;
            case "Manage Users":
                setUserActive(true);
                break;
            case "Manage Items":
                setItemActive(true)
                break;
            case "Login Details":
                setLoginActive(true)
                break;
            case "Place Order":
                setAddOrderActive(true)
                break;
            case "Manage Orders":
                setOrderActive(true)
        }
    };

    const setFalseAll = () => {
        setDashboardActive(false)
        setUserActive(false);
        setItemActive(false)
        setLoginActive(false)
        setAddOrderActive(false)
        setOrderActive(false)
    }

    return (
        <>
            {/*<Login/>*/}
            {/*<div className={"w-full h-screen flex flex-col justify-center items-center bg-green-200"}>*/}
            {/*</div>*/}

            <section className={"flex flex-row"}>

                <SidebarContext.Provider value={expanded}>

                    <aside className={"w-max"}>
                        <Sidebar
                            email={email}
                            children={
                            [
                                <SidebarItem
                                    key={'1'}
                                    text={"Dashboard"}
                                    // icon={<BiSolidDashboard size={20}/>}
                                    icon={<CiGrid42 size={20}/>}
                                    navigate={"admin-dash"}
                                    active={dashboardActive}
                                    callBack={toggleClass}
                                />,

                                <SidebarItem
                                    key={'2'}
                                    text={"Manage Users"}
                                    // icon={<BiSolidGroup size={20}/>}
                                    // icon={<FiUsers size={20}/>}
                                    icon={<CiUser size={20}/>}
                                    active={userActive}
                                    navigate={"user"}
                                    callBack={toggleClass}
                                />,

                                <SidebarItem
                                    key={'3'}
                                    icon={<CiMicrochip size={20}/>}
                                    text={"Manage Items"}
                                    navigate={"item"}
                                    active={itemActive}
                                    callBack={toggleClass}
                                />,

                                // <SidebarItem
                                //     key={'4'}
                                //     text={"Add Item"}
                                //     // icon={<BiSolidPieChartAlt2 size={20}/>}
                                //     // icon={<CiWavePulse1 size={20}/>}
                                //     icon={<CiAlignBottom  size={20}/>}
                                //     navigate={"add-item"}
                                // />,
                                //
                                // // <SidebarItem icon={<FiSlack size={20}/>} text={"Items"}/>,
                                //
                                // <SidebarItem
                                //     key={'5'}
                                //     icon={<FiCpu size={20}/>}
                                //     text={"Add User"}
                                //     navigate={"add-user"}
                                // />,

                                <SidebarItem
                                    key={'6'}
                                    icon={<CiViewList size={22}/>}
                                    text={"Login Details"}
                                    navigate={"login"}
                                    active={loginActive}
                                    callBack={toggleClass}
                                />,

                                <SidebarItem
                                    key={'7'}
                                    icon={<CiShop size={23}/>}
                                    text={"Place Order"}
                                    navigate={"cart"}
                                    active={addOrderActive}
                                    callBack={toggleClass}
                                />,

                                <SidebarItem
                                    key={'8'}
                                    icon={<CiPenpot size={22}/>}
                                    text={"Manage Orders"}
                                    navigate={"order"}
                                    active={orderActive}
                                    callBack={toggleClass}
                                />
                            ]
                        }/>
                    </aside>

                </SidebarContext.Provider>


                <main id={"main-content"} className={"flex-1 flex flex-col"}>

                    <Header
                        username={`${username}`}
                        email={`${email}`}
                        proPic={`${proPic}`}
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