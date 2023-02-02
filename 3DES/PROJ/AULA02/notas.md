Instalação do Prisma de forma global, para utilização de ORM:

01) Abrir o prompt de commando e digitar:
02) npm i -g prisma
03) Para verificar se foi instalado, utilizar prisma -v

04) Consultar informações através do link:
https://www.prisma.io/docs/getting-started/quickstart

05) Instalar extensões prisma e prisma insider
06) prisma init --datasource-provider mysql => comando para criar o arquivo schema o qual é definido o corpo do bd(tabelas) e o .env
07) Configurar o .env: 
    Substituir usuario, senha, host(se necessário), porta(se necessário), 

<!-- What is ORM in Node. js? ORM is the process of mapping between objects and relational database systems. Different database systems access data in myriad ways, and ORM helps you maintain objects even when the sources and apps they access change over time. -->

Link da documentação:
https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-fields

08) Prisma/client é instalado somente no projeto
09) Configurar os models
10) prisma migrate dev --name init => comando para gerar o script
11) Importar { PrismaClient }
12) Criar constante prisma