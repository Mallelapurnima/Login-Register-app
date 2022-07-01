
import { useEffect, useState } from 'react';


const UserList = () => {

    const [users, setUsers] = useState([]);

    
    const fetchUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUsers(data)
          })
      }
    
      useEffect(() => {
        fetchUsers()
      }, [])
    
      return (
        <div className="mb-3">
          {users.length > 0 && (
            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )

    }

export default UserList;