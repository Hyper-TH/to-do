export const RepoInfo = (props) => {
    return <>    
      <div id='userRepos'>
            <h1> User Repos </h1>
            <div id="repoTableWrapper">
                <table id='repoInfo'>
                    <tbody id="Rlist">
                        <tr>
                            <th>Name: </th>
                            <td>{props.name}</td>
                        </tr>
                        <tr>
                            <th>Description: </th>
                            <td>{props.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
};


