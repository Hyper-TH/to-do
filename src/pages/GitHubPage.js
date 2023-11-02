import '../GitHub.css'; 
import Axios from 'axios';

import { findUser } from '../components/GitHub/findUser';
import { userInfo } from '../components/GitHub/userInfo';

export const GitHubPage = () => {
    const api_url = 'https://api.github.com/users';

    // TODO: Use useState to store API responses
    
    async function findUser(event) {
        const userData = await Axios.get(`${api_url}/${event.target.value}`);
        return userData;
    }; 

    return (
        <>
        <div className='searchBar'>
            <input placeholder='Username' id='username' />
            <button onClick={findUser}> Search </button>
        </div>
        
        <div id='MainContainer'>
            <userInfo
                avatar={userData?.avatar_url}
                name={userData?.name}
                userEmail={userDat?.email}
                userName={userData?.login}
                location={userData?.location}
                numOfGists={userData?.public_gists}
            />

        </div>
        </>
    );
};