# Vibra

<p align="center">
  <img src="./public/logo/VIBRA.png" alt="Logo Vibra" width="180" />
</p>

Landing page responsiva para a **VIBRA**, marca de presentes personalizados. O projeto apresenta canecas, copos, ecobags e kits, com uma experiência visual focada em identidade, personalização e conversão para orçamento via WhatsApp.

> Projeto desenvolvido como peça de portfólio Front-End.

## Funcionalidades

- Apresentação da marca e CTA para solicitação de orçamento via WhatsApp.
- Catálogo de produtos: canecas, copos, ecobags e kits personalizados.
- Seção que explica o fluxo de pedido, da escolha do produto à entrega.
- Galeria visual com imagens dos produtos.
- Depoimentos de clientes e informações de contato.
- Navegação por âncoras com rolagem suave.
- Menu lateral responsivo para telas menores.
- Animações de entrada, interação e hover em cards, botões e menu.

## Tecnologias

- React
- Vite
- Tailwind CSS
- Framer Motion

## Decisões de implementação

- A aplicação é uma página única: `App` renderiza a página `Home`, composta por seções independentes.
- O alias `@` aponta para `src`, simplificando os imports entre componentes.
- Textos e imagens de produtos, galeria, etapas e depoimentos ficam em arquivos `data.js` próximos às respectivas seções, separando conteúdo da apresentação.
- Os recursos visuais são servidos localmente pela pasta `public`, incluindo logo, backgrounds e mockups dos produtos.
- O layout usa utilitários do Tailwind e estilos globais para fontes, cores-base e rolagem suave; as fontes Anton, Caveat e Nunito são carregadas pelo CSS.

## Estrutura do projeto

```text
vibra/
├── public/
│   ├── images/              # Backgrounds e imagem principal
│   ├── logo/                # Logo e elemento gráfico da marca
│   └── mockups/             # Imagens dos produtos
├── src/
│   ├── components/          # Seções e componentes reutilizáveis
│   │   ├── Hero/
│   │   ├── Products/
│   │   ├── HowItWorks/
│   │   ├── Gallery/
│   │   ├── Depoiments/
│   │   ├── Contact/
│   │   ├── Navbar/
│   │   └── Footer/
│   ├── pages/
│   │   └── Home.jsx         # Composição da página
│   ├── styles/              # Reset, variáveis e estilos globais
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Contato da marca

- WhatsApp: [(54) 9215-0680](https://wa.me/555492150680)
- Instagram: [@vibra.ofc](https://www.instagram.com/vibra.ofc)
- Localização informada no site: Caxias do Sul, RS — envios para todo o Brasil.

## Licença

Distribuído sob a licença [MIT](LICENSE).
