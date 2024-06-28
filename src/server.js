const express = require("express"); // importar express

const app = express(); // Iniciar express

//  Método GET
app.get("/message/:id/:user", (request, response) => {
  //  O request recebe as informações enviadas pelo front/cliente para fazer esta 
  //  chamada, estamos recebendo o id como Route Params 
  //  O response é a resposta enviada pela chamada
  const { id, user } = request.params; 
  response.send(`Id da mensagem: ${id} para o usuário ${user}`);
})

app.get("/users/", (request, response) => {
  //Aqui já estamos recebemos os query params que são opcionais 
  const { page, limit } = request.query;
  response.send(`Página: ${page}. Mostrar ${limit}`);
})

const PORT = 3333; //Porta utilizada
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)) // Deixar o sv ouvindo na porta utilizada