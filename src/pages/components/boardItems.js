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
          <div className="mt-6 border-2 rounded-md p-2">
            <h1 className="font-bold text-lg">Log in Page</h1>
            <p>Description Here</p>
          </div>
          <Link href="/components/boardItem">
            <div className="mt-6">
              <p>+ Add a card</p>
            </div>
          </Link>
        </div>
        <div className="border-gray-300 border-2 rounded-lg p-5">
          <p className="font-bold text-lg">For Review</p>
          <p>Descrition Here</p>
          <div className="mt-6">+ Add a card</div>
        </div>

        <div className="border-gray-300 border-2 rounded-lg p-5">
          <p className="font-bold text-2xl text-center">+</p>
        </div>
      </div>
    </div>
  );
}
