// "use client";

import Link from "next/link";
import Form from "next/form";
import { createPoem } from "../action";

export default async function AdminPage() {
  return (
    <>
      <main>Admin Page</main>
      <Form action={createPoem}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
        <br></br>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" required />
        <br></br>
        <label htmlFor="poem">Poem</label>
        <input type="text" id="poem" name="poem" required />
        <br></br>
        <input type="submit" name="submit" />
      </Form>
      <Link href={"/"}>
        <p>back</p>
      </Link>
    </>
  );
}

// I want to post.
/* 
1. I need a form to get my data
2. I need a way to store info from the form
3. I need a query to send the form to the database
4. I need to validate the input
5. Might make client component or use server action



<form action={submitPoem}>
  <label htmlFor="title">Title</label>
  <input type="text" id="title" name="title" required />
  <label htmlFor="author">Author</label>
  <input type="text" id="author" name="author" required />
  <label htmlFor="poem">Poem</label>
  <input type="text" id="poem" name="poem" required />
</form>

I could add a submit button component
**/
