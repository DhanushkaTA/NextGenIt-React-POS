// import {FcReddit} from "react-icons/fc";
import {useEffect} from "react";

interface Props {
    id:string,
    type:string,
    placeholder?:string,
    label:string,
    required: boolean,
    icon?:any,
    callBack: Function;
}

function Input(props:Props){

    useEffect(() => {
        if (props.icon){
            // @ts-ignore
            document.getElementById(props.id).style.paddingLeft="40px"

        }
    }, []);

    return (
        <div className={"flex flex-col w-full font-Poppins"}>
            <label htmlFor={props.id}
            className={"w-full text-[12px] font-medium text-[#2e2e2e]"}>
                {props.label} {props.required ? <span className="text-red-700">*</span> : null}
            </label>

            <div id={"input-container"} className={"relative grayscale hover:grayscale-0"}>
                <input
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={event => props.callBack(event, props.id)}
                    className={"color w-full h-[40px] outline-none text-[14px] border border-[#aaa] my-[8px] px-[15px] " +
                        " rounded focus:drop-shadow-4"} />

                <div id={"icon-container"} className={"text-2xl absolute top-4 left-2 bottom-0 "}>
                    {props.icon}
                </div>
            </div>
        </div>
    )
}

export default Input;