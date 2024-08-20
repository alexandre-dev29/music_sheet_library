-- CreateTable
CREATE TABLE "User"
(
    "id"          TEXT         NOT NULL,
    "phoneNumber" TEXT         NOT NULL,
    "password"    TEXT         NOT NULL,
    "name"        TEXT,
    "biography"   VARCHAR      NOT NULL,
    "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"   TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthToken"
(
    "token"      TEXT         NOT NULL,
    "userId"     TEXT         NOT NULL,
    "createdAt"  TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validUntil" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AuthToken_pkey" PRIMARY KEY ("token")
);

-- CreateTable
CREATE TABLE "SheetMusic"
(
    "id"          SERIAL       NOT NULL,
    "title"       TEXT         NOT NULL,
    "slug"        TEXT         NOT NULL,
    "composer"    TEXT         NOT NULL,
    "arranger"    TEXT,
    "instrument"  TEXT         NOT NULL,
    "genre"       TEXT         NOT NULL,
    "difficulty"  TEXT         NOT NULL,
    "description" TEXT,
    "year"        TEXT,
    "fileId"      TEXT         NOT NULL,
    "pdfUrl"      TEXT         NOT NULL,
    "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"   TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SheetMusic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FileStorage"
(
    "id"              TEXT         NOT NULL,
    "bucket"          TEXT         NOT NULL,
    "fileKey"         TEXT         NOT NULL,
    "fileCompleteUrl" TEXT         NOT NULL,
    "createdAt"       TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"       TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FileStorage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User" ("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "AuthToken_token_key" ON "AuthToken" ("token");

-- AddForeignKey
ALTER TABLE "AuthToken"
    ADD CONSTRAINT "AuthToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SheetMusic"
    ADD CONSTRAINT "SheetMusic_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "FileStorage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
