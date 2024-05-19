-- migrate:up
CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "full_name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(100) NOT NULL UNIQUE,
  "password" VARCHAR(100) NOT NULL,
  "role" VARCHAR(100) NOT NULL,
  "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "deleted_at" TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "products" (
  "id" SERIAL PRIMARY KEY,
  "id_user" INT NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "description" VARCHAR(255),
  "price" DECIMAL(10,2) NOT NULL,
  "category" VARCHAR(100) NOT NULL,
  "quantity" DECIMAL(10,2) NOT NULL,
  "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "deleted_at" TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "orders" (
  "id" SERIAL PRIMARY KEY,
  "id_user" INT NOT NULL,
  "id_product" INT NOT NULL,
  "quantity" DECIMAL(10,2) NOT NULL,
  "order_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "total_price" DECIMAL(10,2) NOT NULL,
  "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "deleted_at" TIMESTAMP
);

ALTER TABLE "products" ADD FOREIGN KEY ("id_user") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE "orders" ADD FOREIGN KEY ("id_product") REFERENCES "products" ("id") ON DELETE CASCADE;

ALTER TABLE "orders" ADD FOREIGN KEY ("id_user") REFERENCES "users" ("id") ON DELETE CASCADE;
-- migrate:down

DROP TABLE IF EXISTS "orders";
DROP TABLE IF EXISTS "products";
DROP TABLE IF EXISTS "users";