/* eslint-disable react/prop-types */

export const Button = (props) => (
    <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
    >
        {props.title}
    </button>
);
