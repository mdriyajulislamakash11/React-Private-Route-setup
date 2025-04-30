import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <div className="text-center mt-10">
                <h2 className="text-xl font-semibold text-red-500">User not logged in</h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center mt-10 p-6 rounded-xl shadow-md max-w-sm mx-auto">
            <img
                src={user.photoURL || 'https://via.placeholder.com/150'}
                alt="User Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-400"
            />
            <h2 className="text-2xl font-bold mt-4">{user.displayName || 'No Name Provided'}</h2>
            <p className="text-gray-600">{user?.email || 'No Email Provided'}</p>
        </div>
    );
};

export default Profile;
