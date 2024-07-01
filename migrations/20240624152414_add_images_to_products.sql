-- migrate:up
ALTER TABLE "products" ADD COLUMN "image" VARCHAR(255);

-- migrate:down
ALTER TABLE "products" DROP COLUMN "image";


