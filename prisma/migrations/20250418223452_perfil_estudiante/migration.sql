/*
  Warnings:

  - You are about to drop the column `portafolio` on the `PerfilEstudiante` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `PerfilEstudiante` table. All the data in the column will be lost.
  - Made the column `descripcion` on table `PerfilEstudiante` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "PerfilEstudiante" DROP CONSTRAINT "PerfilEstudiante_usuarioId_fkey";

-- DropIndex
DROP INDEX "PerfilEstudiante_usuarioId_key";

-- DropIndex
DROP INDEX "Usuario_email_key";

-- AlterTable
ALTER TABLE "PerfilEstudiante" DROP COLUMN "portafolio",
DROP COLUMN "usuarioId",
ALTER COLUMN "descripcion" SET NOT NULL;
