import { findUser } from '../components/GitHub/findUser';

export const GitHubPage = () => {
    return (
        <div className='searchBar'>
            <input placeholder='Username' id='username' />
            <button onClick={() => findUser('mojombo')}> Search </button>
        </div>
    );
};