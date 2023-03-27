import Link from "next/link";

export default function AddBoard() {
  return (
    <div className="bg-white flex place-items-center justify-center h-screen">
      <div className="border-2 rounded-lg bg-white p-10 border-gray-200">
        <input
          className="bg-white text-black flex border-2 rounded-lg p-2 w-80 mb-5"
          placeholder="Board Title"
        ></input>
        <input
          className="bg-white p-2 flex text-black border-2 rounded-lg w-80 h-36 mb-5"
          placeholder="Enter a description..."
        ></input>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-gray-100 text-blue-500 rounded-lg p-2 border-2 border-blue-500">
            Cancel
          </button>
          <button className="bg-blue-500 text-white rounded-lg p-2 border-2 border-blue-500">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
