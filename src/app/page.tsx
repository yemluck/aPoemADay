import pool from "./lib/server/db";
import Link from "next/link";
import { DeleteButton, EditButton } from "./components/delete";
import { deletePoem, editPoem } from "./action";

export default async function Home() {
  const result = await pool.query(`SELECT * FROM "poems"`);
  const display = result.rows;

  return (
    <>
      <Link href={"/admin"}>
        <p className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5 mt-3 w-xs">
          Admin
        </p>
      </Link>

      <Link href={"/poems"}>
        <p className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5 mt-3 w-xs">
          Poems
        </p>
      </Link>

      <ul>
        {display.map((poem) => {
          return (
            <li key={poem.id} className="mb-5">
              <b>Title: {poem.title}</b>
              <br></br>
              <p>{poem.poem}</p>
              <i>
                <u>Author: {poem.author}</u>
              </i>
              <br></br>
              <div className="flex">
                <form action={deletePoem.bind(null, poem.id)}>
                  <DeleteButton />
                </form>
                <Link href={"/editPoem"}>
                  <form action={editPoem.bind(null, poem.id)}>
                    <EditButton />
                  </form>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// This works and should be in the export function when ready
/* 
  const postStuff = await pool.query(`
  INSERT INTO "poems"
    (title, author, poem)
  VALUES
    ('abc', 'general', 'I am happy')
  `);
*/
