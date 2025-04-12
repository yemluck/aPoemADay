-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- Database name is apoemaday

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (20) UNIQUE NOT NULL,
  "user_type" VARCHAR (10) NOT NULL
);

CREATE TABLE "poems" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR (100) NOT NULL,
  "author" VARCHAR (100) NOT NULL,
  "poem" TEXT NOT NULL
);