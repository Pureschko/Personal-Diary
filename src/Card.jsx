/* eslint-disable react/prop-types */
import { Button } from "./Button";

export const Card = ({ imageUrl, title, content, date, onPreviewClicked }) => (
    <div>
        <div className="relative w-auto bg-white rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure className="w-full h-48">
                {/* Image section */}
                <img
                    className="w-full h-full object-cover rounded-t-lg shadow-sm overflow-hidden"
                    src={imageUrl} // Dynamically set the image URL from props
                    alt={title} // Use title as alt text for accessibility
                />
                {/* Badge for the date */}
                <div className="absolute top-2 right-3 bg-background-color bg-opacity-90 text-slate-200  text-sm px-4 py-1 rounded-full">
                    {date}
                </div>
            </figure>
            <div className="p-4">
                {/* Title section */}
                <h2 className="text-lg text-background-color font-semibold mb-2 overflow-hidden text-ellipsis line-clamp-1">
                    {title}
                </h2>
                {/* Content section */}
                <p className="text-slate-500 mb-4 overflow-hidden text-ellipsis line-clamp-1 ">
                    {content}
                </p>
                <div className="flex justify-end">
                    <Button title="Preview" onClicked={onPreviewClicked} />
                </div>
            </div>
        </div>
    </div>
);
