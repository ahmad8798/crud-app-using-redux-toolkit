import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUsername } from '../features/users/userSlice'
const Card = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.value)
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [newUsername, setNewUsername] = useState('');
    return (
        <>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4'>
                         <input className='form-control my-2' type='text' placeholder='name..' onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className='col-lg-4 '>
                         <input className='form-control my-2' type='text' placeholder='user name..' onChange={(event) => { setUsername(event.target.value) }} />
                    </div>
                    <div className='col-lg-2 my-2'>
                        <button className='btn btn-primary' onClick={() => { dispatch(addUser({ id: users[users.length - 1].id + 1, name, username })) }}>add user</button>
                    </div>

                </div>
                {users.map(user => {
                    return (
                        <div key={user.id}>
                            <div className='row justify-content-center my-5'>
                                <div className='col-lg-6 my-card border rounded'>
                                    <p className='fs-5'><strong>{user.name}</strong></p>
                                    <p className='fs-5'><strong>{user.username}</strong></p>
                                    <div className='d-flex'>

                                        <input onChange={(event) => { setNewUsername(event.target.value) }} className='form-control my-3 mx-2' type='text' placeholder='New username..' />
                                        <button onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername })) }} className='btn btn-primary h-25 mx-2 mt-3'>update</button>
                                        <button onClick={() => { dispatch(deleteUser({ id: user.id })) }} className='btn btn-primary h-25 mx-2 mt-3'>delete</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Card
