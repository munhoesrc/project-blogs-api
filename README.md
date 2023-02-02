<hr />

<p align="center">
      <img alt="imagem do banco de dados" src="https://i.imgur.com/0u0qYqZ.png" />
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido usando as seguintes tecnologias:

-  [Docker](https://docs.docker.com/get-docker/)
-  [Sequelize](https://sequelize.org/)
-  [MySQL Workbench](https://www.mysql.com/products/workbench/)
-  [JSON Web Tokens](https://jwt.io/)
-  [VS Code](https://code.visualstudio.com/)

## :information_source: Como usar

Para clonar e rodar a aplicação, você precisará do [Git](https://git-scm.com), [VS Code](https://code.visualstudio.com/), [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) . Da linha de comando:

```bash
# Clone o repositório
$ git clone git@github.com:munhoesrc/project-blogs-api.git

# É necessário ter o docker e o docker compose instalados
$ docker --version
$ docker-compose --version

# Instale as dependêcias dentro do container docker
$ npm install

# Dentro do container docker rode os seguintes comandos
$ docker-compose up -d --build
$ docker drop && docker prestart && docker seed
$ docker exec -it blogs_api bash
$ docker run debug

```
Pronto! Com o servidor rodando na porta 3000 é possível testar requisições do tipo GET, POST, PUT, através de um cliente como [Thunder Client](https://www.thunderclient.com/) por exemplo.

<br/><br/>

<p>Projeto desenvolvido por:</p>
<ul>
  <li><a href="https://github.com/munhoesrc"/>Renan Casarin Munhoes</a></li>
</ul>

<br/><br/>

<p align="center">
  Criado e desenvolvido por <b>Renan Casarin Munhoes</b>
  <br/><br/>
  
  <a href="http://munhoesrc.me/">
    <img alt="portfolio" height="30px" src="https://i.imgur.com/7lbNPnj.png" />
  </a>
  &nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/renancasarinmunhoes/">
    <img alt="linkedIn" height="30px" src="https://i.imgur.com/TQRXxhT.png" />
  </a>
  &nbsp;&nbsp;
  <a href="mailto:munhoesrc@gmail.com?subject=website contact">
    <img alt="email" height="30px" src="https://i.imgur.com/wu7e3PJ.png" />
  </a>
</p>
