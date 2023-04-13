-- CreateTable
CREATE TABLE "MlbProduct" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "MlbProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BProduct" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "BProduct_pkey" PRIMARY KEY ("id")
);
