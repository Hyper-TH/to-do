// TODO: FIX ERROR REGARDING MAPS
export const RepoInfo = (props) => {
    return <>    
      <div id='userRepos'>
            <h1> User Repos </h1>
            <div id="repoTableWrapper">
                <table id='repoInfo'>
                    <tbody id="Rlist">
                        {props.repoInfo.map(function(repo,i) {
                            return (
                            <>
                                <tr key={i}>
                                    <th key={i}>Name:</th>
                                    <td key={i}>{repo.name}</td>
                                </tr>
                                <tr key={i}>
                                    <th key={i}>Description:</th>
                                    <td key={i}>{repo.description}</td>
                                </tr>
                            </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
};