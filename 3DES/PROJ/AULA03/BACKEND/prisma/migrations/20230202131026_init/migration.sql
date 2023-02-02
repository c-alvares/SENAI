-- CreateTable
CREATE TABLE `Setor` (
    `id_setor` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `comissao` DOUBLE NOT NULL,

    PRIMARY KEY (`id_setor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produtos` (
    `id_produtos` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `id_setor` INTEGER NOT NULL,

    PRIMARY KEY (`id_produtos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendedor` (
    `id_vendedor` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `salario` DOUBLE NOT NULL,
    `id_setor` INTEGER NOT NULL,

    PRIMARY KEY (`id_vendedor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produtos` ADD CONSTRAINT `Produtos_id_setor_fkey` FOREIGN KEY (`id_setor`) REFERENCES `Setor`(`id_setor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendedor` ADD CONSTRAINT `Vendedor_id_setor_fkey` FOREIGN KEY (`id_setor`) REFERENCES `Setor`(`id_setor`) ON DELETE RESTRICT ON UPDATE CASCADE;
