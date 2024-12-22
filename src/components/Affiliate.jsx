// Affiliate.jsx
import React from 'react';
import AffiliateLinkCard from './AffiliateLinkCard';
import './Affiliate.css';

const Affiliate = () => {
  const affiliateLinks = [
    {
      title: 'Curso de Programação',
      description: 'Aprenda a programar com este curso completo para iniciantes.',
      url: 'https://exemplo.com/curso-programacao',
      image: 'https://via.placeholder.com/300x180.png?text=Curso+de+Programacao',
    },
    {
      title: 'Ferramenta de Design',
      description: 'Crie designs incríveis com esta ferramenta fácil de usar.',
      url: 'https://exemplo.com/ferramenta-design',
      image: 'https://via.placeholder.com/300x180.png?text=Ferramenta+de+Design',
    },
    {
      title: 'Livro de Marketing',
      description: 'Descubra as melhores estratégias de marketing digital.',
      url: 'https://exemplo.com/livro-marketing',
      image: 'https://via.placeholder.com/300x180.png?text=Livro+de+Marketing',
    },
  ];

  return (
    <div className="affiliate-container">
      <h1>Links de Afiliados</h1>
      <div className="affiliate-cards">
        {affiliateLinks.map((link, index) => (
          <AffiliateLinkCard
            key={index}
            title={link.title}
            description={link.description}
            url={link.url}
            image={link.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Affiliate;
