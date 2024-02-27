import {AiOutlineSwapRight} from "react-icons/ai";
import Input from "../components/input/input.tsx";
import {useEffect, useRef, useState} from "react";
import Combobox from "../components/combobox/combobox.tsx";

import { BiSolidBadgeDollar } from "react-icons/bi";
import { PiSealCheckFill } from "react-icons/pi";
import axios from "axios";

import * as Validator from "../util/validator.ts"
import * as Msg from "../util/messages.ts"
import Alert from "../components/alert/alert.tsx";

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//
// import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
// import { Essentials } from '@ckeditor/ckeditor5-essentials';
// import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
// import { Highlight } from '@ckeditor/ckeditor5-highlight';

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

interface BrandData {
    _id:string
    name:string,
    category:string
    image:string
}

const AddItem = () =>{

    const fileChooser :any = useRef();
    const imageRef:any = useRef();
    const [productImage, setProductImage] = useState<any>(null)

    const [alertOpen, setAlertOpen] = useState<boolean>(false)
    const [alertType, setAlertType] = useState<string>("")
    const [alertMsg, setAlertMsg] = useState<string>("")

    const [code, setCode] = useState<string>("")
    const [productName, setProductName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [qty, setQty] = useState(0)
    const [warranty, setWarranty] = useState<string>("")
    const [regPrice, setRegPrice] = useState<number>(0)
    const [salePrice, setSalePrice] = useState<number>(0)

    const [productNameValid, setProductNameValid] = useState<boolean>(true)
    const [descriptionValid, setDescriptionValid] = useState<boolean>(true)
    const [qtyValid, setQtyValid] = useState<boolean>(true)
    const [codeValid, setCodeValid] = useState<boolean>(true)
    const [warrantyValid, setWarrantyValid] = useState<boolean>(true)
    const [regPriceValid, setRegPriceValid] = useState<boolean>(true)
    const [salePriceValid, setSalePriceValid] = useState<boolean>(true)

    const [brand, setBrand] = useState<string>("Select")
    const [category, setCategory] = useState<string>("Select")

    const [brandList, setBrandList] = useState<BrandData[]>([])

    const brand_list:any[]=[{text:"Select"}]

    useEffect(() => {
        getFiltredBrands();
    }, []);

    useEffect(() => {
        brandList.map((value: BrandData) => {
            brand_list.push({text:value.name, icon:`http://localhost:9000/images/${value.image}`})
        })

        console.log(brand+" : "+category)
    }, [brandList,brand_list]);

    function clickProfile(){
        fileChooser.current.click();
    }

    let op1 = ""

    function setImage(event: any | undefined){

        // console.log(event.target.files[0])

        const imgFile = event.target.files[0];

        if (imgFile) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setProductImage(imgFile)
                if (imageRef.current) {
                    imageRef.current.src = reader.result;
                }
            };

            reader.readAsDataURL(imgFile);
        }
    }

    const handleInput = (e:any, type:string):void => {

        switch (type){
            case 'code':
                console.log(e.target.value)
                setCode(e.target.value);
                break;
            case 'name':
                setProductName(e.target.value);
                setProductNameValid(Validator.productNameValidator(e.target.value))
                break;
            case 'description':
                setDescription(e.target.value)
                break;
            case 'qty':
                setQty(parseInt(e.target.value))
                setQtyValid(Validator.numberValidator(e.target.value))
                break;
            case 'warranty':
                setWarranty(e.target.value);
                break;
            case 'regPrice':
                setRegPrice(parseInt(e.target.value));
                setRegPriceValid(Validator.numberValidator(e.target.value))
                break;
            case 'salePrice':
                setSalePrice(parseInt(e.target.value))
                setSalePriceValid(Validator.numberValidator(e.target.value))
                break;
        }

    }

    function cmbBoxStates(value:string,id:string){

        switch (id) {
            case 'brands':
                setBrand(value)
                break;
            case 'category':
                setCategory(value);
                break;

        }

    }

    function validateValues() {

    }

    async function creatItem() {

        if (true){

            const config = {
                headers: {
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YTgwMjg0NTcyMjYxYzMzY2Q2MjkwYyIsInVzZXJuYW1lIjoiVGhhcmluZHVAMTAyIiwiZnVsbE5hbWUiOiJUaGFyaW5kdSBEaGFudXNoa2EiLCJlbWFpbCI6ImRoYW51OTA5YWJAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOjcwMjAzNzE2OCwicGFzc3dvcmQiOiIiLCJyb2xlIjoiYWRtaW4iLCJwcm9QaWMiOiJwcm9QaWMiLCJfX3YiOjB9LCJpYXQiOjE3MDg5NjkzMjgsImV4cCI6MTcwOTU3NDEyOH0.U5s4CAfAfsb4FjkazU7VhIZECba9hgw0qd7tkVTRGWw',
                    'Content-Type': 'multipart/form-data'
                }
            };

            const data = JSON.stringify({
                "code": code,
                "name": productName,
                "description": description,
                "category": category,
                "brand": brand,
                "regularPrice": regPrice,
                "salePrice": salePrice,
                "qty": qty,
                "warranty": warranty,
                "stockStatus": true
            })

            console.log(data)

            let formData  = new FormData();
            formData.append('item',data);
            formData.append('file',productImage)
            formData.append('type',"item");

            await axios.post('http://localhost:9000/item/save',formData,config)
                .then(response => {
                    alert(response.data.message)
                    // window.location.reload()
                    showAlert('success',response.data.message)
                    setTimeout(function (){window.location.reload()},2001)
                })
                .catch(error => {
                    console.log(error)
                    console.log(error.response.data.message)

                    showAlert('error',"")
                })

            // if (alertType == 'success') {
            //     window.location.reload()
            // }

        }

    }

    async function getFiltredBrands(){
        const config = {
            headers: {
                'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YTgwMjg0NTcyMjYxYzMzY2Q2MjkwYyIsInVzZXJuYW1lIjoiVGhhcmluZHVAMTAyIiwiZnVsbE5hbWUiOiJUaGFyaW5kdSBEaGFudXNoa2EiLCJlbWFpbCI6ImRoYW51OTA5YWJAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOjcwMjAzNzE2OCwicGFzc3dvcmQiOiIiLCJyb2xlIjoiYWRtaW4iLCJwcm9QaWMiOiJwcm9QaWMiLCJfX3YiOjB9LCJpYXQiOjE3MDg5NjkzMjgsImV4cCI6MTcwOTU3NDEyOH0.U5s4CAfAfsb4FjkazU7VhIZECba9hgw0qd7tkVTRGWw'
            }
        };

        await axios.get(`http://localhost:9000/brand/get/all?size=-1&page=0&category=All`,config)
            .then(response => {

                console.log(response.data.data)

                setBrandList(response.data.data)

            })
            .catch(error => {
                alert(error)
            })
    }

    function showAlert(type:string,msg:string){
        setAlertType(type);
        setAlertMsg(msg);
        setAlertOpen(true)
    }

    return (
        <section className={"bg-transparent w-full min-h-full flex flex-col"}>

            <h1 className={"text-3xl font-[500] w-full font-Poppins"}>
                Add new item
            </h1>

            <Alert open={alertOpen}
                   type={alertType}
                   message={alertMsg}
                   onClose={() => setAlertOpen(false)}
            />

            <div className={"pt-2 text-[14px] font-[500] w-full flex flex-row"}>
                <a className={"mr-2 text-gray-800 flex flex-row justify-center items-center"}>Dashboard <AiOutlineSwapRight
                    className={"mx-2"}/></a>
                <a className={"mr-2 text-gray-800 flex flex-row justify-center items-center"}>Item <AiOutlineSwapRight
                    className={"mx-2"}/></a>
                <a className={"mr-2 text-gray-500"}>New Item</a>
            </div>

            {/*lg:flex-col gap-10 lg:gap-5*/}
            <main
                className={"w-full lg:flex-1 h-max " +
                    "flex mt-5 flex-col  justify-around items-center lg:items-start "}>


                <section className={`p-5 w-full h-max flex flex-col md:flex-col lg:flex-row `}>

                    <div className={"font-Euclid  w-full md:w-full lg:w-[40%] "}>
                        <strong className={"font-[500]"}>Details</strong>
                    </div>

                    <div
                        className={"h-max bg-white border rounded-lg p-3" +
                            " w-full md:w-full lg:w-[60%] flex flex-col flex-wrap shadow"}>

                        <div className={"w-full h-max mb-3"}>
                            <label
                                className={"text-[12px] font-medium text-[#2e2e2e]"}>
                                Product Image
                            </label>
                            <div className={"w-full h-max"}>
                                <div
                                    className={"w-[500px] h-[500px] overflow-hidden rounded-md " +
                                        " border-[3px] border-dashed border-[#2A8CF5]  mt-2 "}>
                                    <img id={"profilePic"}
                                         src={`${productImage ?
                                             URL.createObjectURL(productImage) : "src/assets/images/icon/add_user.png"}`}
                                         alt={"profile"} title={"profile"}
                                         className={"w-[500px] h-[500px] bg-[#DDE8F5] cursor-pointer rounded-md hover:scale-110 transition-all"}
                                         onClick={clickProfile}
                                         ref={imageRef}/>
                                </div>
                            </div>
                        </div>

                        <input ref={fileChooser} id={"fileSelect"} type={"file"} className={"hidden"}
                               onChange={(event) => setImage(event)}/>

                        <div className={"w-full h-max mb-2"}>
                            <Input id={"code"}
                                   type={"text"}
                                   label={"Product code"}
                                   placeholder={"Product code"}
                                   required={true}
                                   callBack={handleInput}
                                   validate={codeValid}
                            />
                        </div>

                        <div className={"w-full h-max mb-2"}>
                            <Input id={"name"}
                                   type={"text"}
                                   label={"Product name"}
                                   placeholder={"Product name"}
                                   required={false}
                                   callBack={handleInput}
                                   validate={productNameValid}
                                   message={Msg.productNameMsg}
                            />
                        </div>

                        <div className={"w-full h-max mb-2"}>
                            <Input id={"description"}
                                   type={"text"}
                                   label={"Description"}
                                   placeholder={"Product name"}
                                   required={false}
                                   callBack={handleInput} validate={descriptionValid}/>
                        </div>
                    </div>
                </section>

                <section
                    className={`p-5 w-full h-max flex flex-col md:flex-col lg:flex-row justify-between`}>

                    <div className={"font-Euclid w-full md:w-full lg:w-[20%] max-w-fit"}>
                        <strong className={"font-[500]"}>Properties</strong>
                    </div>


                    <div
                        className={"h-max bg-white border rounded-lg p-3 " +
                            " w-full sm:w-full md:w-full lg:w-[60%] flex flex-col flex-wrap shadow"}>

                        <div
                            className={"w-full h-max flex flex-col lg:flex-row justify-between flex-wrap"}>

                            <div
                                className={"w-[100%]  lg:w-[48%] mb-3 lg:mb-0"}>

                                <div className={"w-full h-max"}>
                                    <Combobox id={'brands'}
                                              placeholder={"Select brand"}
                                              label={"Select brand"}
                                              callBack={cmbBoxStates}
                                              onlyIcon={true}
                                              item={brand_list}
                                    />

                                    <button
                                        className={"w-full h-[40px] bg-[#2A8CF5] rounded-md text-white mt-3"}>
                                        Add brand
                                    </button>
                                </div>
                            </div>

                            <div
                                className={"w-[100%]  lg:w-[48%] mb-3 lg:mb-0"}>

                                <div className={"w-full h-max mb-2"}>


                                    <Combobox id={'category'}
                                              placeholder={"Select Category"}
                                              label={"Select Category"}
                                              callBack={cmbBoxStates}
                                              onlyIcon={false}
                                              item={[{text: "All"}, {text: "Laptop"}, {text: "Keyboard"}, {text: "Mouse"}]}
                                    />

                                    <button
                                        className={"w-full h-[40px] bg-[#2A8CF5] rounded-md text-white mt-3"}>
                                        Add category
                                    </button>
                                </div>
                            </div>

                        </div>


                        <div className={"w-full h-max mb-2 flex flex-col lg:flex-row justify-between"}>

                            <div
                                className={"w-[100%] lg:w-[48%]"}>

                                <Input id={"qty"}
                                       type={"number"}
                                       label={"Quantity"}
                                       placeholder={"0"}
                                       required={false}
                                       callBack={handleInput}
                                       validate={qtyValid}
                                       message={Msg.numberMsg}
                                />
                            </div>

                            <div
                                className={"w-[100%] lg:w-[48%]"}>

                                <Input id={"warranty"}
                                       type={"text"}
                                       label={"Warranty"}
                                       placeholder={"warranty"}
                                       required={false}
                                       callBack={handleInput} validate={warrantyValid}/>
                            </div>
                        </div>
                    </div>

                </section>


                <section className={`p-5 w-full h-max flex flex-col md:flex-col lg:flex-row justify-between`}>

                    <div className={"font-Euclid w-full md:w-full lg:w-[40%] "}>
                        <strong className={"font-[500]"}>Pricing</strong>
                    </div>

                    <div
                        className={"h-max bg-white border rounded-lg p-3 " +
                            " w-full md:w-full lg:w-[60%] flex flex-col flex-wrap shadow"}>

                        <div className={"w-full h-max mb-2 flex flex-col lg:flex-row justify-between"}>

                            <div
                                className={"w-[100%] lg:w-[48%]"}>

                                <Input
                                    id={"regPrice"}
                                    type={"text"}
                                    label={"Regular Price"}
                                    placeholder={"0.00"}
                                    required={false}
                                    callBack={handleInput}
                                    icon={<BiSolidBadgeDollar className={"text-red-600"}/>}
                                    validate={regPriceValid}
                                    message={Msg.numberMsg}
                                />
                            </div>

                            <div
                                className={"w-[100%] lg:w-[48%]"}>

                                <Input
                                    id={"salePrice"}
                                    type={"text"}
                                    label={"Sale Price"}
                                    placeholder={"0.00"}
                                    required={false}
                                    callBack={handleInput}
                                    icon={<BiSolidBadgeDollar className={"text-red-600"}/>}
                                    validate={salePriceValid}
                                    message={Msg.numberMsg}
                                />
                            </div>


                        </div>


                    </div>

                </section>

                <section
                    className={`p-5 w-full h-max flex flex-col md:flex-col lg:flex-row justify-between`}>

                    <button
                        className={"btn btn-create text-[14px] ml-auto"} onClick={creatItem}>
                        <PiSealCheckFill className={"text-white mr-3"}/>
                        Save Item
                    </button>

                </section>

                    {/*<div className={"w-[800px] h-[500px] bg-red-100"}>*/}


                    {/*<div id={'editor-container'} className="App h-full no-more-tailwind " >*/}
                    {/*    /!*<h2>Using CKEditor&nbsp;5 build in React</h2>*!/*/}


                    {/*    <CKEditor*/}
                    {/*        editor={ClassicEditor}*/}
                    {/*        // config={ {*/}
                    {/*        //     plugins: [ Paragraph, Bold, Italic, Essentials ],*/}
                    {/*        //     toolbar: [ 'bold', 'italic' ]*/}
                    {/*        // } }*/}
                    {/*        // config={ editorConfiguration }*/}
                    {/*        data="<p>Hello</p>"*/}
                    {/*        onReady={editor => {*/}
                    {/*            // You can store the "editor" and use wheno it is needed.*/}
                    {/*            console.log('Editor is ready to use!', editor);*/}
                    {/*        }}*/}
                    {/*        onChange={(event,editor) => {*/}
                    {/*            console.log(event);*/}
                    {/*            console.log(editor.getData());*/}
                    {/*        }}*/}
                    {/*        onBlur={(event, editor) => {*/}
                    {/*            console.log('Blur.', editor);*/}
                    {/*        }}*/}
                    {/*        onFocus={(event, editor) => {*/}
                    {/*            console.log('Focus.', editor);*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*</div>*/}

                    {/*</div>*/}

            </main>

        </section>
)

}

export default AddItem;