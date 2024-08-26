/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `SheetMusic` will be added. If there are existing duplicate values, this will fail.
  - Made the column `slug` on table `SheetMusic` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "SheetMusic"
    ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SheetMusic_slug_key" ON "SheetMusic" ("slug");
