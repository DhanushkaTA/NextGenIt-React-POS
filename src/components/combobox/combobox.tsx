import { CgChevronDown } from "react-icons/cg";
import {useEffect, useState} from "react";

interface Item{
    text:string,
    icon?:any
}

interface Props {
    id:string,
    placeholder?:string,
    label?:string,
    item:Item[],
    callBack: Function;
}

function Combobox(props:Props) {

    const [isDown, setIsDown] = useState<boolean>(true)

    const [placeholder, setPlaceholder] = useState<string | undefined>(undefined)

    useEffect(() => {
        props.label ?
            setPlaceholder(props.item[0].text) : setPlaceholder(props.placeholder)
    }, []);

    // notify parent component about new value
    useEffect(() => {
        console.log(placeholder)

        // props.callBack(placeholder,props.id)
    }, [placeholder]);

    function clickFun(text:string){
        setPlaceholder(text)
        setIsDown(true)
    }

    return(
        <div
            id={props.id}
            className={" font-Euclid cursor-pointer my-1 relative"}>
            <label className={`flex flex-col w-full font-Euclid mb-[2px] flex-wrap 
            text-[12px] font-medium text-[#2e2e2e]
            ${props.label ? "block" : "hidden"}`}>
                {props.label}
            </label>

            {/*-------------------------------------------------------------------------*/}

            <div
                onClick={() => setIsDown(value => !value)}
                className={"min-w-[230px] border rounded-md shadow drop-shadow-4" +
                " flex flex-row items-center justify-between h-[45px] p-5 font-[400]"}>
                <span>{placeholder}</span>
                <CgChevronDown
                    className={`${isDown ? null : "rotate-180"} transition-all`}/>
            </div>

            <ul
                className={`absolute w-full bg-white shadow rounded-md mt-3 
                            ${isDown ? "h-0" : "h-fit p-4 "} transition-all`}>

                {
                    props.item.map(value => {

                        return <li
                            id={value.text}
                            onClick={() => clickFun(value.text)}
                            onClickCapture={() => props.callBack(value.text,props.id)}
                            className={`relative flex flex-row items-center h-[45px] cursor-pointer  
                                        bg-white rounded-md px-2 hover:bg-[#F2F2F2] ${isDown ? "hidden" : "block"}`}>
                            <span className={`text-[14px]`}>{value.text}</span>
                        </li>

                    })
                }
            </ul>

        </div>
    )
}

export default Combobox;