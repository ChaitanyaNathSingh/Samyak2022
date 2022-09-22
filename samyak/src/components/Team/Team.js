// import HomePoster from "../Home/HomePoster";
import TeamCard from "./TeamCard";

const Team = () => {
    return (
        <div style={{background: '#333',color:'white'}}>
            <div style={{display:'flex',flexFlow:'row-wrap'}}>
            <TeamCard name="Gowrav Krishna" img_url='https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/7X9A4390.JPG' role='core' />
            <TeamCard name="Gowrav Krishna" img_url='https://gowrav143.xyz/images/profilepic.jpg' role='core' />
            <TeamCard name="Gowrav Krishna" img_url='https://gowrav143.xyz/images/profilepic.jpg' role='core' />
            </div>
            <div style={{display:'flex',flexFlow:'row-wrap'}}>
            </div>
        </div>
    )
}

export default Team;