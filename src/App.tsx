import './App.css'
// import Card from "./components/card/card.tsx";
// import Login from "./view/login.tsx";
import Sidebar from "./components/sidebar/sidebar.tsx";
import SidebarItem from "./components/sidebarItems/sidebarItem.tsx";
import {BiSolidDashboard, BiSolidGroup, BiSolidPieChartAlt2} from "react-icons/bi";
import Card from "./components/card/card.tsx";

function App() {

  return (
    <>
        {/*<Login/>*/}
        {/*<div className={"w-full h-screen flex flex-col justify-center items-center bg-green-200"}>*/}


        {/*</div>*/}

        <section className={"flex flex-row"}>

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

            <main id={"main-content"} className={"flex-1 flex flex-col"}>

                <header className={"h-[8%] bg-amber-300 p-1 border-b"}>

                    <div>

                    </div>

                </header>

                <section className={" p-3 flex-1 flex justify-center items-center"}>
                    <Card/>
                </section>




            </main>

        </section>



    </>
  )
}

export default App
