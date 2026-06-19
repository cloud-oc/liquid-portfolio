export type PortfolioImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  liveUrl: string;
  images: {
    leftTop: PortfolioImage;
    leftBottom: PortfolioImage;
    featured: PortfolioImage;
  };
};

export type Service = {
  number: string;
  name: string;
  description: string;
};

export type FriendLink = {
  label: string;
  href: string;
};

export const profile = {
  name: "Username",
  title: "Username",
  heroTitle: "Hi, I'm Username",
  heroDescription:
    "a visual creator crafting striking brands, web experiences, motion, and unforgettable digital projects",
  aboutTitle: "About me",
  about:
    "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!",
  contactLabel: "Contact Me",
  contactEmail: "username@example.com",
  contactUrl: "#footer-contact",
};

export const navLinks = [
  { label: "关于我", href: "#about" },
  { label: "商业合作", href: "#services" },
  { label: "艺术作品", href: "#projects" },
  { label: "联系我", href: "#footer-contact" },
];

export const friendLinks: FriendLink[] = [
  { label: "Cloud09", href: "https://cloud09.space" },
];

export const services: Service[] = [
  {
    number: "01",
    name: "3D Modeling",
    description:
      "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    number: "02",
    name: "Rendering",
    description:
      "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    number: "03",
    name: "Motion Design",
    description:
      "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    number: "04",
    name: "Branding",
    description:
      "Crafting cohesive visual identities, from logos to full brand systems, that communicate a clear and memorable presence.",
  },
  {
    number: "05",
    name: "Web Design",
    description:
      "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export const projects: Project[] = [
  {
    id: "nextlevel-studio",
    number: "01",
    name: "Nextlevel Studio",
    category: "Client",
    liveUrl: "#contact",
    images: {
      leftTop: {
        src: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
        alt: "Nextlevel Studio dark 3D environment detail",
      },
      leftBottom: {
        src: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
        alt: "Nextlevel Studio sculptural 3D scene",
      },
      featured: {
        src: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
        alt: "Nextlevel Studio featured 3D composition",
      },
    },
  },
  {
    id: "aura-brand-identity",
    number: "02",
    name: "Aura Brand Identity",
    category: "Personal",
    liveUrl: "#contact",
    images: {
      leftTop: {
        src: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
        alt: "Aura Brand Identity 3D material study",
      },
      leftBottom: {
        src: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
        alt: "Aura Brand Identity motion still",
      },
      featured: {
        src: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
        alt: "Aura Brand Identity featured visual system",
      },
    },
  },
  {
    id: "solaris-digital",
    number: "03",
    name: "Solaris Digital",
    category: "Client",
    liveUrl: "#contact",
    images: {
      leftTop: {
        src: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
        alt: "Solaris Digital luminous 3D interface",
      },
      leftBottom: {
        src: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
        alt: "Solaris Digital product render",
      },
      featured: {
        src: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
        alt: "Solaris Digital featured 3D landing concept",
      },
    },
  },
];
