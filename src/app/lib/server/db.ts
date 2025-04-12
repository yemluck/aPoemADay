import pg from "pg";
const { Pool } = pg;

let config = {};

config = {
  host: "localhost",
  port: 5432,
  database: "apoemaday",
  max: 20,
  idleTimeoutMillis: 30000,
};

const pool = new Pool(config);

// the pool will log when it connects to the database
pool.on("connect", () => {
  console.log("postgresql connected");
});

// this will log an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on("error", (err) => {
  console.log("unexpected error on idle client", err);
  process.exit(-1);
});

export default pool;
