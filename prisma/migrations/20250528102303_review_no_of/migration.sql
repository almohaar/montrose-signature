/*
  Warnings:

  - You are about to drop the column `reviews` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "reviews",
ADD COLUMN     "noOfReviews" INTEGER;
