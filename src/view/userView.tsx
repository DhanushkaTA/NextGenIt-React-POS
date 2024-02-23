import {CiCirclePlus, CiEdit, CiFilter, CiTrash} from "react-icons/ci";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {useEffect, useRef, useState} from "react";
import Model from "../components/model/model.tsx";
import axios from "axios";
// import login from "./login.tsx";

interface Data{
    _id:string,
    username: string,
    fullName: string,
    email: string,
    phoneNumber: number,
    password: string,
    role: string,
    proPic: string
}

function UserView(){

    const [open, setOpen] = useState(false)
    const [deleteId, setDeleteId] = useState("")
    const [pageNumber, setPageNumber] = useState(1)
    const [recodeCount, setRecodeCount] = useState(10)
    const [dataArray, setDataArray] = useState<Data[]>([]);
    const [totalPages, setTotalPages] = useState()
    const [nextBtn, setNextBtn] = useState<boolean>(false)
    const [backBtn, setBackBtn] = useState(true)

    const inputRef = useRef(null);

    useEffect(() => {
        getAllUsers()
        // @ts-ignore
        inputRef.current.value=pageNumber
    }, []);

    useEffect(() => {

        if(pageNumber === totalPages){
            setNextBtn(true)
        }else {
            setNextBtn(false)
        }

        if (pageNumber != 1){
            setBackBtn(false)
        }else {
            setBackBtn(true)
        }

        getAllUsers()

        // @ts-ignore
        inputRef.current.value=pageNumber
    }, [pageNumber, recodeCount]);

    function getAllUsers(){
        const config = {
            headers: {
                'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YTgwMjg0NTcyMjYxYzMzY2Q2MjkwYyIsInVzZXJuYW1lIjoiVGhhcmluZHVAMTAyIiwiZnVsbE5hbWUiOiJUaGFyaW5kdSBEaGFudXNoa2EiLCJlbWFpbCI6ImRoYW51OTA5YWJAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOjcwMjAzNzE2OCwicGFzc3dvcmQiOiIiLCJyb2xlIjoiYWRtaW4iLCJwcm9QaWMiOiJwcm9QaWMiLCJfX3YiOjB9LCJpYXQiOjE3MDg2NjQ1MDMsImV4cCI6MTcwOTI2OTMwM30.E_TtU3UT4oP41Dhh9mfszv3pf9bTF4Lon-QDIrT4MsE',
                'Content-Type': 'application/json'
            }
        };

        axios.get(`http://localhost:9000/user/get/all?size=${recodeCount}&page=${pageNumber}`,config)
            .then(response => {
                console.log(response.data)
                setDataArray(response.data.data)
                setTotalPages(response.data.totalPages)
            }).catch(error => {
            console.log(error)
        })
    }

    function handleDeleteUser(){
        // alert("Delete "+deleteId)

        const config = {
            headers: {
                'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YTgwMjg0NTcyMjYxYzMzY2Q2MjkwYyIsInVzZXJuYW1lIjoiVGhhcmluZHVAMTAyIiwiZnVsbE5hbWUiOiJUaGFyaW5kdSBEaGFudXNoa2EiLCJlbWFpbCI6ImRoYW51OTA5YWJAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOjcwMjAzNzE2OCwicGFzc3dvcmQiOiIiLCJyb2xlIjoiYWRtaW4iLCJwcm9QaWMiOiJwcm9QaWMiLCJfX3YiOjB9LCJpYXQiOjE3MDg2NjQ1MDMsImV4cCI6MTcwOTI2OTMwM30.E_TtU3UT4oP41Dhh9mfszv3pf9bTF4Lon-QDIrT4MsE',
            }
        };

        axios.delete(`http://localhost:9000/user/delete?id=${deleteId}`,config)
            .then(response => {
                alert(response.data.message)
                getAllUsers()
            })
            .catch(error => {
                alert(error)
            })

        setOpen(false)
        setDeleteId("")
    }

    function clickDeleteBtn(id:string){
        setDeleteId(id)
        setOpen(true)
    }

    function selectRecodCount(e:any){
        setRecodeCount(e.target.value)
    }

    return (
        <section className={"w-full min-h-[100%] bg-white flex flex-col items-center"}>

            <div className={" w-full h-max px-2 "}>
                <label className={"font-Euclid text-2xl"}>
                    User
                </label>
            </div>

            <div className={"w-full h-max flex flex-row justify-between items-center px-2"}>

                <div className={""}>
                    <CiFilter size={20}/>
                </div>

                <button onClick={() => setOpen(true)} className={"px-3 py-2 bg-[#4455EF] hover:bg-[#2355FF] text-white font-Euclid flex flex-row items-center cursor-pointer rounded-md"}>
                    <CiCirclePlus size={20} className={"mr-2"}/>

                    <span>Add User</span>
                </button>

                <Model open={open} onClose={() => setOpen(false)}>
                    <button className="btn btn-danger w-full" onClick={() => handleDeleteUser()}>Delete</button>
                    <button className="btn btn-light w-full" onClick={() => setOpen(false)}>Cancel</button>
                </Model>
            </div>

            <div className={"flex-1 w-full  px-3 pt-2 pb-2"}>

                <div
                    className={"scroll-bar border border-gray-200 rounded-[5px] h-[504px] min-w-[503px] overflow-auto z-[20000]"}>


                    <table id={"userTable"} className={"w-full font-Euclid text-[12px] rounded-md bg-gray-100 border-collapse overflow-auto min-w-[503px]"}>

                        <thead className={"w-full bg-amber-200 rounded-t-md  min-h-5 sticky top-0 left-0"}>
                        <tr className={""}>
                            <th className={"py-2 pl-2 text-left"}>USER</th>
                            <th className={"py-2 text-left"}>ROLE</th>
                            <th className={"py-2 text-left"}>EMAIL</th>
                            <th className={"py-2 text-left"}>CONTACT</th>
                            <th className={"py-2 text-left"}>ACTION</th>
                        </tr>
                        </thead>

                        <tbody className={"mt-3"}>

                        {

                            dataArray.map(value => {

                                return <tr className={"bg-white"}>
                                        <td className={"flex flex-row items-center border-b"}>
                                            <div>
                                                <img
                                                    src={"http://localhost:9000/images/" + value.proPic}
                                                    className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                                    alt={"user"}
                                                    title={"profile photo"}
                                                />
                                            </div>
                                            <div className={"flex flex-col items-center"}>
                                                <strong className={"text-[13px]"}>{value.fullName}</strong>
                                                <label>{value.username}</label>
                                            </div>
                                        </td>

                                        <td className={"font-medium text-[13px] border-b"}>
                                            {/*<label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>*/}
                                            <label
                                                className={`text-white 
                                                ${(value.role === 'admin' || value.role === 'Admin') ? 
                                                    "bg-[#11F033]" : "bg-[#DCAE3C]"}
                                                py-1 px-2 rounded-md`}>
                                                {value.role}
                                            </label>
                                        </td>

                                        <td className={"font-medium text-[13px] border-b"}>
                                            <label>{value.email}</label>
                                        </td>

                                        <td className={"font-medium text-[13px] border-b"}>
                                            <label>{value.phoneNumber}</label>
                                        </td>

                                        <td className={" w-[10%] border-b"}>
                                            <button
                                                className={"p-1 border border-black rounded-[6px] group" +
                                                    " hover:border-[#2355FF] mr-3"}>
                                                <CiEdit size={18} className={"group-hover:text-[#2355FF] "}/>
                                            </button>

                                            <button
                                                className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}
                                                onClick={() => clickDeleteBtn(value._id)}>
                                                {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                                <CiTrash size={18} className={"text-red-600"}/>
                                            </button>
                                        </td>
                                </tr>
                            })

                        }


                        </tbody>
                    </table>
                </div>

                <div
                    className={"font-Euclid text-sm w-full flex flex-row justify-between items-center bg-[#F9F9F9] p-3 rounded-b"}>

                    <div>
                        <label className={"mr-2"}>Show</label>
                        <select id="recodeLimit"
                                className={"p-1 w-60px] h-[30px] text-center border border-gray-600 rounded outline-none"}
                                onChange={() => selectRecodCount(event)}>
                            <option value={10} selected>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </div>


                    <label>Showing <strong>1</strong> of <strong> {totalPages} </strong> results </label>

                    <div className={" flex flex-row items-center justify-center"} >
                        <button id={"previewBtn"}
                                className={`p-1 w-[30px] h-[30px] mr-3 rounded-[50%] flex-center hover:bg-gray-200 
                                ${pageNumber === 1 ? "cursor-not-allowed opacity-35" : "cursor-pointer opacity-100"}`}
                                onClick={() => setPageNumber(value => value-1)}
                                disabled={backBtn}>
                            <IoIosArrowBack/>
                        </button>

                        <input ref={inputRef} id={"pageNumTxt"} type={"text"}
                               className={"p-1 w-[30px] h-[30px] rounded-md border border-gray-600 text-center outline-none"}/>

                        <button id={"nextBtn"}
                                className={`p-1 w-[30px] h-[30px] ml-3 rounded-[50%] flex-center hover:bg-gray-200 
                                ${pageNumber===totalPages ? "cursor-not-allowed opacity-35" : "cursor-pointer opacity-100"}`}
                                onClick={() => setPageNumber(value => value+1)}
                                disabled={nextBtn}>
                            <IoIosArrowForward/>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default UserView;