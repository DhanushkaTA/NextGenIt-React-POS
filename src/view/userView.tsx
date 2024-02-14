import {CiCirclePlus, CiEdit, CiFilter, CiTrash} from "react-icons/ci";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

function UserView(){
    return (
        <section className={"w-full min-h-[100%] bg-white flex flex-col items-center"}>

            <div className={" w-full h-max px-2 py-1"}>
                <label className={"font-Euclid text-2xl"}>
                    User
                </label>
            </div>

            <div className={"w-full h-max flex flex-row justify-between items-center px-2"}>

                <div className={""}>
                    <CiFilter size={20}/>
                </div>

                <button className={"px-3 py-2 bg-[#4455EF] hover:bg-[#2355FF] text-white font-Euclid flex flex-row items-center cursor-pointer rounded-md"}>
                    <CiCirclePlus size={20} className={"mr-2"}/>

                    <span>Add User</span>
                </button>

            </div>

            <div className={"flex-1 w-full  p-3"}>

                <div className={"scroll-bar border border-gray-200 rounded-[5px] h-[504px] min-w-[503px] overflow-auto z-[20000]"}>


                    <table id={"userTable"} className={"w-full font-Euclid text-[12px] rounded-md bg-gray-100 border-collapse overflow-auto min-w-[503px]"}>

                        <thead className={"w-full bg-amber-200 rounded-t-md  min-h-5 sticky top-0 left-0"}>
                        <tr className={""}>
                            {/*<th className={"w-[30%]"}>USER</th>*/}
                            {/*<th className={"w-[10%]"}>ROLE</th>*/}
                            {/*<th className={"w-[25%]"}>EMAIL</th>*/}
                            {/*<th className={"w-[25%]"}>CONTACT</th>*/}
                            {/*<th className={"w-[10%]"}>OPTION</th>*/}
                            <th className={"py-2 pl-2 text-left"}>USER</th>
                            <th className={"py-2 text-left"}>ROLE</th>
                            <th className={"py-2 text-left"}>EMAIL</th>
                            <th className={"py-2 text-left"}>CONTACT</th>
                            <th className={"py-2 text-left"}>ACTION</th>
                        </tr>
                        </thead>

                        <tbody className={"mt-3"}>
                        <tr className={"bg-white"}>
                            <td className={"flex flex-row items-center border-b"}>
                                <div>
                                    <img
                                        src={"src/assets/images/people/3.jpg"}
                                        className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                        alt={"user"}
                                        title={"profile photo"}
                                    />
                                </div>
                                <div className={"flex flex-col items-center"}>
                                    <strong className={"text-[13px]"}>Sithara Rathnayaka</strong>
                                    <label>Sithara@120</label>
                                </div>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                {/*<label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>*/}
                                <label className={"text-white bg-[#DCAE3C] py-1 px-2 rounded-md"}>Reception</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>sithara99@gmail.com</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>0702037168</label>
                            </td>

                            <td className={" w-[10%] border-b"}>
                                <button
                                    className={"p-1 border border-black rounded-[6px] group hover:border-[#2355FF] mr-3"}>
                                    <CiEdit size={18} className={"group-hover:text-[#2355FF] "}/>
                                </button>

                                <button className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}>
                                    {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                    <CiTrash size={18} className={"text-red-600"}/>
                                </button>
                            </td>
                        </tr>

                        <tr className={"bg-white"}>
                            <td className={"flex flex-row items-center border-b"}>
                                <div>
                                    <img
                                        src={"src/assets/images/people/3.jpg"}
                                        className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                        alt={"user"}
                                        title={"profile photo"}
                                    />
                                </div>
                                <div className={"flex flex-col items-center"}>
                                    <strong className={"text-[13px]"}>Sithara Rathnayaka</strong>
                                    <label>Sithara@120</label>
                                </div>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                {/*<label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>*/}
                                <label className={"text-white bg-[#DCAE3C] py-1 px-2 rounded-md"}>Reception</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>sithara99@gmail.com</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>0702037168</label>
                            </td>

                            <td className={"w-[10%] border-b"}>
                                <button
                                    className={"p-1 border border-black rounded-[6px] group hover:border-[#2355FF] mr-3"}>
                                    <CiEdit size={18} className={"group-hover:text-[#2355FF]"}/>
                                </button>

                                <button className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}>
                                    {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                    <CiTrash size={18} className={"text-red-600"}/>
                                </button>
                            </td>
                        </tr>

                        <tr className={"bg-white"}>
                            <td className={"flex flex-row items-center border-b"}>
                                <div>
                                    <img
                                        src={"src/assets/images/people/3.jpg"}
                                        className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                        alt={"user"}
                                        title={"profile photo"}
                                    />
                                </div>
                                <div className={"flex flex-col items-center"}>
                                    <strong className={"text-[13px]"}>Sithara Rathnayaka</strong>
                                    <label>Sithara@120</label>
                                </div>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                {/*<label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>*/}
                                <label className={"text-white bg-[#DCAE3C] py-1 px-2 rounded-md"}>Reception</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>sithara99@gmail.com</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>0702037168</label>
                            </td>

                            <td className={"w-[10%] border-b"}>
                                <button
                                    className={"p-1 border border-black rounded-[6px] group hover:border-[#2355FF] mr-3"}>
                                    <CiEdit size={18} className={"group-hover:text-[#2355FF]"}/>
                                </button>

                                <button className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}>
                                    {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                    <CiTrash size={18} className={"text-red-600"}/>
                                </button>
                            </td>
                        </tr>

                        <tr className={"bg-white"}>
                            <td className={"flex flex-row items-center border-b"}>
                                <div>
                                    <img
                                        src={"src/assets/images/people/3.jpg"}
                                        className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                        alt={"user"}
                                        title={"profile photo"}
                                    />
                                </div>
                                <div className={"flex flex-col items-center"}>
                                    <strong className={"text-[13px]"}>Sithara Rathnayaka</strong>
                                    <label>Sithara@120</label>
                                </div>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                {/*<label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>*/}
                                <label className={"text-white bg-[#DCAE3C] py-1 px-2 rounded-md"}>Reception</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>sithara99@gmail.com</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>0702037168</label>
                            </td>

                            <td className={"relative w-[10%] border-b"}>
                                <button
                                    className={"p-1 border border-black rounded-[6px] group hover:border-[#2355FF] mr-3"}>
                                    <CiEdit size={18} className={"group-hover:text-[#2355FF]"}/>
                                </button>

                                <button className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}>
                                    {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                    <CiTrash size={18} className={"text-red-600"}/>
                                </button>
                            </td>
                        </tr>

                        <tr className={"bg-white"}>
                            <td className={"flex flex-row items-center border-b"}>
                                <div>
                                    <img
                                        src={"src/assets/images/people/3.jpg"}
                                        className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                        alt={"user"}
                                        title={"profile photo"}
                                    />
                                </div>
                                <div className={"flex flex-col items-center"}>
                                    <strong className={"text-[13px]"}>Sithara Rathnayaka</strong>
                                    <label>Sithara@120</label>
                                </div>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                {/*<label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>*/}
                                <label className={"text-white bg-[#DCAE3C] py-1 px-2 rounded-md"}>Reception</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>sithara99@gmail.com</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>0702037168</label>
                            </td>

                            <td className={"relative w-[10%] border-b"}>
                                <button
                                    className={"p-1 border border-black rounded-[6px] group hover:border-[#2355FF] mr-3"}>
                                    <CiEdit size={18} className={"group-hover:text-[#2355FF]"}/>
                                </button>

                                <button className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}>
                                    {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                    <CiTrash size={18} className={"text-red-600"}/>
                                </button>
                            </td>
                        </tr>

                        <tr className={"bg-white"}>
                            <td className={"flex flex-row items-center border-b"}>
                                <div>
                                    <img
                                        src={"src/assets/images/people/2.jpg"}
                                        className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                        alt={"user"}
                                        title={"profile photo"}
                                    />
                                </div>
                                <div className={"flex flex-col items-center"}>
                                    <strong className={"text-[13px]"}>Sithara Rathnayaka</strong>
                                    <label>Sithara@120</label>
                                </div>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                {/*<label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>*/}
                                <label className={"text-white bg-[#DCAE3C] py-1 px-2 rounded-md"}>Reception</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>sithara99@gmail.com</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>0702037168</label>
                            </td>

                            <td className={"relative w-[10%] border-b"}>
                                <button
                                    className={"p-1 border border-black rounded-[6px] group hover:border-[#2355FF] mr-3"}>
                                    <CiEdit size={18} className={"group-hover:text-[#2355FF]"}/>
                                </button>

                                <button className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}>
                                    {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                    <CiTrash size={18} className={"text-red-600"}/>
                                </button>
                            </td>
                        </tr>

                        <tr className={"bg-white"}>
                            <td className={"flex flex-row items-center border-b"}>
                                <div>
                                    <img
                                        src={"src/assets/images/people/1.jpg"}
                                        className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                        alt={"user"}
                                        title={"profile photo"}
                                    />
                                </div>
                                <div className={"flex flex-col items-center"}>
                                    <strong className={"text-[13px]"}>Sithara Rathnayaka</strong>
                                    <label>Sithara@120</label>
                                </div>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>
                                {/*<label className={"text-white bg-[#DCAE3C] py-1 px-2 rounded-md"}>Reception</label>*/}
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>sithara99@gmail.com</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>0702037168</label>
                            </td>

                            <td className={"relative w-[10%] border-b"}>
                                <button
                                    className={"p-1 border border-black rounded-[6px] group hover:border-[#2355FF] mr-3"}>
                                    <CiEdit size={18} className={"group-hover:text-[#2355FF]"}/>
                                </button>

                                <button className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}>
                                    {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                    <CiTrash size={18} className={"text-red-600"}/>
                                </button>
                            </td>
                        </tr>

                        <tr className={"bg-white"}>
                            <td className={"flex flex-row items-center border-b"}>
                                <div>
                                    <img
                                        src={"src/assets/images/people/1.jpg"}
                                        className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                        alt={"user"}
                                        title={"profile photo"}
                                    />
                                </div>
                                <div className={"flex flex-col items-center"}>
                                    <strong className={"text-[13px]"}>Sithara Rathnayaka</strong>
                                    <label>Sithara@120</label>
                                </div>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>
                                {/*<label className={"text-white bg-[#DCAE3C] py-1 px-2 rounded-md"}>Reception</label>*/}
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>sithara99@gmail.com</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>0702037168</label>
                            </td>

                            <td className={"relative w-[10%] border-b"}>
                                <button
                                    className={"p-1 border border-black rounded-[6px] group hover:border-[#2355FF] mr-3"}>
                                    <CiEdit size={18} className={"group-hover:text-[#2355FF]"}/>
                                </button>

                                <button className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}>
                                    {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                    <CiTrash size={18} className={"text-red-600"}/>
                                </button>
                            </td>
                        </tr>

                        <tr className={"bg-white"}>
                            <td className={"flex flex-row items-center border-b"}>
                                <div>
                                    <img
                                        src={"src/assets/images/people/1.jpg"}
                                        className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                        alt={"user"}
                                        title={"profile photo"}
                                    />
                                </div>
                                <div className={"flex flex-col items-center"}>
                                    <strong className={"text-[13px]"}>Sithara Rathnayaka</strong>
                                    <label>Sithara@120</label>
                                </div>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>
                                {/*<label className={"text-white bg-[#DCAE3C] py-1 px-2 rounded-md"}>Reception</label>*/}
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>sithara99@gmail.com</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>0702037168</label>
                            </td>

                            <td className={"relative w-[10%] border-b"}>
                                <button
                                    className={"p-1 border border-black rounded-[6px] group hover:border-[#2355FF] mr-3"}>
                                    <CiEdit size={18} className={"group-hover:text-[#2355FF]"}/>
                                </button>

                                <button className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}>
                                    {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                    <CiTrash size={18} className={"text-red-600"}/>
                                </button>
                            </td>
                        </tr>

                        <tr className={"bg-white"}>
                            <td className={"flex flex-row items-center border-b"}>
                                <div>
                                    <img
                                        src={"src/assets/images/people/1.jpg"}
                                        className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                        alt={"user"}
                                        title={"profile photo"}
                                    />
                                </div>
                                <div className={"flex flex-col items-center"}>
                                    <strong className={"text-[13px]"}>Sithara Rathnayaka</strong>
                                    <label>Sithara@120</label>
                                </div>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>
                                {/*<label className={"text-white bg-[#DCAE3C] py-1 px-2 rounded-md"}>Reception</label>*/}
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>sithara99@gmail.com</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>0702037168</label>
                            </td>

                            <td className={"relative w-[10%] border-b"}>
                                <button
                                    className={"p-1 border border-black rounded-[6px] group hover:border-[#2355FF] mr-3"}>
                                    <CiEdit size={18} className={"group-hover:text-[#2355FF]"}/>
                                </button>

                                <button className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}>
                                    {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                    <CiTrash size={18} className={"text-red-600"}/>
                                </button>
                            </td>
                        </tr>

                        <tr className={"bg-white"}>
                            <td className={"flex flex-row items-center border-b"}>
                                <div>
                                    <img
                                        src={"src/assets/images/people/1.jpg"}
                                        className={"w-11 h-11 object-fill bg-center bg-cover rounded-[100%] mr-3"}
                                        alt={"user"}
                                        title={"profile photo"}
                                    />
                                </div>
                                <div className={"flex flex-col items-center"}>
                                    <strong className={"text-[13px]"}>Sithara Rathnayaka</strong>
                                    <label>Sithara@120</label>
                                </div>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label className={"text-white bg-[#11F033] py-1 px-2 rounded-md"}>Admin</label>
                                {/*<label className={"text-white bg-[#DCAE3C] py-1 px-2 rounded-md"}>Reception</label>*/}
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>sithara99@gmail.com</label>
                            </td>

                            <td className={"font-medium text-[13px] border-b"}>
                                <label>0702037168</label>
                            </td>

                            <td className={"relative w-[10%] border-b"}>
                                <button
                                    className={"p-1 border border-black rounded-[6px] group hover:border-[#2355FF] mr-3"}>
                                    <CiEdit size={18} className={"group-hover:text-[#2355FF]"}/>
                                </button>

                                <button className={"p-1 border rounded-[6px] group border-red-600 hover:bg-[#F4EBEF]"}>
                                    {/*<CiTrash size={18} className={"group-hover:text-red-600"}/>*/}
                                    <CiTrash size={18} className={"text-red-600"}/>
                                </button>
                            </td>
                        </tr>


                        </tbody>
                    </table>


                </div>

                <div
                    className={"font-Euclid text-sm w-full flex flex-row justify-between items-center bg-[#F9F9F9] p-3 rounded-b"}>

                    <div>
                        <label className={"mr-2"}>Show</label>
                        <select id="recodeLimit"
                                className={"p-1 w-60px] h-[30px] text-center border border-gray-600 rounded"} required>
                            <option disabled selected>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                        </select>
                    </div>


                    <label>Showing <strong>1</strong> of <strong> 100 </strong> results </label>

                    <div className={"border border-gray-600 flex flex-row items-center justify-center"}>
                        <button id={"previewBtn"} className={"p-1 w-[30px] h-[30px] flex-center hover:bg-gray-200"}>
                            <IoIosArrowBack/></button>
                        <input id={"pageNumTxt"} type={"text"}
                               className={"p-1 w-[30px] h-[30px] border-x border-gray-600 text-center"}/>
                        <button id={"nextBtn"} className={"p-1 w-[30px] h-[30px] flex-center hover:bg-gray-200"}>
                            <IoIosArrowForward/></button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default UserView;