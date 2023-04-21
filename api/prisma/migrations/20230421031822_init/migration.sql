-- CreateTable
CREATE TABLE "friends" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "user_friend_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "updated_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "friends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "conversation_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "updated_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "password" VARCHAR(300) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "updated_at" TIMESTAMP(6) DEFAULT (now())::timestamp without time zone,
    "deleted_at" TIMESTAMP(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "friends" ADD CONSTRAINT "fk_friend" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "fk_conversation" FOREIGN KEY ("conversation_id") REFERENCES "friends"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "fk_sender" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
