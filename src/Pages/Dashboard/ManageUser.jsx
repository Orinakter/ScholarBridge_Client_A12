import useAllUser from "../../hooks/useAllUser";


const ManageUser = () => {
    const {users, isUsersLoading}=useAllUser()
    console.log(users);
    
    return (
        <div>
            
        </div>
    );
};

export default ManageUser;