import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../../services/dbServices';
import { useSessionActions } from '../../../hooks/useSessionActions';
import { Form } from './Form';

export const Main = () => {

    const [users, setUsers] = useState([]);
    const [loginError, setLoginError] = useState("");

    useEffect (() => {
        getUsers()
        .then(response => {
            setUsers(response)   
        })
        .catch(error => ( "Aqui un error" + console.log(error)));
    }, [])

    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const { LogIn } = useSessionActions();

    const hdlFunctions = {
        hdlPassword : (e) => {
            setUserData({...userData, password: e.target.value})
        },
        hdlEmail : (e) => {
            setUserData({...userData, email: e.target.value})
        },
        hdlSubmit : (e) => {
            e.preventDefault();
            const { email, password } = userData;
            const user = users.find((user) => (user.email === email && user.password === password));
            if (user) {
                const { password, ...currentUser } = user;
                LogIn(currentUser);
                navigate('/home');
            } else {
                setLoginError("Email or password are incorrect");
                setTimeout(() => {
                    setLoginError("");
                }, 3000);
            }
        }
    }

    return (
        <Form hdlFunctions={hdlFunctions} userData={userData} loginError={loginError}/>
    )
}
