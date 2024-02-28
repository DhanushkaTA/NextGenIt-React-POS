import Card from "../components/card/card.tsx";
import Input from "../components/input/input.tsx";
import { CiSearch } from "react-icons/ci";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Combobox from "../components/combobox/combobox.tsx";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

interface BrandData {
    _id:string
    name:string,
    category:string
    image:string
}

interface ItemData{
    _id:string,
    code: string,
    description: string,
    category: string,
    brand: string,
    price: number,
    qty: number;
    warranty: string,
    itemPic: string
}

function CheackOutView(){

    const [brand, setBrand] = useState<string>("All")
    const [category, setCategory] = useState<string>('All')
    const [brandList, setBrandList] = useState<BrandData[]>([])

    const [dataArray, setDataArray] = useState<ItemData[]>([]);

    const [pageNumber, setPageNumber] = useState(1)
    const [recodeCount, setRecodeCount] = useState(10)
    const [totalPages, setTotalPages] = useState()
    const [totalRecodes, setTotalRecodes] = useState()
    const [nextBtn, setNextBtn] = useState<boolean>(false)
    const [backBtn, setBackBtn] = useState(true)

    const inputRef = useRef(null);

    const container1 = useRef(null);
    const container2 = useRef(null);

    const [itemContainerHeight, setItemContainerHeight] = useState(0)

    const list:any[]=[{text:"All"}]

    useEffect(() => {

        // @ts-ignore
        setItemContainerHeight((container1.current.offsetHeight - container2.current.offsetHeight))
        // @ts-ignore
        console.log((container1.current.offsetHeight - container2.current.offsetHeight))
        // @ts-ignore
        console.log(container1.current.offsetHeight)
        // @ts-ignore
        console.log(container2.current.offsetHeight)

        getAllItem()

        // @ts-ignore
        inputRef.current.value=pageNumber
    }, []);

    useEffect(() => {
        brandList.map((value: BrandData) => {
            list.push({text:value.name, icon:`http://localhost:9000/images/${value.image}`})
        })
    }, [brandList,list]);

    useEffect(() => {
        getFiltredBrands();
        getAllItem()
    }, [category,brand]);

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

        getAllItem()

        // @ts-ignore
        inputRef.current.value=pageNumber
    }, [pageNumber, recodeCount]);

    async function getFiltredBrands(){
        const config = {
            headers: {
                'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YTgwMjg0NTcyMjYxYzMzY2Q2MjkwYyIsInVzZXJuYW1lIjoiVGhhcmluZHVAMTAyIiwiZnVsbE5hbWUiOiJUaGFyaW5kdSBEaGFudXNoa2EiLCJlbWFpbCI6ImRoYW51OTA5YWJAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOjcwMjAzNzE2OCwicGFzc3dvcmQiOiIiLCJyb2xlIjoiYWRtaW4iLCJwcm9QaWMiOiJwcm9QaWMiLCJfX3YiOjB9LCJpYXQiOjE3MDg2OTA2MzUsImV4cCI6MTcwOTI5NTQzNX0.4XoyJEzi5zfUQFYB4Yl97p9U9KVrgzQErtXPapDRL3U'
            }
        };

        await axios.get(`http://localhost:9000/brand/get/all?size=-1&page=0&category=${category}`,config)
            .then(response => {

                console.log(response.data.data)

                setBrandList(response.data.data)

            })
            .catch(error => {
                alert(error)
            })
    }

    function getAllItem(){

        const config = {
            headers: {
                'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YTgwMjg0NTcyMjYxYzMzY2Q2MjkwYyIsInVzZXJuYW1lIjoiVGhhcmluZHVAMTAyIiwiZnVsbE5hbWUiOiJUaGFyaW5kdSBEaGFudXNoa2EiLCJlbWFpbCI6ImRoYW51OTA5YWJAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOjcwMjAzNzE2OCwicGFzc3dvcmQiOiIiLCJyb2xlIjoiYWRtaW4iLCJwcm9QaWMiOiJwcm9QaWMiLCJfX3YiOjB9LCJpYXQiOjE3MDg2OTA2MzUsImV4cCI6MTcwOTI5NTQzNX0.4XoyJEzi5zfUQFYB4Yl97p9U9KVrgzQErtXPapDRL3U'
            }
        };

        axios.get(`http://localhost:9000/item/get/all?size=${recodeCount}&page=${pageNumber}&category=${category}&brand=${brand}`,config)
            .then(response => {

                console.log(response.data.data)

                setDataArray(response.data.data)
                setTotalPages(response.data.totalPages)
                setTotalRecodes(response.data.totalRecodes)

            })
            .catch(error => {
                alert(error)
            })

    }

    function handleInput(e:any,name:string){

    }

    function cmbBoxStates(value:string,id:string){

        switch (id){
            case 'brands':
                setBrand(value)
                break;
            case 'category':
                setCategory(value)
                break;
            case 'recodes':
                setRecodeCount(parseInt(value))
        }

    }


    return (
        <section className={"relative w-full h-[100%] flex flex-row items-center rounded-md"}>

            <div ref={container1} className={`w-[75%] h-[100%] bg-[#F9F8FB] px-3 flex flex-col items-center`}>

                <div ref={container2} className={"h-[167px] w-full flex flex-col"}>

                    <div className={"w-full h-max flex flex-row font-Poppins justify-between items-center"}>

                        <strong className={"text-3xl font-[500]"}>Choose Products</strong>

                        <div
                            className={"bg-white w-[25rem] h-[48px] rounded-md flex flex-row items-center justify-between"}>

                            <div className={"w-[90%]"}>
                                <Input
                                    id={"search"}
                                    type={"text"}
                                    placeholder={"Search products here..."}
                                    required={false}
                                    callBack={handleInput}
                                    validate={true}
                                    borderColor={"F76F2B"}
                                    borderRequired={false}

                                />
                            </div>

                            <div className={"flex-1 flex items-center justify-center"}>
                                <CiSearch string={40}/>
                            </div>

                        </div>

                    </div>

                    <div className={"w-max flex flex-row justify-center items-center"}>

                        <div className={"mr-3"}>
                            <Combobox id={'brands'}
                                      placeholder={"Select brand"}
                                      label={"Select Brand"}
                                      callBack={cmbBoxStates}
                                      onlyIcon={true}
                                      item={list}/>
                        </div>

                        <div className={"mr-3"}>
                            <Combobox id={'category'}
                                      placeholder={"Select Option"}
                                      label={"Select Option"}
                                      callBack={cmbBoxStates}
                                      onlyIcon={false}
                                      item={[{text: "All"}, {text: "Laptop"}, {text: "Keyboard"}, {text: "Mouse"}]}/>
                        </div>

                        <div className={"mr-3"}>
                            <Combobox id={'recodes'}
                                      placeholder={"Select Recodes"}
                                      label={"Show Result"}
                                      callBack={cmbBoxStates}
                                      onlyIcon={false}
                                      item={[{text: "5"}, {text: "10"}, {text: "15"}, {text: "100"}]}/>
                        </div>
                    </div>

                    <div className={"mt-3 font-Poppins flex flex-row w-full justify-between items-end"}>

                        <strong className={"text-lg font-[500]"}>All Items</strong>

                        <div className={"flex flex-row items-center justify-center"}>

                            <button id={"previewBtn"}
                                    className={`p-1 w-[30px] h-[30px] mr-3 rounded-[50%] flex-center hover:bg-gray-200 
                                ${pageNumber === 1 ? "cursor-not-allowed opacity-35" : "cursor-pointer opacity-100"}`}
                                    onClick={() => setPageNumber(value => value - 1)}
                                    disabled={backBtn}>
                                <IoIosArrowBack/>
                            </button>

                            <input ref={inputRef} id={"pageNumTxt"} type={"text"}
                                   className={"p-1 w-[30px] h-[30px] rounded-md border border-gray-300 text-center outline-none"}/>

                            <button id={"nextBtn"}
                                    className={`p-1 w-[30px] h-[30px] ml-3 rounded-[50%] flex-center hover:bg-gray-200 
                                ${pageNumber === totalPages ? "cursor-not-allowed opacity-35" : "cursor-pointer opacity-100"}`}
                                    onClick={() => setPageNumber(value => value + 1)}
                                    disabled={nextBtn}>
                                <IoIosArrowForward/>
                            </button>
                        </div>

                        <strong className={"text-sm font-[400] text-gray-400/70"}>{totalRecodes} {category} Results</strong>
                    </div>

                </div>


                <div
                    className={`w-full h-[445px] max-h-[${itemContainerHeight}px] mt-1 ` +
                        "  scroll-bar overflow-auto"}>


                    <div className={"flex flex-row justify-between flex-wrap gap-5 h-max"}>


                        {
                            dataArray.map(value => {
                                return <Card/>
                            })
                        }
                        {/*<Card/>*/}
                        {/*<Card/>*/}
                        {/*<Card/>*/}

                    </div>


                </div>

            </div>

            <div className={`flex-1 h-[100%] bg-white sticky top-0 right-0`}>


            </div>

        </section>
    )

}

export default CheackOutView;