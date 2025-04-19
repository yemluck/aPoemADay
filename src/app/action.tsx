"use server";

import pool from "./lib/server/db";

export async function createPoem(formData: FormData) {
  const title = formData.get("title");
  const author = formData.get("author");
  const poem = formData.get("poem");

  console.log("the poem author is", author);
  console.log("the poem title is", title);
  console.log("the poem is", poem);

  const queryText = `
    INSERT INTO "poems"
      (title, author, poem)
    VALUES
      ($1, $2, $3)
  `;

  const queryParams = [title, author, poem];

  const toPost = await pool.query(queryText, queryParams);
}
