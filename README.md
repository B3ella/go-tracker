# GoTracker (WIP)

Um app onde eu salvo ideias e objetivos que eu quero pensar sobre depois

<!---
 ## [Veja esse projeto](https://famous-tapioca-e544c4.netlify.app)
-->

## Stack

Esse app tá sendo construido com [create-t3-app](https://create.t3.gg/)

<<<<<<< HEAD
-   [Next.js](https://nextjs.org)
-   [NextAuth.js](https://next-auth.js.org)
-   [Prisma](https://prisma.io)
-   [Tailwind CSS](https://tailwindcss.com)
-   [tRPC](https://trpc.io)
=======
### tRPC (TypeScript Remote Procedure Call)
>>>>>>> 22c5bc93f951dddf83bc0b6dddc783413d0fe820

  A mágia mora aqui, essa biblioteca permite escrever todo o código do backend em typescript e mantelo realmente próximo do código do front-end

### Prisma 
  
  um orm typesafe , integra os esquemas da base de dados com os tipos esperados pelas chamadas do tRPC. (Pode ser substituído em produção por problemas para rodar em edge)

<<<<<<< HEAD
-   [Documentation](https://create.t3.gg/)
-   [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials
=======
### Tailwind 
>>>>>>> 22c5bc93f951dddf83bc0b6dddc783413d0fe820

  Simplesmente a melhor forma de escrever css. permite que os inline styles de forma clara e performatica
  
### NextAuth

  De certa forma esse é o elo fraco da corrente, por mais que (ainda) não tenha apresentado nenhum problema grave, a DX simplismente não é tão boa quanto o resto do stack

## Features

### prontas

* Autenticação de usuário oAuth (Nesse caso, login com google)
* crd para salvar e deletar metas e ideias 

### em andamento

* lista de metas concluidas e botão para concluir metas
* função de metas compartilhadas, onde uma lista de metas pode ser dividida entre um grupo de usuários
