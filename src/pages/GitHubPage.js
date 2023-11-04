import Axios from 'axios';
import { useState } from 'react';

import { UserInfo } from '../components/GitHub/UserInfo';

export const GitHubPage = () => {
    const api_url = 'https://api.github.com/users';

    const [newName, setNewName] = useState("");
    const [loginInfo, setLoginInfo] = useState({});

    const findUser = () => {
        Axios.get(`${api_url}/${newName}`)
            .then((res) => {
                setLoginInfo(res.data);
            }
        );
    }; 

    return (
        <>
        <div className='searchBar'>
            <input 
                placeholder='Username' 
                id='username' 
                type='text' 
                onChange={(event) => {
                    setNewName(event.target.value);
                }}/>

            <button onClick={findUser}> Search </button>
        </div>
        
        <div id='MainContainer'>
            <UserInfo
                avatar={loginInfo?.avatar_url}
                name={loginInfo?.name}
                userEmail={loginInfo?.email}
                userName={loginInfo?.login}
                location={loginInfo?.location}
                numOfGists={loginInfo?.public_gists}
            />

        </div>
        </>
    );
};