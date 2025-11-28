const SingleUser=({user,deleteUser})=>{
    return(
        <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <button onClick={()=>deleteUser(user.id)}>Delete</button>
        </tr>
    )
}
export default SingleUser;