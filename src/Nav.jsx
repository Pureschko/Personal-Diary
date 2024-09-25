import StoreDataForm from "./StoreDataForm"; // Adjust the import path as needed
import { useState } from "react";

const Nav = () => {
    const [showForm, setShowForm] = useState(false);

    const handleAddEntryClick = () => {
        setShowForm(!showForm); // Toggle the form visibility
    };

    return (
        <div>
            <div
                className={`mt-4 flex flex-col items-center ${
                    showForm ? "hidden" : ""
                }`}
            >
                {/* Navbar */}

                <div className="bg-background-color w-full max-w-screen-2xl rounded-lg mx-auto ">
                    <nav className="bg-white shadow-md rounded-lg ">
                        <div className="flex bg-background-color ring-inset p-6 justify-between items-center">
                            {/* Title on the left */}
                            <a className="text-2xl font-bold text-slate-200">
                            Dev's cave
                            </a>

                            {/* Button on the right */}
                            <button
                                onClick={handleAddEntryClick}
                                className="px-4 py-2 bg-button-color text-white rounded-lg hover:bg-button-hover transition duration-200"
                            >
                                Add Entry
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Modal for StoreDataForm */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50  z-50  flex justify-center items-start">
                    <div className="bg-white p-6 rounded-lg mt-20 max-w-md w-full">
                        <StoreDataForm onClose={handleAddEntryClick} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;
