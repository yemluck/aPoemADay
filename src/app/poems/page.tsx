import Link from "next/link";
import pool from "../lib/server/db";

export default async function Poems() {
  const poems = await pool
    .query(`SELECT * FROM "poems"`)
    .then((res) => res.rows);

  return (
    <ul className="mx-2 text-1xl text-white">
      {poems.map((poem) => {
        return (
          <Link key={poem.id} href={`/poems/${poem.id}`}>
            <li key={poem.id} className="mb-5">
              <b>Title: {poem.title}</b>
              <br></br>
              <b>Author: {poem.author}</b>
              <br></br>
              <b>{poem.poem}</b>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
