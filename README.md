# FRONT-AUTH
Teste do contexto de autenticação no front, com React-TS.

Projeto desenvolvido em React JS, utilizando o Vite (ferramenta de construção web), as melhores práticas de estruturação de projetos, e a linguagem Typescript como template (React-TS).

Este realiza a autenticação de usuários em meu próprio back-end (também salvo aqui no GitHub) e priva rotas específicas somente à usuários já logados. A validação é feita através de interfaces e métodos TS que são disponibilizados à aplicação por meio do Hook “useContext”, que dá acesso de acordo com os resultados obtidos da Api.

Todas as pastas estão organizadas de acordo com as suas funções, já seguindo os padrões da comunidade React. E todo o código já está comentado, para facilitar o entendimento.

O Site também possui um “Menu dinâmico” criado em formato de “NavBar”, feito com o framework BootStrap. Ele é responsável por renderizar os elementos (botões e opções) condicionalmente, de acordo com o tipo de permissão que o usuário dispõe. Neste caso, foram considerados somente os tipos: Adm, Entity e Viewer; e são seus respectivos cadastros, no meu banco:

E-mail - adm@email.com | Password – 1234 | Type - admin

E-mail - entity@email.com | Password – 1234 | Type - entity

O botão de “sair” só é disponibilizado quando um usuário está logado, assim como o de “entrar” só fica visível quando não há um.

Já o botão “cadastrar” só permite que o usuário realize as ações que lhe são providas. Assim sendo, o “Admin” possui todas as opções e o “Entity” só algumas. O “Viewer” pode literalmente apenas ver informações.

Todo esse contexto do menu Navbar é determinado pelo valor retornado como “type” da base de dados e armazenado no localstorage, juntamente com o e-mail e o “token” (que nesse caso, retorna apenas um “y” ou “n” para validar).

Para executar o projeto basta dar um “npm install” na pasta principal, para fazer o download dos módulos, e em seguida um “yarn dev”.
