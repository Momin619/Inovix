# Inovix — Software Company Website

A modern, responsive multi-page website for a fictional software company. Built with React and Vite as a frontend practice project.

> ⚠️ Inovix is a fake company created for learning purposes only.

---

## Key Features

- Animated hero with interactive particle background
- 3D rotating globe (Three.js)
- Services section with tilt card hover effect
- Projects portfolio with 12 categories
- Company workflow, about, and team pages
- Working contact form via EmailJS
- Smooth animations with Framer Motion
- Fully responsive design

---

## Technologies Used

| Tool | Purpose |
|---|---|
| React 19 + Vite | Frontend framework and build tool |
| Tailwind CSS | Styling and responsive design |
| React Router DOM | Client-side routing |
| Framer Motion | Page and component animations |
| Three.js + @react-three/fiber | 3D rotating globe |
| EmailJS | Sending emails from the contact form |
| React Hot Toast | Success and error notifications |

---

## Getting Started

**1. Clone & install**

```bash
git clone https://github.com/momin619/inovix.git
cd inovix
npm install
```

**2. Add environment variables**

Create a `.env` file in the root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**3. Run**

```bash
npm run dev
```

Open `http://localhost:5173`

---

## Folder Structure

```
src/
├── components/     # All UI components (Navbar, Footer, sections)
├── pages/          # Home, About, Services, Projects, Contact
└── styles/         # Tailwind CSS files
public/
├── 3d-model/       # Globe .glb file
└── images/         # Project images
├── titlebar-icon/  # favicon.ico
```
