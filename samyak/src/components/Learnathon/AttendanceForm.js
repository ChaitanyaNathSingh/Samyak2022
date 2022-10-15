import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import BaseDropDown from "../UI/BaseDropDown";
import axiosInstance from "../../axios";
import { SubmitButton } from "../Join/JoinInterface";

const Container = styled.div`
    background-color: #232323;
    min-height: 100vh;
    width: 100%;
    margin:0;
    padding: 0;
    color: white;
    text-align: center;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    h1 {
        margin-top: 0;
    }
`;

const Fields = styled.div`
    text-align: left;
    width: 354px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
`;

const LeftSection = styled.div`
    outline: 0;
    border: 0;
    padding: 8px;
    font-size: 17px;
    color: #ffffff;
    border-radius: 3px;
    background: rgb(255, 255, 255,.15);
    width: 350px;
    height: 42px;
    border-bottom: 2px solid #cf9a2e;

    margin-top: 40px;
    display: flex;
    justify-content: left;
    align-items: center;
    input {
        width: 18px;
        height: 18px;
        margin-right: 15px;
        margin-left: 5px;
        display: inline-block;
    }
    label {
        // border: 2px solid red;
        margin: 0;
        padding: 0;
        height: 18px;
    }
`;


const AttendanceForm = () => {
    const navigate = useNavigate();
    const [subjectData, setSubjectData] = useState(['PFSD', 'MSWD']);
    const [businessSystems, setBusinessSystems] = useState([]);
    const [cluster, setCluster] = useState([]);
    const [students, setStudents] = useState([]);
    const [isCluterVisible, setIsClusterVisible] = useState(false);
    const [isStudentsVisible, setIsStudentsVisible] = useState(false);

    let emp = localStorage.getItem("emp");
    let access_token = null;
    if(emp !== null && emp !== undefined && emp !== "" && emp !== "null" && emp !== "undefined" && emp !== " ") {
        emp = JSON.parse(emp);
        access_token = emp.emp[0].tokens.access_token;
    }
    // console.log(access_token);

    let submitButton = document.getElementById("submit-attendance");
    if(submitButton) {
        if(!isStudentsVisible) 
            document.getElementById("submit-attendance").disabled = true;
        else 
            document.getElementById("submit-attendance").disabled = false;
    }
    
    useEffect(() => {
        const empObject = localStorage.getItem("emp");
        if(empObject === null || empObject === undefined || empObject === "" || empObject === "null" || empObject === "undefined" || empObject === " ")
            navigate("/y21learnathon");


        axiosInstance
            .get("../home/business-system", {
                headers: {
                    Authorization: `JWT ${access_token}`,
                }
            })
            .then((res) => {
                setBusinessSystems(res.data.data);
            })
            .catch((e) => console.log(e));
    }, [navigate, access_token])
    
    const subjectChangeHandler = (e) => {
        // const subject = e.target.value;
        // axiosInstance
        //     .get(`../home/cluster/${subject}`)
        //     .then((res) => {
        //         setCluster(res.data.data);
        //     })
        //     .catch((e) => console.log(e));
        businessChangeHandler();
    };
    const branchChangeHandler = (e) => {
        let value = e.target.value;
        if(value === 'CSE')
            setSubjectData(['PFSD', 'MSWD']);
        else
            setSubjectData(['MSWD']);
        businessChangeHandler();
    }
    const businessChangeHandler = () => {
        let branch = document.getElementById("branch").value;
        let subject = null;
        if(branch === 'CS&IT')
        subject = "MSWD";
        else
        subject = document.getElementById("subject").value;
        let value = document.getElementById("businesssystem").value;
        value = value.split(" ")[0];
        axiosInstance
            .get("../home/team-number-group", {
                params: {
                    business_system: value,
                    subject: subject
                },
                headers: {
                    Authorization: `JWT ${access_token}`,
                }
            })
            .then(res => {
                // console.log(res.data);
                let result = res.data.data;
                
                // setStudents(result);
                setCluster(result);
                setIsClusterVisible(true);
            })
            .catch((e) => console.log(e));
        setIsClusterVisible(true);
        setIsStudentsVisible(false);
    }
    const clusterChangeHandler = (e) => {
        let studentsResult = [];
        let value = e.target.value;
        cluster.forEach(item => {
            if(item.group_name === value)
                studentsResult.push({id: item.id, studentId: item.studentId});
        });
        setStudents(studentsResult);
        setIsStudentsVisible(true);
    }
    const getBusinessSystem = (e) => {
        let result = ['Select Business System'];
        businessSystems.forEach((businessSystem) => {
            result.push(businessSystem.num + ' ' + businessSystem.name);
        });
        return result;
    }
    const getCluster = (e) => {
        let result = ['Select Cluster'];
        result = result.concat([...new Set(cluster.map(item => item.group_name))]);
        return result;
    }

    const formHandler = (e) => {
        e.preventDefault();
        let studentTags = document.querySelectorAll("input[type='checkbox']:checked");
        let studentIds = [];
        studentTags.forEach((studentTag) => {
            studentIds.push({id: studentTag.name, studentId: studentTag.value});
        });
        // console.log(studentIds);
        axiosInstance
            .post("../home/mark-attendance", {
                studentIds: studentIds,
            }, {
                headers: {
                    Authorization: `JWT ${access_token}`,
                }
            })
            .then((res) => {
                // console.log(res.data);
                alert(res.data.message);
                setIsStudentsVisible(false);
                document.getElementById("cluster").value = "Select Cluster";
            })
            .catch(e => console.log(e));
    };
    return(
        <>
            <Container>
                <NavBarSpace />
                <h1>Attendance</h1>
                <Fields>
                    <Form onSubmit={formHandler}>
                        <BaseDropDown onChange={branchChangeHandler} label="Branch" name="branch" type="text" id="branch" options={["CSE", "CS&IT"]} />
                        <BaseDropDown onChange={subjectChangeHandler} label="Subject" name="subject" type="text" id="subject" options={subjectData} />
                        <BaseDropDown onChange={businessChangeHandler} label="Business System" name="businesssystem" type="text" id="businesssystem" options={getBusinessSystem()}/>
                        {isCluterVisible ? <BaseDropDown onChange={clusterChangeHandler} label="Cluster" name="cluster" type="text" id="cluster" options={getCluster()} /> : null}
                        {isStudentsVisible ? students.map((student) => (
                        <LeftSection className="left-section" key={student.id}>
                            <input
                                className="student-checkbox"
                                type="checkbox"
                                id={`custom-checkbox-0`}
                                name={student.id}
                                value={student.studentId}
                            />
                            <label htmlFor={`custom-checkbox-1`}>is {student.studentId} absent?</label>
                        </LeftSection>)): null}
                        <SubmitButton type="submit" name="submit" id="submit-attendance" value="Submit" />
                        <br></br>
                        <p><Link to={'/y21sdp1rubricform'}>click here</Link> to go to Rubric Form</p>
                    </Form>
                </Fields>
            </Container>
        </>
    );
}

export default AttendanceForm;