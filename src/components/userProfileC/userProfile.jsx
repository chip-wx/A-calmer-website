import { useUser } from "../../hooks/useUser"


export const UserProfileC = () => {
    const {user, loading, logout} = useUser();
    if(loading) return <h1>Loading...</h1>
    if(!user) return <h1>You are not logged in</h1>
    return (
        <>
            <h1>Nice to see you, {user.name}</h1>
            <p>Your email is: {user.email}</p>
            <button onClick={() => logout()}>Logout</button>
        </>
    )
}