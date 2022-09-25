// import "./Admin.css"; 
import Home from "../Home/Home";
const Admin = (props) => {
    // console.log("ADMIN CONPONENT");
    // window.open("https://klsamyakbackend.in/admin", '_blank', 'noopener,noreferrer');
    window.location.href = "https://klsamyakbackend.in/"+props.path;
    return (<Home/>);
}


export default Admin;