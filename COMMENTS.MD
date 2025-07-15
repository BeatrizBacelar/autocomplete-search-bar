### Decisões tomadas e motivação.

- A arquitetura utilizada para organização das pastas/arquivos foi escolhida com base em experiências passadas, considerando, principalmente, a facilidade de visualização da função de cada arquivo para o projeto, manutenção e escalabilidade. 
Para editar estilização, os componentes das páginas principais possuem seus arquivos próprios e componentes também reutilizáveis (elementos de formulário, button) encontram-se em components. Pensando no futuro, pode ser mais interessante que cada componente possua seu próprio arquivo de estilização, não concentrando tudo no estilo da página. 
- O NodeJs foi escolhido para o backend por ter boa integração com o GraphQL e seguir com o uso do javascript / typescript também realizado no frontend.
- O uso do TypeScript foi importante para garantir um melhor processo de desenvolvimento, evitando dor de cabeça com passagem de parâmetro incorreto ou fora do tipo e entender bem o retorno dos dados pelo GraphQL, garantindo que estou utilizando-os da forma correta.
- Apesar de obrigatório, a experiência com o GraphQL nessa busca simultânea dos dados conforme a digitação do usuário foi muito importante para dinamicidade e velocidade de resposta do backend. Além disso, o uso do Docker para executar o backend e frontend com apenas um comando simplificou a forma de executar o projeto, sendo um aprendizado importante para projetos futuros. 

### Testes.
Foram realizados testes de todos os requisitos pontuados para o projeto como 
responsividade do layout com tamanhos diferentes de tela, incluindo tela de celular, limite de sugestões, mínimo de caracteres do termo de busca para exibir sugestões, quando clicar em uma sugestão o campo de busca ser atualizado com o valor dessa sugestão, entre outros. 

### Possíveis implementações

- Algo que implementaria com mais tempo seriam os styled components. O styled components ajudaria a trazer padronização para o projeto, pois observaria componentes que se repetem quanto à estilização e criaria para que fossem reaproveitados. Além disso, uma estruturação com nome específico para componentes traz maior clareza ao código.
- Implementaria testes unitários utilizando, por exemplo, o Cypress que traz facilidade nessa implementação e de forma geral os testes são importantes para garantir o funcionamento correto e o comportamento dos componentes da aplicação automatizando testes que são realizados manualmente e garantindo que com alterações na aplicação as funcionalidades antigas manterão seu comportamento adequado. 
- Poderia implementar o uso do banco de dados. Um arquivo JSON pode ser útil apenas para um MVC, mas poderia utilizar uma integração entre o Prisma e o SQLite.
 - Com a necessidade de tipar mais componentes, poderia utilizar interfaces para componentizar melhor o código e facilitar a manutenção. 
Ainda, o uso do Talwind poderia ser um facilitador para estilização e possibilitaria construir uma interface ainda mais amigável e adequada para os usuários. 

