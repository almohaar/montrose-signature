/*
  Warnings:

  - You are about to drop the column `noOfReviews` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "noOfReviews",
ADD COLUMN     "reviews" INTEGER;
