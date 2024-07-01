-- migrate:up
DROP TABLE IF EXISTS "images";

-- migrate:down
CREATE TABLE IF NOT EXISTS "images" (
  "id" SERIAL PRIMARY KEY,
  "id_product" INT NOT NULL,
  "image" VARCHAR NOT NULL
);

