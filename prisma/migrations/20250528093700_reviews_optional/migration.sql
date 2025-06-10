-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "BookingStatus" ADD VALUE 'COMPLETED';
ALTER TYPE "BookingStatus" ADD VALUE 'CHECKED_IN';
ALTER TYPE "BookingStatus" ADD VALUE 'CHECKED_OUT';
ALTER TYPE "BookingStatus" ADD VALUE 'NO_SHOW';
ALTER TYPE "BookingStatus" ADD VALUE 'REFUNDED';
ALTER TYPE "BookingStatus" ADD VALUE 'IN_PROGRESS';
ALTER TYPE "BookingStatus" ADD VALUE 'INACTIVE';
ALTER TYPE "BookingStatus" ADD VALUE 'ACTIVE';
ALTER TYPE "BookingStatus" ADD VALUE 'EXPIRED';
ALTER TYPE "BookingStatus" ADD VALUE 'UNDER_MAINTENANCE';

-- AlterTable
ALTER TABLE "Room" ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "reviews" DROP NOT NULL;
