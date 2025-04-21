// import { deletePoem } from "../action";

export function DeleteButton() {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 py-2 px-4 rounded mb-2.5"
    >
      Delete
    </button>
  );
}

export function EditButton() {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2.5 ml-2"
    >
      Edit
    </button>
  );
}
