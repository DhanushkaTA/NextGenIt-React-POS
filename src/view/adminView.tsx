import SidebarContext from "../context/contexts.ts";
import Sidebar from "../components/sidebar/sidebar.tsx";
import SidebarItem from "../components/sidebarItems/sidebarItem.tsx";
// import UserView from "./userView.tsx";
// import Adduser from "./adduser.tsx";
import ItemView from "./itemView.tsx";
// import {BiSolidDashboard, BiSolidGroup, BiSolidPieChartAlt2} from "react-icons/bi";
import Header from "../components/header/header.tsx";
// import Card from "../components/card/card.tsx";
import {useState} from "react";
import {FiCpu} from "react-icons/fi";
import {CiAlignBottom, CiGrid42, CiMicrochip, CiUser} from "react-icons/ci";


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

                    <aside className={" w-max"}>
                        <Sidebar children={
                            [
                                <SidebarItem
                                    text={"Dashboard"}
                                    // icon={<BiSolidDashboard size={20}/>}
                                    icon={<CiGrid42 size={20}/>}

                                />,

                                <SidebarItem
                                    text={"User"}
                                    // icon={<BiSolidGroup size={20}/>}
                                    // icon={<FiUsers size={20}/>}
                                    icon={<CiUser size={20}/>}
                                    active
                                />,

                                <SidebarItem icon={<CiMicrochip size={20}/>} text={"Items"}/>,

                                <SidebarItem
                                    text={"Report"}
                                    // icon={<BiSolidPieChartAlt2 size={20}/>}
                                    // icon={<CiWavePulse1 size={20}/>}
                                    icon={<CiAlignBottom  size={20}/>}
                                />,

                                // <SidebarItem icon={<FiSlack size={20}/>} text={"Items"}/>,

                                <SidebarItem icon={<FiCpu size={20}/>} text={"Itemss"}/>
                            ]
                        }/>
                    </aside>

                </SidebarContext.Provider>


                <main id={"main-content"} className={"flex-1 flex flex-col"}>

                    <Header
                        username={"username"}
                        email={"johndoe@gmail.com"}
                        callBack={handleSidebar}
                    />

                    {/*------------------------------- Content here ----------------------------------*/}

                    {/*#EDEFEE*/}
                    <section className={"p-3 flex-1 flex justify-center items-center bg-[#F6F8FC]"}>
                        {/*<Card/>*/}

                        {/*<UserView/>*/}

                        <ItemView/>

                        {/*<Adduser/>*/}

                    </section>



                </main>

            </section>
        </>
    )
}

export default AdminView;