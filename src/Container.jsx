/* eslint-disable react/prop-types */
import { Button } from "./Button";

export const DiaryEntryCard = props => (
    <div
        className={
            "p-4 rounded-md w-full  max-w-lg  text-white bg-card-color"
        }
    >
        <h1 className="text-xl">{props.title}</h1>
        <h2>{props.entryDate}</h2>
        <img src={props.imageUrl} className="rounded-md p-3" />
        <p>{props.entryContent}</p>
    </div>
);

export const Modal = props => (
    <div
        style={{
            background: "rgba(24, 26, 42, 0.8)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.2px)", // CSS backdrop filter for frosted effect
            WebkitBackdropFilter: "blur(7.2px)", // Safari-specific prefix
            zIndex: 1000,
        }}
        className={`${
            props.isHidden ? "hidden" : ""
        } fixed inset-0 flex justify-center  items-center`}
    >
        {props.children}

        <Button
            title="Close"
            onClicked={props.onCloseClicked}
            className="bg-cyan-600"
        />
    </div>
);
