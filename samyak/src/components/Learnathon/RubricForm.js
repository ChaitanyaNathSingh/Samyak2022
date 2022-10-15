import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import BaseDropDown from "../UI/BaseDropDown";
import axiosInstance from "../../axios";
import { SubmitButton } from "../Join/JoinInterface";
import rubricData from "../../Utils/RubricData";
import RubricQuestion from "./RubricQuestion";

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




const RubricForm = () => {
    const navigate = useNavigate();
    const [subjectData, setSubjectData] = useState(['PFSD', 'MSWD']);
    const [businessSystems, setBusinessSystems] = useState([]);
    const [cluster, setCluster] = useState([]);
    const [students, setStudents] = useState([]);
    const [isCluterVisible, setIsClusterVisible] = useState(false);
    const [isStudentsVisible, setIsStudentsVisible] = useState(false);
    const [isReviewTypeVisible, setisReviewTypeVisible] = useState(false);
    const [areQuestionsVisible, setAreQuestionsVisible] = useState("0");

    let emp = localStorage.getItem("emp");
    let access_token = null;
    if(emp !== null && emp !== undefined && emp !== "" && emp !== "null" && emp !== "undefined" && emp !== " ") {
        emp = JSON.parse(emp);
        access_token = emp.emp[0].tokens.access_token;
    }
    else {
        window.location.href = "/y21learnathon";
    }

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
            navigate("/y21sdp1attendance");


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
        setisReviewTypeVisible(false);
    }
    const clusterChangeHandler = (e) => {
        let studentsResult = [];
        let value = e.target.value;
        if(value === 'Select Team') {
            alert("Please select a team");
            setIsStudentsVisible(false);
            setisReviewTypeVisible(false);
            setAreQuestionsVisible("0");
            return;
        }
        cluster.forEach(item => {
            if(item.group_name === value)
                studentsResult.push({id: item.id, studentId: item.studentId});
        });
        setStudents(studentsResult);
        setIsStudentsVisible(true);
        setisReviewTypeVisible(true);
    }
    const reviewChangeHandler = (e) => {
        const review = e.target.value;
        if(review === "Select Review") {
            setAreQuestionsVisible("0");
            return;
        }
        else if(review === 'review1')
            setAreQuestionsVisible("1");
        else if(review === 'review2')
            setAreQuestionsVisible("2");
        else if(review === 'review3')
            setAreQuestionsVisible("3");
        else if(review === 'review4')
            setAreQuestionsVisible("4");
        else if(review === 'review5')
            setAreQuestionsVisible("5");
    };
    const getBusinessSystem = (e) => {
        let result = ['Select Business System'];
        businessSystems.forEach((businessSystem) => {
            result.push(businessSystem.num + ' ' + businessSystem.name);
        });
        return result;
    }
    const getCluster = (e) => {
        let result = ['Select Team'];
        result = result.concat([...new Set(cluster.map(item => item.group_name))]);
        return result;
    }

    const formHandler = (e) => {
        e.preventDefault();
        // let studentTags = document.querySelectorAll("input[type='checkbox']:not(:checked)");
        let studentTags = document.querySelectorAll("input[type='checkbox']");
        let absentStudentIds = [];
        let presentStudentIds = [];
        for(let i = 0; i < studentTags.length; i++) {
            if(studentTags[i].checked)
                absentStudentIds.push({id: studentTags[i].name, studentId: studentTags[i].value});
            else
                presentStudentIds.push({id: studentTags[i].name, studentId: studentTags[i].value});
        }
        let review_type = e.target.review.value;
        let subject = e.target.subject.value;
        if(review_type === "Select Review") {
            alert("Please fill the questions before submitting");
            return;
        }
        let total = 0;
        // console.log(review_type);
        for(let i=0;i<rubricData[subject][review_type].length;i++) {
            let question = document.getElementById(`${review_type}${i+1}`).value;
            // console.log(question);
            total += parseInt(question);
        }
        // console.log(total);
        axiosInstance
            .post("../home/save-rubrics", {
                presentStudentIds: presentStudentIds,
                absentStudentIds: absentStudentIds,
                total: total,
                review_type: review_type,
                subject: subject
            }, {
                headers: {
                    Authorization: `JWT ${access_token}`,
                }
            })
            .then((res) => {
                // console.log(res.data);
                alert(res.data.message);
                setIsStudentsVisible(false);
                setAreQuestionsVisible("0");
                setisReviewTypeVisible(false);
                document.getElementById("cluster").value = "Select Team";
            })
            .catch(e => console.log(e));
    };
    return(
        <>
            <Container>
                <NavBarSpace />
                <h1>Rubric</h1>
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
                        {isReviewTypeVisible ?
                        <BaseDropDown onChange={reviewChangeHandler} label="Review" name="review" type="text" id="review" options={["Select Review", "review1", "review2", "review3", "review4"]} /> : null}
                        {areQuestionsVisible === "1" ? 
                        <div name="reviewquestions">
                            {document.getElementById('subject').value === 'PFSD' ? <div>
                                {rubricData.PFSD.review1.map((rubric) => (
                                    <RubricQuestion key={rubric.id} id={"review1" + rubric.id} question={rubric.question}/>
                                ))}
                            </div> :
                            <div>
                                {rubricData.MSWD.review1.map((rubric) => (
                                    <RubricQuestion key={rubric.id} id={"review1" + rubric.id} question={rubric.question}/>
                                ))}
                            </div>}
                        </div> : areQuestionsVisible === "2" ?
                        <div name="reviewquestions">
                            {document.getElementById('subject').value === 'PFSD' ? <div>
                                {rubricData.PFSD.review2.map((rubric) => (
                                    <RubricQuestion key={rubric.id} id={"review2" + rubric.id} question={rubric.question}/>
                                ))}
                            </div> :
                            <div>
                                {rubricData.MSWD.review2.map((rubric) => (
                                    <RubricQuestion key={rubric.id} id={"review2" + rubric.id} question={rubric.question}/>
                                ))}
                            </div>}
                        </div> : areQuestionsVisible === "3" ?
                        <div name="reviewquestions">
                            {document.getElementById('subject').value === 'PFSD' ? <div>
                                {rubricData.PFSD.review3.map((rubric) => (
                                    <RubricQuestion key={rubric.id} id={"review3" + rubric.id} question={rubric.question}/>
                                ))}
                            </div> :
                            <div>
                                {rubricData.MSWD.review3.map((rubric) => (
                                    <RubricQuestion key={rubric.id} id={"review3" + rubric.id} question={rubric.question}/>
                                ))}
                            </div>}
                        </div> : areQuestionsVisible === "4" ?
                        <div name="reviewquestions">
                            {document.getElementById('subject').value === 'PFSD' ? <div>
                                {rubricData.PFSD.review4.map((rubric) => (
                                    <RubricQuestion key={rubric.id} id={"review4" + rubric.id} question={rubric.question}/>
                                ))}
                            </div> :
                            <div>
                                {rubricData.MSWD.review4.map((rubric) => (
                                    <RubricQuestion key={rubric.id} id={"review4" + rubric.id} question={rubric.question}/>
                                ))}
                            </div>}
                        </div> : null}
                        
                        <SubmitButton type="submit" name="submit" id="submit-attendance" value="Submit" />
                        <br></br>
                        <p><Link to={'/y21sdp1attendanceform'}>click here</Link> to go to Attendance Form</p>
                    </Form>
                </Fields>
            </Container>
        </>
    );
}

export default RubricForm;