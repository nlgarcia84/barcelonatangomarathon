# 🎭 Barcelona Tango Marathon

[![Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=flat&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)

> **5th Edition | April 2-6, 2026 | Barcelona, Spain**

Official website for the Barcelona Tango Marathon, featuring world-renowned tango DJs and an unforgettable weekend of Argentine tango dancing in the beautiful city of Barcelona.

---

## 🌟 About the Event

The Barcelona Tango Marathon is an annual celebration of Argentine tango that brings together passionate dancers, renowned DJs, and the vibrant culture of Barcelona. Our 5th edition promises an exceptional lineup of international tango DJs who will create the perfect musical atmosphere for an unforgettable dancing experience.

### Featured DJs

- **Ornella Simonetto** (Santa Fe, Argentina) - New generation dancer and DJ
- **Laura Laru** (Zurich/Bucharest) - Golden Age specialist
- **Olga "La Cachila"** (Alicante, Spain) - Traditional tango expert
- **Pablo Rodríguez** (London/Argentina) - Musical elegance and social essence
- **Sil Cisnero** (La Plata, Argentina) - Classical and sensitive style
- **Ángel de Paz** (Barcelona, Spain) - Golden Age with emotional contrasts

---

## 🚀 Technology Stack

This website is built with modern web technologies for optimal performance and user experience:

- **[Astro](https://astro.build)** - Static site generator with island architecture
- **[TypeScript](https://www.typescriptlang.org)** - Type safety and enhanced development experience
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework for custom designs
- **[Cloudflare](https://www.cloudflare.com)** - Deployment and edge optimization

---

## 📁 Project Structure

```text
barcelonatango/
├── public/
│   └── images/           # DJ photos and event images
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Card.astro
│   │   ├── CardProgram.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Menu.astro
│   │   ├── Navigation.astro
│   │   └── Social.astro
│   ├── data/            # JSON data for DJs and programs
│   │   ├── cards.json
│   │   └── cardsProgram.json
│   ├── layouts/         # Page layout templates
│   │   └── MainLayout.astro
│   ├── pages/           # Site pages and routes
│   │   └── index.astro
│   └── styles/          # Global styles
│       └── global.css
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 🛠️ Installation & Development

### Prerequisites

- **Node.js** 18.14.1 or later
- **npm** or **yarn** package manager

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd barcelonatango
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:4321`

### Available Scripts

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start development server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview built site locally                   |
| `npm run astro`   | Run Astro CLI commands                       |

---

## 🚀 Deployment

This project is configured for deployment on **Cloudflare Pages**:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare**

   The build output in `./dist/` is ready for Cloudflare Pages deployment.

---

## 📝 Content Management

### Adding New DJs

1. Add DJ information to `src/data/cards.json`
2. Include DJ photo in `public/images/`
3. Follow the existing JSON structure:

```json
{
  "image": "/images/dj-photo.webp",
  "title": "City, Country",
  "description": "DJ biography and musical style..."
}
```

### Program Updates

Update event program information in `src/data/cardsProgram.json`.

---

## 🎨 Design & Styling

The website uses **Tailwind CSS** with a custom design system:

- **Primary colors**: Amber/Gold tones for tango elegance
- **Typography**: Montserrat font family
- **Responsive design**: Mobile-first approach
- **Components**: Modular Astro components for maintainability

---

## 🤝 Contributing

We welcome contributions to improve the Barcelona Tango Marathon website:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📧 Contact

For questions about the event or website:

- **Event Information**: [Contact details]
- **Technical Issues**: [Developer contact]
- **Website**: [Live site URL]

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**¡Nos vemos en la pista! See you on the dance floor!** 💃🕺

_Barcelona Tango Marathon - Where passion meets rhythm_

</div>
