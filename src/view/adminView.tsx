import SidebarContext from "../context/contexts.ts";
import Sidebar from "../components/sidebar/sidebar.tsx";
import SidebarItem from "../components/sidebarItems/sidebarItem.tsx";
import {BiSolidDashboard, BiSolidGroup, BiSolidPieChartAlt2} from "react-icons/bi";
import Header from "../components/header/header.tsx";
import Card from "../components/card/card.tsx";
import {useState} from "react";


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
                                    icon={<BiSolidDashboard size={20}/>}
                                    active

                                />,

                                <SidebarItem
                                    text={"User"}
                                    icon={<BiSolidGroup size={20}/>}
                                />,

                                <SidebarItem
                                    text={"Chart"}
                                    icon={<BiSolidPieChartAlt2 size={20}/>}
                                    active
                                />
                            ]
                        }/>
                    </aside>

                </SidebarContext.Provider>


                <main id={"main-content"} className={"flex-1 flex flex-col"}>

                    <Header
                        username={"desfewrg"}
                        email={"johndoe@gmail.com"}
                        callBack={handleSidebar}
                    />

                    <section className={" p-3 flex-1 flex justify-center items-center bg-[#EDEFEE]"}>
                        <Card/>
                    </section>


                </main>

            </section>


        </>
    )
}

export default AdminView;