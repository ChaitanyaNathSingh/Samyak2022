import styled from "styled-components";

const Value = styled.div`
    font-size: 1.6rem;
`;

const H6 = styled.h6`
  font-size: 1.9rem;
  font-weight: bold;
  margin-left: 60px;
  @media (max-width:768px){
    margin:0;
  }
`;

const DetailsObject = (props) => {
  return (
    <div>
      <div  style={{color:'white',display:'flex'}}>
        <div className="col-sm-5">
          <H6 className="mb-0" style={{color:'white'}}>{ props.heading }</H6>
        </div>
        <Value className="col-sm-7 " style={{color:'#F5FFFA'}}>{ props.value } { props.tag ? <img alt="tag" src={props.tag} width="25" height="25" style={{marginLeft:'10px',background:'transparent'}} /> : null } </Value>
      </div>
      <br></br>
    </div>
  );
};

export default DetailsObject;
