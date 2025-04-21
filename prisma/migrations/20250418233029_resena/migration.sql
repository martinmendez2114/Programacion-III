/*
  Warnings:

  - You are about to drop the column `duracionEstimada` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `precio` on the `Servicio` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Servicio" DROP COLUMN "duracionEstimada",
DROP COLUMN "precio";
