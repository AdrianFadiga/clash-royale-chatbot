-- CreateTable
CREATE TABLE "server_logs" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "server_logs_pkey" PRIMARY KEY ("id")
);
