import { useEffect, useState } from "react";
import NavBarSpace from "./NavBarSpace";

const NotFoud = () => {
    var [pathName, setPathName] = useState(window.location.pathname.substring(1));
    useEffect(() => {
        setPathName(window.location.pathname.substring(1));
    }, [pathName]);
    return(
        <>
        <NavBarSpace />
        <div style={{'height': '600px', 'overflow': 'auto', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>{'"'+pathName+'"'} PAGE IS NOT FOUND IN THIS SERVER</div>
        </>
    )
}

export default NotFoud;