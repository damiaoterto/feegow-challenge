# Resumo do projeto
Um simples projeto que tem como núcleo a API da Feegow, para buscar alguns dados, e insere os dados enviados via formulário em um banco de dados relacional **PostgresSQL**, onde irá representar um pedido de agendamento.

#  Tecnologias Usadas

 - PHP 7.4
 - Laravel Framework 7
 - Docker e Docker Compose
 - Reactjs

# Subindo os ambientes
Com o `Docker` e `Docker Compose` instalado na máquina, execute o comando `docker-compose up -d --build`, para fazer o build das imagens e criação dos containers, certifique-se que as portas `8000` e `3000` da sua máquina estejam liberadas.

Para instalação das dependências do projeto **PHP** execute o comando **composer install** em sua máquina, caso não tenha o Composer instalado na máquina execute o comando via Docker `docker-compose exec application composer install`.

Após realizar a instalação das dependências do projeto, execute `docker-compose exec application php artisan migrate` para criar toda a estrutura do banco de dados.

O **front-end** da aplicação estará rodando na url `http://localhost:3000` e o **back-end** na url `http://localhost:8000`.

Alguns campos do formulário ao ser enviados para o banco tais como **nome** e **CPF**, estarão com uma criptografia `OpenSSL AES-256-CBC`, considerando que se trada de dados sensíveis dos pacietes.

# Feedback
Sugestões, críticas ou erros entrar em contato com hi@damiaojunior.me