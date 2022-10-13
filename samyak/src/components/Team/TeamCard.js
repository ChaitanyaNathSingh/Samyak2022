import React from 'react'
import './TeamCard.css'
function TeamCard({name,role,img_url}) {
    return (
        <div class="ourteam-chief-card" style={{height:'480px',width:'300px'}} >
            <img src={img_url} alt={name} />
                <div class="ourteam-chief-icon">
                    <img src="https://klsamyak.in/logo192.png" alt="Samyak Logo" id="chief" />
                </div>
                <div class="chief-info" >
                    <h4 style={{color:'white'}}>{name}</h4>
                    <br />
                        <h4><b style={{color:'white'}}>{role}</b></h4>
                </div>

        </div>
    )
}

export default TeamCard