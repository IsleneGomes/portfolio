import React from 'react';
import { Link } from 'react-router-dom';

export default function Curriculo() {
  return (
    <div className="curriculo">
      <h1>Currículo</h1>
      <div className="dados-pessoais">
        <h2>Nome: <span>Islene dos Santos Gomes Fernandes</span></h2>
        <h4>LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/islene-dos-santos-gomes-fernandes-76899645/" target="_blank" rel="noreferrer">
            Islene dos Santos Gomes Fernandes
          </a>
        </h4>
        <h4>GitHub:{' '}
        <a href="https://github.com/IsleneGomes" target="_blank" rel="noreferrer">Islene Gomes</a>
        </h4>
      </div>
      <div className="formacao">
        <h2>Formação Acadêmica: {' '}</h2>
        <h3>Universidade Federal de Goiás - Campus Catalão {' '}
        <p>Curso: Matemática <span>2003/2006</span></p>
        </h3>

        <h3>Instituto Federal do Triângulo Mineiro {' '}
        <p>Curso: Computação <span>2021/2024</span></p>
        </h3>

        <h3>Trybe {' '}
        <p>Curso: Desenvolvedora de Software Web FullStack <span>2021/2022</span>
        Estudo na escola Trybe que oferece um curso com mais de 1500 hs com projetos individuais e em grupo simulando o ambiente empresarial. Nela, o estudo é dividido em 4 módulos: Fundamentos, FrontEnd, BackEnd e Ciência da Computação e já concluí os 2 primeiros módulos podendo declarar que possuo um conhecimento amplo, porém básico por não ter trabalhado em nenhuma empresa, de Javascript, HTML, CSS, ReactJs, Git, Unix&Bash. Atualmente iniciei o estudo em BackEnd com MySQL. Também fui aprovada no processo seletivo de bolsas  do Bootcamp do Luizalabs sobre Node Js e iniciei meus estudos em 11/08 e terminarei em 11/09. Espero aprender e crescer com a empresa, pois só preciso de uma oportunidade na minha transição de carreira.
        </p>
        </h3>
      </div>
      <div  className="experiencia">
        <h2>Experiência Profissional: {' '}</h2>
        <h3>Secretaria de Estado da Educação de Minas Gerais {' '}
        <p>Cargo: Professora de Matemática{' '}<span>{' '}Ano: 2007 - 2015</span></p>
        </h3>
        <h3>Secretaria de Estado da Educação de Minas Gerais {' '}
        <p>Cargo: Diretora Escolar{' '}<span>{' '}Ano: 2015 - presente data</span></p>
        </h3>
      </div>
      <div className="experiencia-projeto">
        <h2>Alguns Projetos Desenvolvidos: {' '}</h2>
        <h3 className="title-projeto">Project Pixel-Arts {' '}
        <p>Linguagem: JavasCript, CSS, HTML<br /><span>Ano: Maio/2021<br /></span>
          Foi implementada uma página web que contém uma paleta de cores funcional que poderá ser utilizada para criar desenhos em pixels.
          <br />O projeto desenvolvido para reforçar a manipulação do DOM e do Javascript.
          <a href="https://github.com/IsleneGomes/Project-Pixels-Art" target="_blank" rel="noreferrer"> <br />Repositório</a>
        </p>
        </h3>

        <h3 className="title-projeto">Project Movie Cards Library Stateful {' '}
        <p>Linguagem: JavasCript, React JS, CSS, HTML<br /><span>Ano: Junho/2021<br /></span>
            Foi desenvolvido uma aplicação que consiste em uma biblioteca de cartões de filmes dinâmica utilizando React. A biblioteca é composta por:<br />
            Um cabeçalho;<br />
            Uma barra de busca, utilizada pra filtrar quais cartões serão exibidos na lista de cartões;<br />
            Uma lista de cartões, onde cada cartão representa um filme e possui uma imagem, título, subtítulo, sinopse e avaliação;<br />
            Um formulário para adicionar um novo cartão na biblioteca;<br />
            O projeto foi feito para reforçar os seguintes procedimentos:<br />
            Ler o estado de um componente e usá-lo para alterar o que exibimos no browser;<br />
            Inicializar um componente, dando a ele um estado pré-definido;<br />
            Atualizar o estado de um componente;<br />
            Capturar eventos utilizando a sintaxe do React;
            <a href="https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/15" target="_blank" rel="noreferrer"> <br />Repositório</a>
        </p>
        </h3>

        <h3 className="title-projeto">Project ToDoList {' '}
        <p>Linguagem: JavasCript, CSS, HTML<br /><span>Ano: Abril/2021<br /></span>
          Foi desenvolvido uma lista de tarefas usando HTML, CSS e JavaScript;<br />
          O objetivo do projeto foi:<br />
          Manipular CSS<br />
          Manipular Javascript;
          <a href="https://github.com/tryber/sd-011-project-todo-list/pull/15" target="_blank" rel="noreferrer"> <br />Repositório</a>
        </p>
        </h3>

        <h3 className="title-projeto">Project Movie Card Library CRUD {' '}
        <p>Linguagem: JavasCript, React JS, CSS, HTML<br /><span>Ano: Junho/2021<br /></span>
          O objetivo desse projeto foi:<br />
          Utilizar o componentDidMount para executar uma ação após o componente ser inserido no DOM;<br />
          Utilizar o shouldComponentUpdate para avaliar se uma atualização do componente deve ou não acontecer naquele momento;<br />
          Utilizar o componentDidUpdate para executar uma ação após o componente ser atualizado;<br />
          Utilizar o componentWillUnmount para realizar uma ação antes de o componente ser desmontado;<br />
          Utilizar o props.children para acessar os filhos de um componente React e interagir com eles;<br />
          Utilizar o componente BrowserRouter corretamente;<br />
          Criar links de navegação na aplicação com o componente Link ;<br />
          Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route;<br />
          Estruturar e organizar as rotas da sua aplicação com o componente Switch;<br />
          Usar o componente Redirect pra alternar entre rotas.
          <a href="https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/72" target="_blank" rel="noreferrer"> <br />Repositório</a>
        </p>
        </h3>

        <h3 className="title-projeto">Project Recipes App {' '}
        <p>Linguagem: JavasCript, React JS, CSS, HTML<br /><span>Ano: Agosto/2021<br /></span>
          Está sendo desenvolvido um app de receitas em grupo, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API.<br />
          Nessa aplicação será possível ver, buscar, filtrar, favoritar e acompanhar o processo de preparação de receitas e drinks!<br />
          A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.<br />
          O layout tem como foco dispositivos móveis, então todos os protótipos vão estar desenvolvidos em telas menores.<br />
          Nesse projeto, está sendo desenvolvido:<br />
          Utilizar Redux para gerenciar estado;<br />
          Utilizar a biblioteca React-Redux;<br />
          Utilizar a Context API do React para gerenciar estado;<br />
          Utilizar o React Hook useState;<br />
          Utilizar o React Hook useContext;<br />
          Utilizar o React Hook useEffect;<br />
          Criar Hooks customizados;
          <a href="https://github.com/tryber/sd-011-project-recipes-app/pull/59" target="_blank" rel="noreferrer"> <br />Repositório</a>
        </p>
        </h3>
        <Link to="/projetos"><p>Entre outros...</p></Link> 
      </div>
    </div>
  )
}
