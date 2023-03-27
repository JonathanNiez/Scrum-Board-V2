import Link from "next/link";

export default function BoardItems() {
  return (
    <div className="bg-white p-10 h-screen">
      <h1 className="text-black text-left text-4xl font-bold mb-5">
        Title of Board
      </h1>

      <div className="grid gap-5 grid-cols-3 text-black">
        <div className=" border-gray-300 border-2 rounded-lg p-5">
          <p className="font-bold text-lg">Todo</p>
          <div className="mt-6 p-2">
            <input
              className="text-lg bg-white p-2 w-full mb-3 border-2 rounded-md"
              placeholder="Card Title..."
            />
            <input
              className="text-lg bg-white p-2 w-full border-2 h-28 rounded-md "
              placeholder="Enter a Description..."
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2">
            <Link
              href="/"
              className="bg-gray-100 text-blue-500 text-center rounded-lg p-2 border-2 border-blue-500"
            >
              Cancel
            </Link>
            <Link
              href="/"
              className="bg-blue-500 text-white text-center rounded-lg p-2 border-2 border-blue-500"
            >
              Add
            </Link>
          </div>
        </div>
        <div className="border-gray-300 border-2 rounded-lg p-5">
          <p className="font-bold text-lg">For Review</p>
          <p>Descrition Here</p>
          <div className="mt-6">
            <p>+ Add a card</p>
          </div>
        </div>
        <div className="border-gray-300 border-2 rounded-lg p-5">
          <p className="font-bold text-2xl text-center">+</p>
        </div>
      </div>
    </div>
  );
}
