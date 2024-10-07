import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <h1>Bike Trails</h1>
          <ul>
            <li><a href="#trails">Trilhas</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Explore as Melhores Trilhas de Bike</h2>
          <p>Descubra novos percursos e desafie seus limites.</p>
          <a href="#trails" className="cta-button">Comece Agora</a>
        </div>
      </section>

      {/* Trails Section */}
      <section id="trails">
        <h2>Trilhas em Destaque</h2>
        <div className="trails-list">
          <div className="trail-item">
            <h3>Montanha Desafiadora</h3>
            <p>Uma trilha difícil para os mais experientes.</p>
          </div>
          <div className="trail-item">
            <h3>Caminho da Floresta</h3>
            <p>Trilha média passando por belas paisagens.</p>
          </div>
          <div className="trail-item">
            <h3>Costa Relaxante</h3>
            <p>Uma trilha fácil ao longo da costa.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h2>O que dizem nossos usuários</h2>
        <div className="feedback-list">
          <div className="feedback-item">
            <blockquote>As trilhas são incríveis, mal posso esperar para explorar mais!</blockquote>
            <p>- João Silva</p>
          </div>
          <div className="feedback-item">
            <blockquote>Experiência maravilhosa! Ótimo para iniciantes e veteranos.</blockquote>
            <p>- Maria Santos</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact">
        <h2>Entre em Contato</h2>
        <form>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Bike Trails. Todos os direitos reservados.</p>
        <ul>
          <li><a href="#terms">Termos de Serviço</a></li>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
