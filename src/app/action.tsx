"use server";

import { revalidatePath } from "next/cache";
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

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const toPost = await pool.query(queryText, queryParams);
  } catch (err) {
    console.log("Error completing post", err);
  }
}

export async function deletePoem(id: number) {
  console.log("this is the id", id);

  const queryText = `
    DELETE FROM "poems"
    WHERE id = $1
  `;

  const queryParams = [id];

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const toDelete = await pool.query(queryText, queryParams);
  } catch (err) {
    console.log("Error deleting poem", err);
  }

  revalidatePath("/");
}

export async function editPoem(id: number) {
  console.log("in function editPoem", id);
}
