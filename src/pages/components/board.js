export default function Board() {
  return (
    <div className="bg-white p-10">
      <h1 className="text-black text-left text-lg font-bold mb-5">Boards</h1>

      <div className="grid gap-5 grid-cols-3 text-black">
        <div className=" border-gray-300 border-2 rounded-lg p-5">
          <p className="font-bold text-lg">Thesis of the Project</p>
          <p>Scrumboard that enoeasdfasdf</p>
        </div>
        <div className="border-gray-300 border-2 rounded-lg p-5">
          <p className="font-bold text-lg">Title of Board</p>
          <p>Descrition Here</p>
        </div>
        <div className="border-gray-300 border-2 rounded-lg p-5">
          <p className="font-bold text-lg">Title of Board</p>
          <p>Descrition Here</p>
        </div>
      </div>
    </div>
  );
}
