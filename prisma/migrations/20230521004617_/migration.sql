/*
  Warnings:

  - You are about to drop the column `isInClan` on the `river_race_participants` table. All the data in the column will be lost.
  - The `dateRef` column on the `river_race_participants` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "river_race_participants" DROP COLUMN "isInClan",
DROP COLUMN "dateRef",
ADD COLUMN     "dateRef" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
