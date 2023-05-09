-- CreateTable
CREATE TABLE "players" (
    "tag" TEXT NOT NULL,
    "clanTag" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "lastSeen" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "river_race_participants" (
    "id" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "clanTag" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fame" INTEGER NOT NULL,
    "decksUsed" INTEGER NOT NULL,
    "decksUsedToday" INTEGER NOT NULL,
    "missingAttacks" INTEGER NOT NULL,
    "isInClan" BOOLEAN NOT NULL DEFAULT false,
    "dateRef" TEXT NOT NULL,

    CONSTRAINT "river_race_participants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "players_tag_key" ON "players"("tag");
