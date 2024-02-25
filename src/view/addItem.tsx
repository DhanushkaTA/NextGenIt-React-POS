import {AiOutlineSwapRight} from "react-icons/ai";

function AddItem(){

    return (
        <section className={"bg-transparent w-full min-h-full flex flex-col"}>

            <h1 className={"text-3xl font-[500] w-full font-Poppins"}>
                Add new item
            </h1>

            <div className={"pt-2 text-[14px] font-[500] w-full flex flex-row"}>
                <a className={"mr-2 text-gray-800 flex flex-row justify-center items-center"}>Dashboard <AiOutlineSwapRight
                    className={"mx-2"}/></a>
                <a className={"mr-2 text-gray-800 flex flex-row justify-center items-center"}>Item <AiOutlineSwapRight
                    className={"mx-2"}/></a>
                <a className={"mr-2 text-gray-500"}>New Item</a>
            </div>


            <main
                className={"w-full lg:flex-1 h-max gap-10 lg:gap-5 flex mt-5 flex-col lg:flex-row justify-around items-center lg:items-start "}>



            </main>

        </section>
)

}

export default AddItem;