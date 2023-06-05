-- CreateTable
CREATE TABLE "cavalo" (
    "id" SERIAL NOT NULL,
    "nome_cientifico" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "domestico" BOOLEAN NOT NULL,
    "idade_vive" INTEGER NOT NULL,

    CONSTRAINT "cavalo_pkey" PRIMARY KEY ("id")
);
