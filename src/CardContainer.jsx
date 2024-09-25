/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Card } from "./Card";

export const CardContainer = ({ onPreviewClicked }) => {
    // FIXME naming
    const [fetchedData, setFetchedData] = useState([]); // Initialize with an empty array

    const readDiaryEntries = async () => {
        try {
            const diaryEntries = Object.keys(localStorage)
                .map(key => localStorage.getItem(key))
                .map(JSON.parse);

            setFetchedData(diaryEntries);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        readDiaryEntries();
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
                        fetchedData.map((data, index) => (
                            <Card
                                key={index}
                                imageUrl={data.imageUrl} // This should be defined
                                title={data.title} // This should be defined
                                content={data.content} // This should be defined
                                date={data.date} // Use the stored date
                                onPreviewClicked={() =>
                                    onPreviewClicked(data.id)
                                }
                            />
                        ))
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
