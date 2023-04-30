/*
  Warnings:

  - You are about to drop the `friends` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `messages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "access";

-- DropForeignKey
ALTER TABLE "public"."friends" DROP CONSTRAINT "fk_friend";

-- DropForeignKey
ALTER TABLE "public"."messages" DROP CONSTRAINT "fk_conversation";

-- DropForeignKey
ALTER TABLE "public"."messages" DROP CONSTRAINT "fk_sender";

-- DropTable
DROP TABLE "public"."friends";

-- DropTable
DROP TABLE "public"."messages";

-- DropTable
DROP TABLE "public"."users";

-- CreateTable
CREATE TABLE "access"."role_actions" (
    "id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "action_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "updated_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "role_actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "access"."roles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "color" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "updated_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "access"."screen_actions" (
    "id" SERIAL NOT NULL,
    "screen_id" INTEGER NOT NULL,
    "action" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "updated_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "screen_actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "access"."screens" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "updated_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "screens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "access"."users" (
    "id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "email" VARCHAR(65) NOT NULL,
    "password" VARCHAR(300) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "updated_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "access"."roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "screen_actions_action_key" ON "access"."screen_actions"("action");

-- CreateIndex
CREATE UNIQUE INDEX "screens_name_key" ON "access"."screens"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "access"."users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "access"."users"("email");

-- AddForeignKey
ALTER TABLE "access"."role_actions" ADD CONSTRAINT "fk_action" FOREIGN KEY ("action_id") REFERENCES "access"."screen_actions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "access"."role_actions" ADD CONSTRAINT "fk_role" FOREIGN KEY ("role_id") REFERENCES "access"."roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "access"."screen_actions" ADD CONSTRAINT "fk_screen" FOREIGN KEY ("screen_id") REFERENCES "access"."screens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "access"."users" ADD CONSTRAINT "fk_role" FOREIGN KEY ("role_id") REFERENCES "access"."roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
