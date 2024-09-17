import React, { useState } from 'react';

function AccountCredentialsPopup({ onClose }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleGeneratePassword = () => {
        const generatedPassword = Math.random().toString(36).slice(-8);
        setPassword(generatedPassword);
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center font-roboto">
            <div className="bg-white p-8 rounded-lg shadow-xl relative" style={{ width: '600px' }}> 
                <button onClick={onClose} className="absolute top-1 right-3 text-xl font-semibold">&times;</button>
                <h2 className="text-xl font-semibold text-center mb-4">Account Credentials</h2>
                <div>
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <label className="block">Password</label>
                    <button
                        onClick={handleGeneratePassword}
                        className="ml-2 bg-transparent text-blue-500 hover:text-blue-700 text-sm underline"  
                    >
                        Generate Password
                    </button>
                </div>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none mt-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="mt-4 flex items-center">
                    <input
                        id="show-password"
                        type="checkbox"
                        className="h-4 w-4"
                        checked={showPassword}
                        onChange={(e) => setShowPassword(e.target.checked)}
                    />
                    <label htmlFor="show-password" className="ml-2">Show Password</label>
                </div>
                <button
                    onClick={() => console.log('Create Account')}
                    className="mt-6  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex justify-center mx-auto"
                >
                    Create Account
                </button>
            </div>
        </div>
    );
}

export default AccountCredentialsPopup;




// call in parent components

// import React, { useState } from 'react';
// import AccountCredentialsPopup from './AccountCredentialsPopup';

// function ParentComponent() {
//     const [showPopup, setShowPopup] = useState(false);

//     return (
//         <div>
//             <button
//                 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//                 onClick={() => setShowPopup(true)}
//             >
//                 Open Account Setup
//             </button>

//             {showPopup && (
//                 <AccountCredentialsPopup />
//             )}
//         </div>
//     );
// }

// export default ParentComponent;
