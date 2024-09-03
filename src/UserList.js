
function UserList({users}){

const renderusers=users.map((user)=>{

    return <tr key={user.name}>
<td>{user.name}</td>
<td>{user.email}</td>
    </tr>
});

    return<>
    <table><thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        </tr>
     </thead>
     <tbody data-testid="users"> {renderusers}</tbody>
    
     </table>
    </>
}
export default UserList;