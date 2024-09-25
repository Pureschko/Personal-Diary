/* eslint-disable react/prop-types */

export const Button = props => (
    <button
        type="button"
        style={props.style}
        className=" bg-cyan-500 hover:bg-amber-400 text-white p-2 m-2 max-w-max rounded-md"
        onClick={props.onClicked}
    >
        {props.title}
    </button>
);
