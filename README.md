<h1 align="center">
  <!-- <img src="" height="300" width="300" alt="" /><br> -->
  Controle de Estacionamento
</h1>

Sistema para gerenciamento reserva e listagem de vagas de um estacionamento.


## Descrição

Esse projeto consiste em uma aplicação web para controle do estacionamento de um condominio (fictício). Desenvolvida utilizando apenas HTML, CSS e JavaScript, possibilita a visualização das vagas e sua disponibilidade, além do cadastramento de reservas com informações dos veículos e seus proprietários. Suas principais funcionalidades consistem em:

- Listagem de vagas
- Cadastro de reserva de vaga
- Listagem de reservas de vagas

## Tecnologias
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E)

## Arquitetura

Esse projeto consiste em uma aplicação Web com a arquitetura baseada no padrão **MVC (Model-View-Controller)**. A divisão e responsabilidade das camadas é a seguinte:

- **View**: É responsável por possibilitar a comunicação entre o usuário e a aplicação através da interface.

- **Controller**: Coleta as interações do usuário com a view, realiza processamentos e faz requisições ao modelo, recebendo respostas que serão também processadas e por fim devolvendo isso para a view.

- **Model**: Realiza o armazenamento dos dados. Interage com o controller para enviar ou receber dados.

A aplicação é <u>composta exclusivamente pelo frontend</u>, ou seja, não há backend ou banco de dados. O armazenamento de dados será realizado localmente no navegador, e para os dados fixos, através de arquivo **JSON** para simular a response de uma **API**.