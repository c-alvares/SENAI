Instalação do Prisma de forma global, para utilização de ORM:

1) Abrir o prompt de commando e digitar:
2) npm i -g prisma
3) Para verificar se foi instalado, utilizar prisma -v

4) Consultar informações através do link:
https://www.prisma.io/docs/getting-started/quickstart

5) Instalar extensões prisma e prisma insider
6) prisma init --datasource-provider mysql => comando para criar o arquivo schema o qual é definido o corpo do bd(tabelas)
<!-- What is ORM in Node. js? ORM is the process of mapping between objects and relational database systems. Different database systems access data in myriad ways, and ORM helps you maintain objects even when the sources and apps they access change over time. -->

Link da documentação:
https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-fields

7) prisma migrate dev --name => comando para gerar o script