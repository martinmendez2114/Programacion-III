/*
  Warnings:

  - You are about to drop the column `estudianteId` on the `Servicio` table. All the data in the column will be lost.
  - You are about to drop the column `fechaRegistro` on the `Usuario` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Servicio" DROP CONSTRAINT "Servicio_estudianteId_fkey";

-- AlterTable
ALTER TABLE "Servicio" DROP COLUMN "estudianteId";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "fechaRegistro";
