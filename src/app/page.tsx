import pool from "./lib/server/db";

export default async function Home() {
  const result = await pool.query(`SELECT * FROM "user"`);
  const display = result.rows;

  return (
    <>
      <button className="inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Admin
      </button>
      <h2>this is the home page</h2>

      <ul>
        {display.map((user) => {
          return (
            <li key={user.id}>
              <p>username: {user.username}</p>
              <p>user_type: {user.user_type}</p>
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
