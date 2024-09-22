/* eslint-disable react/prop-types */

export const DiaryEntryCard = (props) => (
    <div className=" p-4 border-cyan-600 border-4 rounded-md  bg-yellow-50">
        <h1>{props.title}</h1>

        <h2>{props.entryDate.toLocaleDateString("de-DE")}</h2>

        <img src={props.imageUrl} className="object-contain rounded-md p-3" />

        <p>{props.entryContent}</p>
    </div>
);
