const Card = ({ imageUrl, title, content, date }) => {
    return (
        <div>
            <div className="relative w-auto bg-[#F0F1FA] rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <figure className="w-full h-48">
                    {/* Image section */}
                    <img
                        className="w-full h-full object-cover rounded-lg shadow-sm overflow-hidden"
                        src={imageUrl} // Dynamically set the image URL from props
                        alt={title} // Use title as alt text for accessibility
                    />
                    {/* Badge for the date */}
                    <div className="absolute top-2 right-3 bg-[#2B2D3A] text-white text-sm px-4 py-1 rounded-full">
                        {date}
                    </div>
                </figure>
                <div className="p-4">
                    {/* Title section */}
                    <h2 className="text-lg font-semibold mb-2 overflow-hidden text-ellipsis line-clamp-1">
                        {title}
                    </h2>
                    {/* Content section */}
                    <p className="text-gray-600 mb-4 overflow-hidden text-ellipsis line-clamp-1 ">
                        {content}
                    </p>
                    <div className="flex justify-end">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Preview
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
