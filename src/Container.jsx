/* eslint-disable react/prop-types */
import { Button } from "./Button";

export const DiaryEntryCard = (props) => (
    <div
        className={`${
            props.isHidden ? "hidden" : ""
        } p-4 border-cyan-600 border-4 rounded-md  bg-amber-300`}
    >
        <h1>{props.title}</h1>
        <h2>{props.entryDate.toLocaleDateString("de-DE")}</h2>
        <img src={props.imageUrl} className="object-contain rounded-md p-3" />
        <p>{props.entryContent}</p>
        <Button title="Close" onClicked={props.onCloseClicked} />
    </div>
);
