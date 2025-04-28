import pool from "@/app/lib/server/db";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PoemDetails({
  params,
}: {
  params: { poem: string };
}) {
  // console.log("this is the params", await params.poem);

  const { poem } = params;

  const poemDetail = await pool
    .query(`SELECT * FROM "poems" WHERE "id" = ${poem}`)
    .then((res) => res.rows[0]);

  // if bad routes is entered, call not found function
  if (!poemDetail) {
    notFound(); // throw 404 error if poem is not found
  }

  return (
    <>
      <p>{poemDetail.id}</p>
      <p>{poemDetail.poem}</p>
      <p>{poemDetail.author}</p>

      <div className="flex-col gap-2">
        <Link href={"/poems"}>
          <button className="gap-2 my-2 mr-2 hover:bg-blue-200 bg-blue-600 text-white rounded-3xl">
            Back
          </button>
        </Link>
        <button>Edit</button>
      </div>
    </>
  );
}
