
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const venom = require('venom-bot');

    //Cria a sessão do ChatBot
    venom
      .create({
        session: 'Atividade Pilates' //Nome da sessão do ChatBot
      })
      .then((client) => start(client))
      .catch((erro) => {
        console.log(erro);
      });
    
    //Começa o Script por uma mensagem pré definida
    function start(client) {
      client.onMessage((message) => {
        if (message.body === 'Olá' && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Olá e seja muito bem-vindo à atividade de Pilates, a maior academia de Pilates da Aclimação! Sou um ChatBot e estou aqui para te ajudar e tornar sua experiência ainda melhor e mais rápida! 😁')
                .then((result) => {
                console.log('Result: ', result); // retorna sucesso
                })
                .catch((erro) => {
                console.error('Error when sending: ', erro); // retorna erro
                });
            
            // Botões prédefinidos para escolha do clinte
            const buttons = [
                {
                    "buttonText": {"displayText": "Horário de funcionamento"}
                },
    
                {
                    "buttonText": {"displayText": "Valores"}
                },
    
                {
                    "buttonText": {"displayText": "Localização"}
                },
    
                {
                    "buttonText": {"displayText": "Sobre nossos professores"}
                },
    
                {
                    "buttonText": {"displayText": "Marcar aula experimental"}
                },
    
                {
                    "buttonText": {"displayText": "Continua com dúvidas? Fale com o recepcionista"}
                },
                  
                    
                ]
                client.sendButtons(message.from, 'Como posso te ajudar?', buttons, 'Selecione a opção abaixo')
                .then((result) => {
                  console.log('Result: ', result); //retorna sucesso
                })
                .catch((erro) => {
                  console.error('Error when sending: ', erro); //retorna erro
                });
        };
    
    
        //Horário de funcionamento
        if(message.body === "Horário de funcionamento" && message.isGroupMsg === false) {
             client.reply(
                message.from,
                'Segunda a Quinta-feira das 06:00 ás 22:00. Sexta feira das 06:00 ás 21:00h! 😁',
                message.id.toString()
              );
        }
    
        //Valores
        if(message.body === "Valores" && message.isGroupMsg === false) {
          client
          .sendImage(
            message.from,
            'IMG/Valores.jpeg',
            'Valores.jpeg',
            'Baseamos nossos valores na quantidade de aulas por semana, proporcionando flexibilidade para escolher entre 1, 2 ou 3 aulas semanais. Oferecemos planos anuais, semestrais e trimestrais, além da opção de aulas avulsas, e aceitamos com alegria o GymPass Gold Plus! 😁'
          )
          .then((result) => {
            console.log('Result: ', result); //retorna sucesso
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //retorna erro
          });
        }
        
        
        //Localização Atividade Pilates
        if (message.body === "Localização" && message.isGroupMsg === false) {
            client.sendText(message.from, 'Nós estamos localizados na: Rua Macaraí 119 - Aclimação! 😁')
            client
                .sendLocation(message.from, '-23.57166172493', '-46.627137127006', 'Atividade Pilates - Parque da Aclimação')
                .then((result) => {
                    console.log('Result: ', result); //retorna sucesso
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //retorna erro
                });
        }
    
        //Sobre os professores
        if(message.body === "Sobre nossos professores" && message.isGroupMsg === false) {
            client.reply(
               message.from,
               'Na nossa academia de Pilates na Aclimação, garantimos a excelência em cada sessão. Contamos com uma equipe de profissionais altamente qualificados, composta por experientes professores de Educação Física e Fisioterapeutas dedicados ao seu bem-estar. Em nosso compromisso com a qualidade, asseguramos que você receberá um acompanhamento personalizado e especializado em cada aula. Nossos instrutores são escolhidos criteriosamente, não apenas pela sua expertise, mas também pela sua paixão em proporcionar uma experiência de Pilates única e transformadora.😁',
               message.id.toString()
             );
       }
    
       //Falar com atendente
       if(message.body === "Continua com dúvidas? Fale com o recepcionista" && message.isGroupMsg === false) {
            client.reply(
                message.from,
                'Ótimo! Já encaminhei a conversa para o nosso atendimento humanizado! Assim que possivel ele entrará em contato! Foi um prazer te ajudar!',
                message.id.toString()
            );
        }
        
       //Marcar aula experimental  
       if(message.body === "Marcar aula experimental" && message.isGroupMsg === false) {
         client.reply(
           message.from,
           'Ficamos felizes que você queira *marcar uma aula conosco*! Vou passar para um atendente, assim que possivel ele entrará em contato para marcar a aula!',
           message.id.toString()
           );
           
            console.log(message.body)    
            console.log(message.from)    
            console.log(message.id.toString())    
        }
        
    
    
    
        //teste para enviar imagens
        if (message.body === "teste8" && message.isGroupMsg === false) {
            client.sendSeen(message.from);
        }
    
        
    
      });
    }
    
})

app.listen(process.env.PORT || 3000)