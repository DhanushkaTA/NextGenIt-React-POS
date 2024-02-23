// import Card from "../components/card/card.tsx";

import {CiCirclePlus, CiFilter} from "react-icons/ci";
// import Model from "../components/model/model.tsx";
import Combobox from "../components/combobox/combobox.tsx";
import {useState} from "react";

function ItemView() {

    const [brand, setBrand] = useState<string>("")
    const [category, setCategory] = useState<string>("")

    const list:any[]=[
        {text:"All"},
        {text:"Msi", icon:"src/assets/images/logo/brand/MSI.png"},
        {text:"Razer", icon:"src/assets/images/logo/brand/Razer_Logo.png" },
        {text:"Rog", icon:"src/assets/images/logo/brand/rog_logo.png"}]

    function cmbBoxStates(value:string,id:string){

        switch (id){
            case 'brands':
                setBrand(value)
                break;
            case 'category':
                setCategory(value)
                break;
        }

    }

    function print(){
        console.log(brand+" : "+category)
    }

    return(
        <section className={"w-full min-h-[100%] bg-white flex flex-col items-center rounded-md"}>

            <div className={" w-full h-max px-2 "}>
                <label className={"font-Euclid text-2xl"}>
                    Item
                </label>
            </div>

            {/*--------------------------------------------------------------------------------------*/}

            <div className={"w-full h-max flex flex-row justify-between items-center px-2 border"}>

                <div className={"flex flex-row"}>
                    <CiFilter size={20}/>

                    <Combobox id={'brands'}
                              placeholder={"Select brand"}
                              label={"Select Brand"}
                              callBack={cmbBoxStates}
                              onlyIcon={true}
                              item={list}/>

                    <Combobox id={'category'}
                              placeholder={"Select Option"}
                              label={"Select Option"}
                              callBack={cmbBoxStates}
                              onlyIcon={false}
                              item={[{text:"All"},{text:"Laptop"},{text:"Keyboard"},{text:"Mouse"}]}/>
                </div>

                <button
                        onClick={print}
                        className={"px-3 py-2 bg-[#4455EF] hover:bg-[#2355FF] text-white font-Euclid" +
                            " flex flex-row items-center cursor-pointer rounded-md"}>
                    <CiCirclePlus size={20} className={"mr-2"}/>

                    <span>Add Item</span>
                </button>

                {/*<Model open={open} onClose={() => setOpen(false)}>*/}
                {/*    <button className="btn btn-danger w-full" onClick={() => handleDeleteUser()}>Delete</button>*/}
                {/*    <button className="btn btn-light w-full" onClick={() => setOpen(false)}>Cancel</button>*/}
                {/*</Model>*/}
            </div>

        </section>
    )
}

export default ItemView;