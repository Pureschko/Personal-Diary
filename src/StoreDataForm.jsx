/* eslint-disable react/prop-types */
import { useState } from "react";

const StoreDataForm = ({ onClose }) => {
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Set current date

    // FIXME naming
    // Function for adding a new publication
    const addPost = () => {
        // Create a new post
        const newPost = {
            id: Date.now(),
            title,
            imageUrl,
            content,
            date,
        };

        localStorage.setItem(newPost.id, JSON.stringify(newPost));

        // Clear form fields
        setTitle("");
        setImageUrl("");
        setContent("");
        setDate(new Date().toISOString().slice(0, 10)); // Reset date to current

        onClose(); // Close the form

        window.location.reload(); // Reload the page after adding a publication
    };

    // Function to handle form submission
    const handleSubmit = e => {
        e.preventDefault(); // Prevent page reload when form is submitted
        addPost(); // Adding a publication
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="relative bg-white p-6 rounded-lg"
                onClick={e => e.stopPropagation()}
            >
                <form
                    className="space-y-4 p-6 rounded"
                    onSubmit={handleSubmit} // Use handleSubmit to handle form submission
                >
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                        Add publication
                    </h2>
                    <p className="font-bold text-gray-800 mb-1">Title</p>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                    <p className="font-bold text-gray-800 mb-1">Picture</p>
                    <input
                        type="text"
                        placeholder="URL picture"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                    <p className="font-bold text-gray-800 mb-1">Content</p>
                    <input
                        type="text"
                        placeholder="Add text"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                    <p className="font-bold text-gray-800 mb-1">Date</p>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-800 transition-colors"
                    >
                        Add publication
                    </button>
                </form>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default StoreDataForm;
