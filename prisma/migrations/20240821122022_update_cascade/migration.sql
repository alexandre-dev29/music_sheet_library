-- DropForeignKey
ALTER TABLE "Favorites" DROP CONSTRAINT "Favorites_sheetMusicId_fkey";

-- DropForeignKey
ALTER TABLE "Favorites" DROP CONSTRAINT "Favorites_userId_fkey";

-- DropForeignKey
ALTER TABLE "SheetMusic" DROP CONSTRAINT "SheetMusic_composerId_fkey";

-- AddForeignKey
ALTER TABLE "SheetMusic"
    ADD CONSTRAINT "SheetMusic_composerId_fkey" FOREIGN KEY ("composerId") REFERENCES "Composer" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorites"
    ADD CONSTRAINT "Favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorites"
    ADD CONSTRAINT "Favorites_sheetMusicId_fkey" FOREIGN KEY ("sheetMusicId") REFERENCES "SheetMusic" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
