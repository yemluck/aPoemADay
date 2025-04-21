// "use client";

import Link from "next/link";
import Form from "next/form";
import { createPoem } from "../action";

export default async function AdminPage() {
  return (
    <>
      <main>Admin Page</main>
      <Form className="bg-gray-50 m-4 border-2 text-black" action={createPoem}>
        <label htmlFor="title">Title: </label>
        <input
          className="bg-white border-red-700"
          type="text"
          id="title"
          name="title"
          required
        />
        <br></br>
        <label htmlFor="author">Author: </label>
        <input type="text" id="author" name="author" required />
        <br></br>
        <label htmlFor="poem">Poem: </label>
        <textarea id="poem" name="poem" required></textarea>
        <br></br>
        {/* <input type="submit" name="ADD" /> */}
        <button>Submit</button>
      </Form>
      <Link href={"/"}>
        <p>back</p>
      </Link>
    </>
  );
}
