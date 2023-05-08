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
    "tag" TEXT NOT NULL,
    "clanTag" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fame" INTEGER NOT NULL,
    "decksUsed" INTEGER NOT NULL,
    "decksUsedToday" INTEGER NOT NULL,
    "missingAttacks" INTEGER NOT NULL,
    "isInClan" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "players_tag_key" ON "players"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "river_race_participants_tag_key" ON "river_race_participants"("tag");
