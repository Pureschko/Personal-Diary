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
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center" onClick={onClose}>
      <div className="relative bg-card-color p-6 rounded-lg w-[50vw] max-w-lg" onClick={(e) => e.stopPropagation()}>
        <form className="space-y-6 p-6 rounded"
          onSubmit={handleSubmit} // Use handleSubmit to handle form submission
        >
          <h2 className="text-2xl font-semibold mb-4 text-slate-200 text-center">Add publication</h2>
          <div>
          <p className="font-medium text-slate-200 mb-2">Title</p>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-slate-custom text-slate-200 font-light placeholder-placeholder-color w-full p-2 border border-input-borders rounded focus:outline-none focus:border-button-color"
            required
          /></div>
          <div>
          <p className="font-medium text-slate-200 mb-2">Picture</p>
          <input
            type="text"
            placeholder="URL picture"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="bg-slate-custom text-slate-200 font-light placeholder-placeholder-color w-full p-2 border border-input-borders rounded focus:outline-none focus:border-button-color"
            required
          /></div>
          <div>
          <p className="font-medium text-slate-200 mb-2">Content</p>
          <input
            type="text"
            placeholder="Add text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-slate-custom text-slate-200 font-light placeholder-placeholder-color w-full p-2 border border-input-borders rounded focus:outline-none focus:border-button-color"
            required
          /></div>
          <div>
          <p className="font-medium text-slate-200 mb-2">Date</p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-slate-custom text-slate-200 font-light w-full p-2 border border-input-borders rounded focus:outline-none focus:border-button-color"
            required
          /></div>
          <div className="flex justify-center">
          <button
            type="submit"
            className="bg-button-color font-normal text-white py-2 px-8 rounded-md hover:bg-button-hover transition-colors mt-6"
          >
            Add publication
          </button>
          </div>
        </form>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-card-color  hover:bg-card-color text-slate-200 rounded-full w-12 h-12 flex items-center justify-center"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default StoreDataForm;
