-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Img" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "idPR" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "NamePR" TEXT NOT NULL,
    "Icone" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
