import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../../services/dbServices';
import { Form } from './Form';

export const Main = () => {

    const [users, setUsers] = useState([]);

    useEffect (() => {
        getUsers()
        .then(response => {
            setUsers(response)   
        })
        .catch(error => ( console.log(error)));
    }, [])

    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const hdlFunctions = {
        hdlPassword : (e) => {
            setUserData({...userData, password: e.target.value})
        },
        hdlEmail : (e) => {
            setUserData({...userData, email: e.target.value})
        },
        hdlSubmit : (e) => {
            e.preventDefault();
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                navigate('/home');
            }
        }
    }

    return (
        <Form hdlFunctions={hdlFunctions} userData={userData}/>
    )
}
