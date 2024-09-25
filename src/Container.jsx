/* eslint-disable react/prop-types */
import { Button } from "./Button";

export const DiaryEntryCard = props => (
    <div
        className={
            "p-4 border-cyan-600 border-4 rounded-md w-full  max-w-lg text-white bg-amber-400"
        }
    >
        <h1 className="text-xl">{props.title}</h1>
        <h2>{props.entryDate.toLocaleDateString("de-DE")}</h2>
        <img src={props.imageUrl} className="rounded-md p-3" />
        <p>{props.entryContent}</p>
    </div>
);

export const Modal = props => (
    <div
        style={{
            background: "rgba(255, 255, 255, 0.31)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.2px)", // CSS backdrop filter for frosted effect
            WebkitBackdropFilter: "blur(7.2px)", // Safari-specific prefix
            border: "1px solid rgba(255, 255, 255, 0.3)",
            zIndex: 1000,
        }}
        className={`${
            props.isHidden ? "hidden" : ""
        } fixed inset-0 flex justify-center items-center`}
    >
        {props.children}

        <Button
            title="Close"
            onClicked={props.onCloseClicked}
            className="bg-cyan-600"
        />
    </div>
);
