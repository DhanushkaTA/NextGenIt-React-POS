// import {FcReddit} from "react-icons/fc";
import {useEffect, useRef, useState} from "react";

interface Props {
    id:string,
    type:string,
    placeholder?:string,
    label?:string,
    required: boolean,
    icon?:any,
    passBtn?:boolean,
    passIcon_1?:any,
    passIcon_2?:any,
    validate?:boolean,
    message?:string,
    callBack: Function;
}

function Input(props:Props){

    const [passBtnIcon, setPassBtnIcon] = useState<any>(null)
    const [isTextShow, setIsTextShow] = useState(false)
    const inputField = useRef(null);

    useEffect(() => {
        if (props.icon){
            // @ts-ignore
            document.getElementById(props.id).style.paddingLeft="40px"
        }

        if (props.passBtn){
            setPassBtnIcon(props.passIcon_1)
        }

    }, []);


    useEffect(() => {
        if (isTextShow){
            setPassBtnIcon(props.passIcon_2)
            // @ts-ignore
            inputField.current.type="text"
        }else {
            setPassBtnIcon(props.passIcon_1)
            // @ts-ignore
            inputField.current.type= props.type
        }
    }, [isTextShow]);

    return (
        <div className={"flex flex-col w-full font-Euclid mb-[8px] flex-wrap"}>
            <label htmlFor={props.id}
            className={"w-full text-[12px] font-medium text-[#2e2e2e]"}>
                {props.label} {props.required ? <span className="text-red-700">*</span> : null}
            </label>

            <div id={"input-container"} className={`relative ${props.icon ? "grayscale hover:grayscale-0" : "grayscale-0"}`}>
                <input
                    ref={inputField}
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={event => props.callBack(event, props.id)}
                    className={`color w-full h-[40px] outline-none text-[14px] border 
                                ${props.validate ? "border-[#aaa]" : "border-[#F03947]"} mt-[8px] px-[15px] " +
                                " rounded focus:drop-shadow-4 
                        ${props.passBtn ? "pr-[40px]" : "px-[15px]"}`} />

                <div id={"icon-container"} className={"text-2xl absolute top-4 left-2 bottom-0 "}>
                    {props.icon}
                </div>
                {
                    props.passBtn ?
                        <div className={" h-[40px] w-[38px] rounded-r flex justify-center items-center " +
                            "absolute top-2 right-0 bottom-0 cursor-pointer transition-all"}
                             onClick={() => setIsTextShow( value => !value)}>
                            {passBtnIcon}
                        </div>
                            : null

                }
            </div>
            <label
                className={`max-w-full text-[10px] font-medium mt-1 text-[#F03947] 
                ${props.validate ? 'hidden' : "block"}`}>
                {props.message}
            </label>
        </div>
    )
}

export default Input;