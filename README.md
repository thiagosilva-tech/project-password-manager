# Projeto Password Manager

Este projeto é uma aplicação que permite aos usuários gerenciar suas senhas de forma segura e eficiente. O objetivo é praticar a escrita de funções JavaScript, incluindo o uso de parâmetros, retorno de valores, e casos de teste.

## Tecnologias Utilizadas

- TypeScript: Utilizado para implementar as funções.
- React.js: Uma biblioteca JavaScript para criar interfaces de usuário.
- CSS: Usado para estilizar os componentes da aplicação.

## Requisitos do Projeto

- **Componente Form**: Crie um componente chamado Form. Esse componente deve ser renderizado no App e deve possuir um input do tipo text com o texto Nome do serviço como label, um input do tipo text com o texto Login como label, um input do tipo password com o texto Senha como label, um input do tipo text com o texto URL como label, um button com o texto Cadastrar e um button com o texto Cancelar.

- **Renderização Condicional do Formulário**: Inicialmente a aplicação deverá exibir apenas o botão com o texto "Cadastrar nova senha". Ao clicar no botão "Cadastrar nova senha", ele deverá desaparecer e o componente Form deverá ser renderizado. Ao clicar no botão do formulário com o texto Cancelar, o formulário desaparece e o botão com o texto "Cadastrar nova senha" é exibido novamente.

- **Validação dos Campos do Formulário**: O botão Cadastrar do formulário só poderá estar habilitado caso todas as verificações a seguir sejam atendidas. O input com o "nome do serviço" deve estar preenchido. O input com o "login" deve estar preenchido. O input com a "senha" deve estar preenchido. A senha deve ter no mínimo 8 caracteres. A senha deve ter no máximo 16 caracteres. A senha deve ter letras e números. A senha deve ter algum caractere especial. Caso alguma das verificações acima não seja atendida, o botão Cadastrar deverá estar desabilitado.

- **Display para a Validação da Senha**: Quando o formulário for renderizado, as seguintes mensagens também deverão ser renderizadas na tela: "Possuir 8 ou mais caracteres", "Possuir até 16 caracteres", "Possuir letras e números", "Possuir algum caractere especial".

- **Função do Botão "Cadastrar" do Formulário**: Implemente a função "Cadastrar" do formulário, de modo que a aplicação liste todos os serviços cadastrados. Se nenhum serviço estiver cadastrado, a mensagem "Nenhuma senha cadastrada" deverá ser renderizada na tela. Ao clicar no botão "Cadastrar" do formulário, as informações do serviço deverão ser renderizadas da seguinte forma: O Nome do serviço deverá ser renderizado dentro de um link que, quando clicado, deverá direcionar a pessoa usuária para a URL cadastrada. O Login cadastrado deverá ser renderizado. A Senha cadastrada deverá ser renderizada e estar visível. Deve ser possível cadastrar mais de um serviço. Ao cadastrar um novo serviço, este deve aparecer ao final da lista. Após cadastrar um novo serviço, o formulário deverá desaparecer e o botão com o texto "Cadastrar nova senha" deverá ser renderizado.

- **Permita Apagar um Serviço Cadastrado**: Para cada serviço cadastrado, adicione um botão que, ao ser clicado, remove da lista o serviço correspondente. Esse botão deve ter o atributo data-testid="remove-btn". Caso todos os serviços cadastrados sejam removidos, a mensagem "Nenhuma senha cadastrada" deverá ser renderizada.

- **Implemente um Checkbox para Esconder/Mostrar as Senhas**: A aplicação deve renderizar um input do tipo checkbox e que tenha uma label com o texto "Esconder senhas". Esse checkbox deve começar desmarcado. Com o checkbox desmarcado, todas as senhas cadastradas devem estar visíveis. Com o checkbox marcado, todas as senhas cadastradas devem estar "escondidas", renderizando exatamente o seguinte texto: ******.

- **No Formulário, Implemente um Botão para Esconder/Mostrar a Senha que está sendo Digitada**: Crie outro botão no formulário. Adicione o atributo data-testid="show-hide-form-password". Ao ser clicado, o input com a label Senha deverá ter seu tipo alterado de "password" para "text", de modo que a senha fique visível. Ao ser clicado, caso o input esteja com o tipo "text", seu tipo deve ser alterado para "password, de modo que a senha fique escondida.

- **Exibe um Alerta ao Cadastrar um Novo Serviço Corretamente**: Ao clicar no botão "Cadastrar" do formulário, utilize a biblioteca sweetalert2 para mostrar um alerta que informe à pessoa usuária que um novo serviço foi cadastrado. O alerta deverá desaparecer após 1500ms (1.5 segundo). Mostrar a mensagem "Serviço cadastrado com sucesso".

## Conclusão

O Gerenciador de Senhas é uma ferramenta poderosa para gerenciar suas senhas de forma segura e eficiente. Com a capacidade de cadastrar informações de login de diferentes serviços e um sistema robusto de validação de senha, você pode ter certeza de que suas senhas estão seguras. Esperamos que você encontre este gerenciador de senhas útil e fácil de usar. Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.
