import { AiOutlineSwapRight } from "react-icons/ai";
import {useRef, useState} from "react";
import Input from "../components/input/input.tsx";
import * as Validator from "../util/validator.ts"
import * as Msg from "../util/messages.ts"
import {CiRead} from "react-icons/ci";
import {EyeOff2Outline} from '@styled-icons/evaicons-outline/EyeOff2Outline'
import axios from "axios";

function Adduser(){

    const fileChooser :any = useRef();
    const imageRef:any = useRef();
    const [profilePic, setProfilePic] = useState<any>(null)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("New User")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    const [fNameValid, setFNameValid] = useState(true)
    const [lNameValid, setLNameValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [contactValid, setContactValid] = useState(true)
    const [usernameValid, setUsernameValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)
    const [rePasswordValid, setRePasswordValid] = useState(true)

    const [validateValues, setValidateValues] = useState(false)

    function clickProfile(){
        fileChooser.current.click();
    }

    function setProfileImage(event: any | undefined){

        // console.log(event.target.files[0])

        const imgFile = event.target.files[0];

        if (imgFile) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setProfilePic(imgFile)
                if (imageRef.current) {
                    imageRef.current.src = reader.result;
                }
            };

            reader.readAsDataURL(imgFile);
        }
    }

    const handleInput = (e:any, type:string):void => {
        switch (type){
            case 'firstName':
                setFirstName(e.target.value);
                setFNameValid(Validator.fullNameValidator(e.target.value))
                break;
            case 'lastName':
                setLastName(e.target.value);
                setLNameValid(Validator.fullNameValidator(e.target.value))
                break;
            case 'phoneNumber':
                setPhoneNumber(e.target.value)
                setContactValid(Validator.contactValidator(e.target.value))
                break;
            case 'email':
                setEmail(e.target.value)
                setEmailValid(Validator.emailValidator(e.target.value))
                break;
            case 'username':
                setUsername(e.target.value)
                setUsernameValid(Validator.usernameValidator(e.target.value))
                break;
            case 'role':
                setRole(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                setPasswordValid(Validator.passwordValidator(e.target.value))
                break;
            case "rePassword":
                setRePassword(e.target.value)
                setRePasswordValid(cheakPasswordEqual(e.target.value))
                break;
        }
    }

    function cheakPasswordEqual(text: string){

        console.log(rePassword)
        return text===password;
    }

    const cheackValues = () => {

        !Validator.fullNameValidator(firstName) ? setFNameValid(false) :
            !Validator.fullNameValidator(lastName) ? setLNameValid(false) :
                !Validator.emailValidator(email) ? setEmailValid(false) :
                    !Validator.contactValidator(phoneNumber) ? setContactValid(false) :
                        !Validator.usernameValidator(username) ? setUsernameValid(false) :
                            !Validator.passwordValidator(password) ? setPasswordValid(false) :
                                !Validator.passwordValidator(rePassword) ? setRePasswordValid(false) :
                                    setValidateValues(true);
    }

    async function creatUser(){

        cheackValues();

        if (validateValues){

            const config = {
                headers: {
                    'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YTgwMjg0NTcyMjYxYzMzY2Q2MjkwYyIsInVzZXJuYW1lIjoiVGhhcmluZHVAMTAyIiwiZnVsbE5hbWUiOiJUaGFyaW5kdSBEaGFudXNoa2EiLCJlbWFpbCI6ImRoYW51OTA5YWJAZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOjcwMjAzNzE2OCwicGFzc3dvcmQiOiIiLCJyb2xlIjoiYWRtaW4iLCJwcm9QaWMiOiJwcm9QaWMiLCJfX3YiOjB9LCJpYXQiOjE3MDc5ODUyOTAsImV4cCI6MTcwODU5MDA5MH0.CT_cZad4KBCRx0XMjk3Eugrqci1l0fRjtF94ybRtjpY',
                    'Content-Type': 'multipart/form-data'
                }
            };

            const data = JSON.stringify({
                "username": username,
                "fullName": firstName+" "+lastName,
                "email": email,
                "phoneNumber": phoneNumber,
                "password": password,
                "role":  role
            })

            let formData  = new FormData();
            formData.append('user',data);
            formData.append('file',profilePic)

            await axios.post('http://localhost:9000/user/save',formData,config)
                .then(response => {
                    alert(response.data.message)
                    window.location.reload();
                })
                .catch(error => {
                    alert(error)
                })

        }

    }

    return(
        <section className={"bg-transparent w-full min-h-full flex flex-col"}>

            <h1 className={"text-3xl font-[500] w-full font-Poppins"}>
                Create a new user
            </h1>

            <div className={"pt-2 text-[14px] font-[500] w-full flex flex-row"}>
                <a className={"mr-2 text-gray-800 flex flex-row justify-center items-center"}>Dashboard <AiOutlineSwapRight className={"mx-2"} /></a>
                <a className={"mr-2 text-gray-800 flex flex-row justify-center items-center"}>User <AiOutlineSwapRight className={"mx-2"}/></a>
                <a className={"mr-2 text-gray-500"}>New user</a>
            </div>

            <main className={"w-full lg:flex-1 h-max gap-10 lg:gap-5 flex mt-5 flex-col lg:flex-row justify-around items-center lg:items-start "}>

                <div
                    className={"lg:min-w-[350px] w-full sm:w-[400px] lg:w-[25%] h-[500px] bg-white rounded-xl shadow-1 p-5 flex flex-col justify-center items-center"}>

                    {/*Profile pic -----------------------------------------------*/}
                    <div
                        className={"w-[160px] h-[160px] border border[#E8E8E8] rounded-[50%] flex justify-center items-center"}>
                        <img id={"profilePic"}
                             src={`${profilePic ? URL.createObjectURL(profilePic) : "src/assets/images/icon/add_user.png"}`}
                             alt={"profile"} title={"profile"}
                             className={"w-36 h-[148px] rounded-[50%] bg-[#E8E8E8] cursor-pointer"}
                             onClick={clickProfile}
                             ref={imageRef}/>
                    </div>

                    <label className={"text-center text-[12px] text-[#777c81] font-[500] mt-5 font-Euclid"}>
                        Allowed *.jpeg,*jpg,*.png,*.gif
                    </label>

                    {/*bg-[#E5E8EB] text-[#7E8C97]*/}
                    {/*bg-[#DBF6E5] text-[#4FAD82]*/}
                    {/*bg-[#FFE4DE] text-[#CB5650]*/}
                    <label className={"mt-3.5 text-[12px] font-Euclid px-2 py-1 " +
                        `font-[600] rounded-lg
                         ${role=="Admin" ? "admin-label" : role=="Reception" ? "reception-label" : "newUser-label"}`}>
                        {role}
                    </label>

                    <label className={"mt-2 text-[12px] font-Euclid text-[#FFC32C] font-[600]"}>
                        {username}
                    </label>

                    <strong className={"text-[13px] text-black font-[500] mt-0 font-Euclid"}>
                        {firstName+" "+lastName}
                    </strong>


                    <input ref={fileChooser} id={"fileSelect"} type={"file"} className={"hidden"}
                           onChange={() => setProfileImage(event)}/>

                </div>

                {/*form container --------------------------------------------------------*/}
                <div
                    className={"w-full sm:w-[400px] lg:w-[65%] min-h-[500px] h-max bg-white " +
                        "rounded-xl py-5 px-10 lg:mr-6 shadow-1"}>

                    <h1 className={"mb-3 border-b font-Euclid font-[500] text-md"}>Personal Details</h1>

                    <div className={"w-full flex flex-row justify-between flex-wrap"}>


                        {/*lg:max-w-[350px] lg:min-w-fit*/}
                        <div className={"w-[350px] "}>
                            <Input id={"firstName"} type={"text"} required={true} callBack={handleInput}
                                   label={"First Name"} placeholder={"First Name"} validate={fNameValid}
                                    message={Msg.fullNameMsg}/>
                        </div>

                        <div className={"w-[350px]"}>
                            <Input id={"lastName"} type={"text"} required={true} callBack={handleInput}
                                   label={"Last Name"} placeholder={"Last Name"} validate={lNameValid}
                                   message={Msg.fullNameMsg}/>
                        </div>
                    </div>


                    <div className={"w-full flex flex-row justify-between flex-wrap mt-2"}>

                        <div className={"w-[350px]"}>
                            <Input id={"email"} type={"text"} required={true} callBack={handleInput}
                                   label={"Email Address"} placeholder={"Email Address"} validate={emailValid}
                                   message={Msg.emailMsg}/>
                        </div>

                        <div className={"w-[350px]"}>
                            <Input id={"phoneNumber"} type={"text"} required={true} callBack={handleInput}
                                   label={"Mobile Number"} placeholder={"Mobile Number"} validate={contactValid}
                                   message={Msg.contactMsg}/>
                        </div>
                    </div>

                    <h1 className={"my-3 border-b font-Euclid font-[500] text-md"}>Account Details</h1>

                    <div className={"w-full flex flex-row justify-between flex-wrap mt-2"}>

                        <div className={"w-[350px]"}>
                            <Input id={"username"} type={"text"} required={true} callBack={handleInput}
                                   label={"Username"} placeholder={"Username"} validate={usernameValid}
                                   message={Msg.usernameMsg}/>
                        </div>

                        <div className={"w-[350px]"}>
                            <Input id={"role"} type={"tel"} required={true} callBack={handleInput} validate={true}
                                   label={"User Role"} placeholder={"User Role"} />
                        </div>

                    </div>

                    <div className={"w-full flex flex-row justify-between flex-wrap mt-2"}>

                        <div className={"w-[350px]"}>
                            <Input id={"password"} type={"password"} required={true} callBack={handleInput}
                                   label={"Password"} placeholder={"password"} validate={passwordValid}
                                   passBtn={true} passIcon_1={<CiRead size={20}/>} passIcon_2={<EyeOff2Outline  size={20}/>}
                                   message={Msg.passwordMsg}/>
                        </div>

                        <div className={"w-[350px]"}>
                            <Input id={"rePassword"} type={"password"} required={true} callBack={handleInput}
                                   label={"Conform Password"} placeholder={"Conform Password"} validate={rePasswordValid}
                                   passBtn={true} passIcon_1={<CiRead size={20}/>} passIcon_2={<EyeOff2Outline  size={20}/>}
                                   message={Msg.rePassMsg}/>
                        </div>

                    </div>

                    <div className={"w-full flex flex-row justify-end flex-wrap mt-3"}>

                        <button className={"btn btn-create text-[14px]"} onClick={creatUser}>
                            Create User
                        </button>

                    </div>

                </div>

            </main>

        </section>
    )
}

export default Adduser;