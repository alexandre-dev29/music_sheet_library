/*
  Warnings:

  - You are about to drop the column `composer` on the `SheetMusic` table. All the data in the column will be lost.
  - You are about to drop the column `pdfUrl` on the `SheetMusic` table. All the data in the column will be lost.
  - You are about to drop the `AuthToken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `composerId` to the `SheetMusic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailId` to the `SheetMusic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uploadedById` to the `SheetMusic` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('USER', 'ADMIN', 'COMPOSER', 'SUPERADMIN');

-- DropForeignKey
ALTER TABLE "AuthToken" DROP CONSTRAINT "AuthToken_userId_fkey";

-- AlterTable
ALTER TABLE "SheetMusic" DROP COLUMN "composer",
DROP
COLUMN "pdfUrl",
ADD COLUMN     "composerId" TEXT NOT NULL,
ADD COLUMN     "numberOfDownloads" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "thumbnailId" TEXT NOT NULL,
ADD COLUMN     "uploadedById" TEXT NOT NULL,
ALTER
COLUMN "slug" DROP
NOT NULL,
ALTER
COLUMN "genre" DROP
NOT NULL,
ALTER
COLUMN "difficulty" DROP
NOT NULL;

-- AlterTable
ALTER TABLE "User"
    ADD COLUMN "role" "Roles" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "AuthToken";

-- CreateTable
CREATE TABLE "Composer"
(
    "id"            TEXT         NOT NULL,
    "name"          TEXT         NOT NULL,
    "birthDate"     TIMESTAMP(3),
    "biography"     VARCHAR,
    "authorImageId" TEXT,
    "createdAt"     TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"     TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Composer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorites"
(
    "userId"       TEXT         NOT NULL,
    "sheetMusicId" INTEGER      NOT NULL,
    "addedAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("userId", "sheetMusicId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Composer_name_key" ON "Composer" ("name");

-- CreateIndex
CREATE UNIQUE INDEX "Composer_birthDate_key" ON "Composer" ("birthDate");

-- CreateIndex
CREATE INDEX "Composer_name_idx" ON "Composer" ("name");

-- CreateIndex
CREATE INDEX "SheetMusic_title_idx" ON "SheetMusic" ("title");

-- AddForeignKey
ALTER TABLE "Composer"
    ADD CONSTRAINT "Composer_authorImageId_fkey" FOREIGN KEY ("authorImageId") REFERENCES "FileStorage" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SheetMusic"
    ADD CONSTRAINT "SheetMusic_thumbnailId_fkey" FOREIGN KEY ("thumbnailId") REFERENCES "FileStorage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SheetMusic"
    ADD CONSTRAINT "SheetMusic_composerId_fkey" FOREIGN KEY ("composerId") REFERENCES "Composer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SheetMusic"
    ADD CONSTRAINT "SheetMusic_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorites"
    ADD CONSTRAINT "Favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorites"
    ADD CONSTRAINT "Favorites_sheetMusicId_fkey" FOREIGN KEY ("sheetMusicId") REFERENCES "SheetMusic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
