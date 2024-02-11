import './App.css'
// import Card from "./components/card/card.tsx";
// import Login from "./view/login.tsx";
import Sidebar from "./components/sidebar/sidebar.tsx";
import SidebarItem from "./components/sidebarItems/sidebarItem.tsx";
import {
    BiCalendar,
    BiMenu,
    BiSolidChevronDown,
    BiSolidDashboard,
    BiSolidGroup,
    BiSolidPieChartAlt2, BiTimeFive
} from "react-icons/bi";
import Card from "./components/card/card.tsx";
import {useEffect, useState} from "react";
import SidebarContext from "./context/contexts"

function App() {

    const [expanded, setExpanded] = useState(true)

    const [time, setTime] = useState("")
    const [date, setDate] = useState("")

    function setLiveTime() {
        // var d = new Date();
        // var s = d.getSeconds();
        // var m = d.getMinutes();
        // var h = d.getHours();
        // setTime(("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2));
        setTime(new Date().toLocaleTimeString())
    }

    function displayClock(){
        setDate(new Date().toDateString())
    }

    useEffect(() => {
        setInterval(setLiveTime,1000)
        setInterval(displayClock, 1000);
    }, []);

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

                <header className={"h-[8.3%]  py-1 px-4 border-b flex flex-row items-center"}>

                    <div className={"flex-1 font-Euclid flex flex-row items-center"}>

                        <div className={"flex-1"}>
                            <button
                                className={"cursor-pointer p-1 rounded-lg bg-gray-100 hover:bg-gray-200"}
                                onClick={() => setExpanded(value => !value)}>
                                <BiMenu size={22}/>
                            </button>
                        </div>


                        <div className={"flex flex-row"}>
                            <div className={"flex flex-row cursor-pointer p-1 rounded-lg bg-gray-100 mr-3"}>
                                <BiCalendar size={22} className={"mr-1"}/>
                                {date}
                            </div>

                            <div className={"flex flex-row cursor-pointer p-1 rounded-lg bg-gray-100 mr-3"}>
                                <BiTimeFive size={22} className={"mr-1"}/>
                                {time}
                            </div>
                        </div>


                    </div>


                    <div className={"relative h-full w-max flex flex-row items-center justify-between"}>

                        <img
                            src={"src/assets/images/people/3.jpg"}
                            className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                            alt={"user"}
                            title={"profile photo"}
                        />

                        <div className="leading-4 mr-3 font-Euclid sm:block hidden">
                            <h4 className="font-[600]">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>

                        <BiSolidChevronDown className={"cursor-pointer"} size={22}/>

                        {/*<div className={"h-full w-12 bg-[url(src/assets/images/people/1.jpg)] object-fill bg-center bg-cover rounded-[100%]"}>*/}

                        {/*</div>*/}
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
