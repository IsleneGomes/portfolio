import React from 'react';
import pixel from '../images/PixelArt.gif';
import todo from '../images/ToDoList.gif';

export default function Home() {
  return (
    <div className="home">
      <section className="home-presentation">
        <h1>Que satisfação ter você por aqui! 👋</h1>
          <h3>Conheça um pouco mais sobre mim 😊</h3>
          <h2>Primeiros Projetos... 📚</h2>
          <section className="home-projetos">
            <h4 className="projeto">Pixel Art <br /><img src={pixel} alt="gif do projeto Pixel Art" width="300px" height="250px"/></h4>
            <h4 className="projeto">To Do List <br /><img src={todo} alt="gif do projeto To Do List" width="300px" height="250px"/></h4>            
          </section>
        </section>
        <section className="presentation">
          <h2>Minhas Ideias 💬</h2>
          <p>Sou uma pessoa muito cooperativa, sou educadora e portanto comigo essa proatividade de passar adiante o que sei. Estou em transição de carreira da área da Educação para a área Tech e já tenho me aventurado por Javascript, CSS, HTML, React JS e agora MySql e vem mais por ai...</p>
        </section>
        <section className="presentation">
          <h2>Meus Hobbies 👩‍🍳🥂</h2>
          <p>Cozinhar, definitivamente é meu hobby! Fiz Gastronomia em nome desse fascínio kkk</p>
        </section>
        <section className="presentation">
          <h2>Minhas Paixões👨‍👩‍👦‍👦📖</h2>
          <p>Adoro aproveitar meu tempo ao lado da minha família, meus filhos, marido, pais, viajar....ah viajar!</p>
        </section>
        <section className="presentation">
          <h2>Meus Projetos Futuros...🧭⌛</h2>
          <p>Apesar de estar estudando Javascript pretendo focar em Java assim que terminar minhas trilhas de estudo, porque é a linguagem que faz meus olhos brilharem.</p>
        </section>
    </div>
  )
}
