/*
  Warnings:

  - You are about to drop the column `clienteId` on the `SolicitudServicio` table. All the data in the column will be lost.
  - You are about to drop the column `servicioId` on the `SolicitudServicio` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SolicitudServicio" DROP CONSTRAINT "SolicitudServicio_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "SolicitudServicio" DROP CONSTRAINT "SolicitudServicio_servicioId_fkey";

-- AlterTable
ALTER TABLE "SolicitudServicio" DROP COLUMN "clienteId",
DROP COLUMN "servicioId";
