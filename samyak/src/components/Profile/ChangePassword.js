import styled from "styled-components";
import BaseButton from "../UI/BaseButton";
import BaseInput from "../UI/BaseInput";
import axiosInstance from "../../axios";
import { useSnackbar } from 'notistack';

const Container = styled.div`
    position:fixed;
    top: 100px;
    width: 80%;
    left: 10%;
    z-index: 110;
    // border: 2px solid red; // border for testing
    display: flex;
    justify-content: center;
    align-items: center;
    // overflow-y: auto;
    overflow-x: hidden;
    top: 50px;
    height: 90%;
    background-color: #000000;
    opacity: 0.9;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    z-index: 301;

    @media only screen and (max-width: 1024px) {
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        opacity: 1;
        margin: 0;
        padding: 0;
        overflow-y: hidden;
    }
`;

const Heading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 2px solid blue; // border for testing
    height: 60px;
    h2 {
        color: #fff;
    }
`;

const DetailsForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 900px;
    // border: 2px solid red; // border for testing
    padding-top: 30px;
    @media only screen and (max-width: 600px) {
        padding-top: 90px;
    }
`;

const TheForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: auto;
    // border: 2px solid yellow; // border for testing
`;

const Fields = styled.div`
    height: auto;
    // border: 2px solid green; // border for testing
    width: 88%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    input, select {
        display: inline-block;
        height: 40px;
        width: 300px;
        border-radius: 5px;
        margin: 10px;
    }
`;

const Cross = styled.div`
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: scale(0.45);
    cursor: pointer;
    &:hover {
        background-color: #ccc;
    }
    @media only screen and (max-width: 1024px) {

    }
`;

const Actions = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: right;
    // border: 2px solid blue; // border for testing
    & button {
        padding: 2.5px 10px;
    }
`;

const ChangePassword = (props) => {

    let access_token = null;
    let myuser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    access_token = (myuser) ? myuser.user[0].tokens.access_token ? myuser.user[0].tokens.access_token : null : null;
    let username = (myuser) ? myuser.user[0].username ? myuser.user[0].username : null : null;

    const { enqueueSnackbar } = useSnackbar();

    const formHandler = (event) => {
        event.preventDefault();
        let data = {}
        data.username = username;
        data.old_password = event.target.old_password.value;
        data.new_password = event.target.new_password.value;
        data.confirm_password = event.target.confirm_password.value;
        axiosInstance.post('../home/change_password', data, 
            {
                headers: {
                    "Authorization": `JWT ${access_token}`
                }
            }
            ).then(res => {
                if(res.data.status) {
                    flash(res.data.message, 'success');
                    props.toggleForm();
                }
                else {
                    flash(res.data.message, 'error');
                }
            }).catch(err => {
                console.log(err);
            })
    }

    const flash = (message, messageVariant) => {
        enqueueSnackbar(message, { variant: messageVariant, autoHideDuration: 3000 });
    };
    return(
        <div>
            <Container>
            <Cross onClick={props.toggleForm}><img src={require('../Profile/payment_status/cross.png')} alt="close" /></Cross>
                <DetailsForm>
                    <Heading><h2>Change your password</h2></Heading>
                    <TheForm onSubmit={formHandler}>
                        <Fields>
                            <BaseInput id="old_password" type="password" placeholder="Old Password" />
                            <BaseInput id="new_password" type="password" placeholder="New Password" />
                            <BaseInput id="confirm_password" type="password" placeholder="Confirm Password" />
                        </Fields>
                        <Actions>
                            <BaseButton>CHANGE</BaseButton>
                        </Actions>
                    </TheForm>
                </DetailsForm>
            </Container>
        </div>
    )
}

export default ChangePassword;