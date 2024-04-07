import "./Header.scss";
import { useState, useEffect} from "react";
import {IoIosArrowDown} from "react-icons/io";
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { useContext } from "react";
// import { Context } from "../../utils/context";
// import { useAccount } from "wagmi";
const Header = () => {
    const [scrolled,setScrolled] = useState(false);
    // const {setAccount} = useContext(Context);
    // const {address,isConnected} = useAccount();
    const [loginAs,setLoginAs] = useState("patient");
    
    // const navigate = useNavigate();
    const handleScroll = ()=>{
        const offSet = window.scrollY;
        if(offSet > 200){
            setScrolled(true);
        }
        else setScrolled(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
    },[]);

    // useEffect(()=>{
    //     handleHome();
    // },[isConnected]);// eslint-disable-line react-hooks/exhaustive-deps
    const handleChange = (e) =>{
        const s= e.currentTarget.value;
        setLoginAs(s);
    }
    const handleHome = ()=>{
        // if(isConnected){
        //     setAccount(address);
        if(loginAs === "admin"){
            // navigate("/admin");
            window.location.href = "/admin";
        }
        else if(loginAs === "staff"){
            // navigate("/staff");
            window.location.href = "/staff";
        }
        else if(loginAs === "patient"){
            // navigate("/patient");
            window.location.href = "/patient";
        }
        else if(loginAs === "doctor"){
            // navigate("/doctor");
            window.location.href = "/doctor";
        }
    // }else{window.location.href = "/"}
    }

    return (
    <>
    <header className={`main-header ${scrolled? "stickey-header":""}`}>
        <div className="header-content">
            <ul className="left">
                <li onClick={handleHome}>Home</li>
                <li onClick={()=>window.location.href = "/about"}>About</li>
                <li onClick={()=>window.location.href = "/contact"}>Contact</li>
                <li className="dropdown">
                    <a href="/" >Services <IoIosArrowDown></IoIosArrowDown></a>
                    <ul>
                        <li><a href="/register/patient">Register as Patient</a></li><hr />
                        <li><a href="/appointment">Book Appointment</a></li><hr/>
                        <li><a href="/">Emergency</a></li>
                    </ul>
                </li>
            </ul>    
            <div className="center" onClick={()=>window.location.href = "/"}>MED 3</div>
            
            <div className="right">
            {/* <ConnectButton chainStatus="icon" showBalance={false} /> */}
            {<div className="custom-select"  style={{width:"200px"}} >
                <label>As : </label>
                <select value={loginAs} onChange={handleChange}>   
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
                </select>    
            </div>}
            
                
            </div>
        </div>
    </header>
    
    </>
    );
};

export default Header;
