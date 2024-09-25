import { useEffect, useState } from "react";

import { Card } from "./Card";

export const CardContainer = () => {
    const [fetchedData, setFetchedData] = useState([]); // Initialize with an empty array

    const fetchData = async () => {
        try {
            const response = localStorage.getItem("diaryData"); // No need to await here
            if (response) {
                const data = JSON.parse(response); // Parse the stored string into JSON
                setFetchedData(data); // Set the fetched data in state
                console.log("Fetched Data:", data); // Log the fetched data
            } else {
                console.error("No data found");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Log fetchedData after it is updated
    useEffect(() => {
        console.log("Updated fetchedData:", fetchedData);
    }, [fetchedData]);

    return (
        <div>
            <div className="flex mt-4 justify-center bg-[#0E0B14] max-w-screen-2xl mx-auto p-6 rounded-lg ring-4 ring-blue-500 ring-inset mb-4">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 bg-[#0E0B14] grid-rows-[1fr]">
                    {/* Check if fetchedData is not empty before mapping */}
                    {fetchedData.length > 0 ? (
                        fetchedData.map((data, index) => {
                            console.log("Mapped Data:", data); // Check each mapped object
                            return (
                                <Card
                                    key={index}
                                    imageUrl={data.imageUrl} // This should be defined
                                    title={data.title} // This should be defined
                                    content={data.content} // This should be defined
                                    date={data.date} // Use the stored date
                                />
                            );
                        })
                    ) : (
                        <p>No diary entries found.</p> // Message when there's no data
                    )}
                </div>
            </div>
            {/* ---------------------------------------------------------------- */}

            {/* ---------------------------------------------------------------- */}
        </div>
    );
};
