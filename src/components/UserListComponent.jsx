import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../services/Users';

const UserListComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const usersData = await fetchUsers();
            setUsers(usersData);
        };
        fetchData();
    }, []);

    return (
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </>
    );
};

export default UserListComponent;
