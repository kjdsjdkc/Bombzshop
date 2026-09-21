import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock3,
  Mail,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useState } from "react";

import avatarKai from "../assets/avatar-kai.jpg";
import avatarLuna from "../assets/avatar-luna.jpg";
import avatarNeo from "../assets/avatar-neo.jpg";
import avatarZin from "../assets/avatar-zin.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bombz Shop | Robux com entrega por e-mail" },
      {
        name: "description",
        content:
          "Escolha seu pacote de Robux na Bombz Shop e receba a confirmação da compra diretamente por e-mail.",
      },
      { property: "og:title", content: "Bombz Shop | Robux com entrega por e-mail" },
      {
        property: "og:description",
        content: "Pacotes de Robux com compra simples, preços claros e entrega por e-mail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const packages = [
  { robux: "1.000", price: "R$ 28,00" },
  { robux: "2.000", price: "R$ 56,00" },
  { robux: "3.000", price: "R$ 84,00" },
  { robux: "4.000", price: "R$ 112,00" },
  { robux: "5.000", price: "R$ 140,00" },
  { robux: "6.000", price: "R$ 168,00" },
  { robux: "7.000", price: "R$ 196,00" },
  { robux: "8.000", price: "R$ 224,00" },
  { robux: "9.000", price: "R$ 252,00" },
  { robux: "10.000", price: "R$ 280,00" },
];

const reviews = [
  {
    name: "@neo_zinn",
    avatar: avatarNeo,
    rating: 5,
    text: "Chegou certinho no e-mail. Processo bem simples, compraria de novo.",
    time: "há 12 min",
  },
  {
    name: "@luuh.xp",
    avatar: avatarLuna,
    rating: 5,
    text: "Fiquei com receio no começo, mas deu tudo certo e a confirmação chegou rápido.",
    time: "há 38 min",
  },
  {
    name: "@k4i.surf 🏄",
    avatar: avatarKai,
    rating: 4,
    text: "Demorou alguns minutinhos a mais, mas nada demais. Recebi tudo certinho.",
    time: "há 1 h",
  },
  {
    name: "@zin_0x",
    avatar: avatarZin,
    rating: 5,
    text: "Preço bom e sem complicação. O aviso apareceu no meu e-mail logo depois.",
    time: "há 2 h",
  },
];

function BombMark({ className = "" }: { className?: string }) {
  return (
    <span className={`bomb-mark ${className}`} aria-hidden="true">
      <span />
    </span>
  );
}

function Logo() {
  return (
    <a href="#topo" className="logo" aria-label="Bombz Shop — início">
      B<BombMark />MBZ <small>SHOP</small>
    </a>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="review-card">
      <header>
        <img
          src={review.avatar}
          alt={`Avatar fictício de ${review.name}`}
          width={816}
          height={816}
          loading="lazy"
        />
        <div>
          <strong>{review.name}</strong>
          <span>{review.time}</span>
        </div>
        <div className="stars" aria-label={`${review.rating} de 5 estrelas`}>
          {[0, 1, 2, 3, 4].map((star) => (
            <Star key={star} size={14} fill={star < review.rating ? "currentColor" : "none"} />
          ))}
        </div>
      </header>
      <p>“{review.text}”</p>
    </article>
  );
}

function Index() {
  const [selected, setSelected] = useState(0);
  const chosen = packages[selected] ?? packages[0];

  if (!chosen) {
    return null;
  }

  return (
    <main id="topo">
      <nav className="site-nav" aria-label="Navegação principal">
        <Logo />
        <div className="nav-links">
          <a href="#avaliacoes">Avaliações</a>
          <a href="#precos">Preços</a>
          <a className="nav-cta" href="#comprar">
            Comprar <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <span className="eyebrow"><span /> ROBUX SEM COMPLICAÇÃO</span>
          <h1>
            Sua próxima<br />
            <em>compra</em> começa aqui.
          </h1>
          <p>
            Escolha seu pacote, pague com LivePix e acompanhe a confirmação diretamente pelo seu e-mail.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#precos">
              Ver pacotes <ArrowDown size={18} />
            </a>
            <span><ShieldCheck size={18} /> Compra acompanhada por e-mail</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-bomb"><BombMark /></div>
          <span className="float-tag tag-one">+ ROBUX</span>
          <span className="float-tag tag-two">LIVEPIX</span>
          <span className="float-tag tag-three">E-MAIL ✓</span>
        </div>

        <div className="trust-strip">
          <div><strong>≈20</strong><span>avaliações por dia*</span></div>
          <div><strong>10</strong><span>opções de pacote</span></div>
          <div><strong>100%</strong><span>confirmação por e-mail</span></div>
        </div>
        <small className="store-note">* Média informada pela loja.</small>
      </section>

      <section className="reviews-section" id="avaliacoes">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> EXPERIÊNCIAS</span>
            <h2>Quem compra,<br /><em>volta.</em></h2>
          </div>
          <p>
            Uma prévia de como a área de avaliações funciona. Os nomes, avatares e relatos abaixo são fictícios e ilustrativos.
          </p>
        </div>
        <div className="reviews-track-wrap" aria-label="Avaliações demonstrativas em movimento">
          <div className="reviews-track">
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={`${review.name}-${index}`} review={review} />
            ))}
          </div>
        </div>
        <div className="demo-label"><Sparkles size={14} /> Conteúdo demonstrativo — nenhum perfil representa uma pessoa real</div>
      </section>

      <section className="delivery-section">
        <div className="delivery-title">
          <span className="section-number">01</span>
          <div>
            <span className="eyebrow"><span /> COMO FUNCIONA</span>
            <h2>Entrega pelo seu<br /><em>e-mail.</em></h2>
          </div>
        </div>
        <div className="delivery-steps">
          <article>
            <span className="step-icon"><ShoppingBag /></span>
            <span className="step-number">01</span>
            <h3>Escolha o pacote</h3>
            <p>Selecione abaixo a quantidade de Robux que você deseja comprar.</p>
          </article>
          <article className="featured-step">
            <span className="step-icon"><Mail /></span>
            <span className="step-number">02</span>
            <h3>Informe seu e-mail</h3>
            <p>No LivePix, preencha o campo <strong>“nome” com o seu e-mail</strong>. É por ele que você receberá a confirmação.</p>
          </article>
          <article>
            <span className="step-icon"><Zap /></span>
            <span className="step-number">03</span>
            <h3>Pagamento detectado</h3>
            <p>Após o Pix, o sistema identifica o pagamento e inicia a confirmação.</p>
          </article>
        </div>
      </section>

      <section className="prices-section" id="precos">
        <div className="prices-inner">
          <div className="prices-intro">
            <span className="eyebrow"><span /> TABELA DE PREÇOS</span>
            <h2>Escolha seus<br /><em>Robux.</em></h2>
            <p>Selecione uma opção para preparar sua compra.</p>
            <div className="price-callout">
              <span>A PARTIR DE</span>
              <strong>R$ 28<sup>,00</sup></strong>
              <small>por 1.000 Robux</small>
            </div>
          </div>

          <div className="price-table" role="radiogroup" aria-label="Pacotes de Robux">
            <div className="price-header">
              <span>ROBUX</span><span>PREÇO (R$)</span><span />
            </div>
            {packages.map((item, index) => (
              <button
                key={item.robux}
                type="button"
                className={`price-row ${selected === index ? "selected" : ""}`}
                onClick={() => setSelected(index)}
                role="radio"
                aria-checked={selected === index}
              >
                <span className="robux-cell"><span className="robux-icon"><i /></span>{item.robux}</span>
                <strong>{item.price}</strong>
                <span className="select-circle">{selected === index && <Check size={16} />}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="checkout-section" id="comprar">
        <div className="checkout-summary">
          <span className="eyebrow"><span /> SEU PEDIDO</span>
          <div className="order-line">
            <div><span>Você escolheu</span><strong>{chosen.robux} ROBUX</strong></div>
            <div><span>Total</span><strong>{chosen.price}</strong></div>
          </div>
          <button type="button" className="pay-button" disabled>
            Link de pagamento em breve <Clock3 size={19} />
          </button>
          <p className="payment-note">
            <ShieldCheck size={18} />
            Ao pagar, o sistema detecta o pagamento e envia um e-mail de confirmação. Caso ele não chegue, confira se o e-mail foi digitado corretamente no campo “nome”.
          </p>
        </div>
      </section>

      <footer>
        <Logo />
        <p>Robux com clareza, do clique à confirmação.</p>
        <span>© 2026 Bombz Shop</span>
      </footer>
    </main>
  );
}