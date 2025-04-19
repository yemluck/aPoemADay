// "use client";

import Link from "next/link";
import pool from "../lib/server/db";

export default async function AdminPage() {
  const queryText = `
    INSERT INTO "poems"
      (title, author, poem)
    VALUES
      ($1, $2, $3)
  `;

  const queryParams = ["abc", "def", "ghi"];

  const toPost = await pool.query(queryText, queryParams);

  return (
    <>
      <main>Admin Page</main>
      <Link href={"/"}>
        <p>back</p>
      </Link>
    </>
  );
}
