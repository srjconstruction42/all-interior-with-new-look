import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  CookingPot,
  DoorOpen,
  Lightbulb,
  Menu,
  MessageCircle,
  Paintbrush,
  PanelsTopLeft,
  Phone,
  Sofa,
  Sparkles,
  Tv,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE, PHONE_LABEL, WHATSAPP } from "@/data/services";
import logo from "@/assets/logoo.jpg";
import bedroomDesign from "@/assets/interiors/bedroom-design.jpeg";
import bedroomSuite from "@/assets/interiors/bedroom-suite.jpeg";
import contemporaryLounge from "@/assets/interiors/contemporary-lounge.jpeg";
import decorativeWallArt from "@/assets/interiors/decorative-wall-art.jpeg";
import livingRoomDetail from "@/assets/interiors/living-room-detail.jpeg";
import livingRoomFeatureWall from "@/assets/interiors/living-room-feature-wall.jpeg";
import livingRoomPanorama from "@/assets/interiors/living-room-panorama.jpeg";
import tvFeatureWall from "@/assets/interiors/tv-feature-wall.jpeg";
import wallArtCraft from "@/assets/interiors/wall-art-craft.jpeg";
import Footer from "@/components/Footer";
import "./InteriorsFitOuts.css";

type GalleryCategory =
  | "Living Room & Hall Interiors"
  | "Bedroom Interiors"
  | "TV Unit & Wall Panelling"
  | "False Ceiling & Lighting"
  | "Decorative Wall & Space Partitions"
  | "Residential Interiors";

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  type: "Design visualisation" | "On-site craftsmanship";
};

const categories: GalleryCategory[] = [
  "Living Room & Hall Interiors",
  "Bedroom Interiors",
  "TV Unit & Wall Panelling",
  "False Ceiling & Lighting",
  "Decorative Wall & Space Partitions",
  "Residential Interiors",
];

const galleryImages: GalleryImage[] = [
  {
    src: livingRoomDetail,
    alt: "Warm contemporary living room with layered lighting and marble finishes",
    title: "A welcoming living room",
    category: "Living Room & Hall Interiors",
    type: "Design visualisation",
  },
  {
    src: livingRoomPanorama,
    alt: "Soft neutral living room with custom shelving and a sculptural partition",
    title: "Living, thoughtfully composed",
    category: "Living Room & Hall Interiors",
    type: "Design visualisation",
  },
  {
    src: bedroomSuite,
    alt: "Calm bedroom interior with warm timber detailing and a tailored headboard",
    title: "A quieter kind of luxury",
    category: "Bedroom Interiors",
    type: "Design visualisation",
  },
  {
    src: bedroomDesign,
    alt: "Contemporary bedroom with upholstered bed, pendant lights and layered ceiling",
    title: "Rest, with room to breathe",
    category: "Bedroom Interiors",
    type: "Design visualisation",
  },
  {
    src: tvFeatureWall,
    alt: "Marble-look TV wall framed by warm timber panelling",
    title: "A considered media wall",
    category: "TV Unit & Wall Panelling",
    type: "Design visualisation",
  },
  {
    src: livingRoomFeatureWall,
    alt: "Living room with cove-lit ceiling, statement partition and integrated wall finishes",
    title: "Light that shapes the room",
    category: "False Ceiling & Lighting",
    type: "Design visualisation",
  },
  {
    src: decorativeWallArt,
    alt: "Sculptural decorative wall artwork with a handcrafted finish",
    title: "A detail with character",
    category: "Decorative Wall & Space Partitions",
    type: "On-site craftsmanship",
  },
  {
    src: wallArtCraft,
    alt: "Craftsperson finishing a sculptural decorative wall installation",
    title: "Care in every finishing touch",
    category: "Decorative Wall & Space Partitions",
    type: "On-site craftsmanship",
  },
  {
    src: contemporaryLounge,
    alt: "Contemporary residential lounge with a sculptural screen and layered lighting",
    title: "A home made for living",
    category: "Residential Interiors",
    type: "Design visualisation",
  },
];

const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Living Room Interiors",
    description: "Welcoming layouts, thoughtful finishes and details that feel like home.",
    icon: Sofa,
  },
  {
    title: "Bedroom Interior Design",
    description: "Restful bedrooms shaped around comfort, storage and your routine.",
    icon: BedDouble,
  },
  {
    title: "Modular Kitchen",
    description: "Purposeful kitchen planning with practical storage and clean finishes.",
    icon: CookingPot,
  },
  {
    title: "False Ceiling & Lighting",
    description: "Layered ceiling details and lighting planned for the way you live.",
    icon: Lightbulb,
  },
  {
    title: "TV Unit & Wall Panelling",
    description: "Custom focal walls that bring media, materials and storage together.",
    icon: Tv,
  },
  {
    title: "Wardrobe & Storage",
    description: "Made-to-measure storage that makes every inch work harder.",
    icon: DoorOpen,
  },
  {
    title: "Wall Finishes",
    description: "Texture, colour and crafted details that give a room its character.",
    icon: Paintbrush,
  },
  {
    title: "Office & Commercial Interiors",
    description: "Functional, well-planned spaces for teams, clients and customers.",
    icon: Building2,
  },
];

const reasons = [
  "Professional planning",
  "Functional space utilization",
  "Quality materials",
  "Modern design concepts",
  "Transparent communication",
  "Complete execution support",
];

const process = [
  ["Consultation", "We listen to your needs, style, priorities and budget."],
  ["Site Visit & Measurement", "We understand the space and take the measurements needed to plan."],
  ["Design & Planning", "We shape a considered layout and align on the scope before work begins."],
  ["Material Selection", "We help you compare finishes and select materials for your space."],
  ["Execution", "Our team coordinates the agreed work with clear communication."],
  ["Final Handover", "We walk through the finished scope together before handover."],
];

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "#gallery" },
  { label: "Interiors & Fit-outs", href: "#top", current: true },
  { label: "Contact", href: "#contact" },
];

const InteriorsFitOuts = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "All">("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const visibleImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);
  const selectedIndex = selectedImage
    ? galleryImages.findIndex((image) => image.src === selectedImage.src)
    : -1;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedImage && dialog && !dialog.open) dialog.showModal();
    if (!selectedImage && dialog?.open) dialog.close();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && dialog?.open) {
        event.preventDefault();
        dialog.close();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedImage]);

  const closeMenu = () => setMenuOpen(false);
  const moveLightbox = (direction: -1 | 1) => {
    const nextIndex = (selectedIndex + direction + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <div className="interiors-page" id="top">
      <a className="interiors-skip-link" href="#main-content">Skip to content</a>
      <header className="interiors-header">
        <div className="interiors-header-inner">
          <Link className="interiors-brand" to="/" aria-label="SRJ Construction home">
            <img src={logo} alt="SRJ Construction" />
          </Link>
          <button
            className="interiors-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="interiors-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav
            className={`interiors-nav${menuOpen ? " is-open" : ""}`}
            id="interiors-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a className="interiors-nav-call" href={`tel:${PHONE}`}>
              <Phone size={15} aria-hidden="true" />
              Call Now
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="interiors-hero" aria-labelledby="interiors-title">
          <img
            className="interiors-hero-image"
            src={livingRoomDetail}
            alt=""
            loading="eager"
          />
          <div className="interiors-hero-shade" />
          <div className="interiors-hero-content">
            <p className="interiors-eyebrow"><span /> Interiors, made personal</p>
            <h1 id="interiors-title">Transform Your Space.<br /><em>Elevate Your Lifestyle.</em></h1>
            <p className="interiors-hero-copy">
              From elegant living rooms to luxurious bedrooms, SRJ Construction delivers
              thoughtfully designed interiors that combine beauty, functionality and craftsmanship.
            </p>
            <div className="interiors-hero-actions">
              <a className="interiors-button interiors-button-gold" href="#gallery">
                Explore Our Designs <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a
                className="interiors-button interiors-button-outline"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} aria-hidden="true" /> Chat on WhatsApp
              </a>
              <a className="interiors-hero-call" href={`tel:${PHONE}`}>
                Call Now <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="interiors-hero-note">
            <span className="interiors-note-line" />
            <span>Spaces shaped around the way you live</span>
          </div>
          <a className="interiors-scroll-cue" href="#services" aria-label="Scroll to services">
            <span /> Scroll to explore
          </a>
        </section>

        <section className="interiors-services section-wrap" id="services" aria-labelledby="services-title">
          <div className="interiors-section-heading">
            <div>
              <p className="interiors-eyebrow"><span /> Thoughtful by design</p>
              <h2 id="services-title">Rooms with purpose.<br /><em>Details with meaning.</em></h2>
            </div>
            <p>
              From a single considered room to a complete home, we bring the details,
              materials and execution together with care.
            </p>
          </div>
          <div className="interiors-service-grid">
            {services.map(({ title, description, icon: Icon }, index) => (
              <article className="interiors-service-card" key={title}>
                <div className="interiors-service-card-top">
                  <span className="interiors-service-number">0{index + 1}</span>
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#contact" aria-label={`Enquire about ${title}`}>
                  Discuss this service <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="interiors-gallery-section" id="gallery" aria-labelledby="gallery-title">
          <div className="section-wrap interiors-gallery-wrap">
            <div className="interiors-section-heading interiors-gallery-heading">
              <div>
                <p className="interiors-eyebrow"><span /> A closer look</p>
                <h2 id="gallery-title">Interiors in focus<span className="interiors-period">.</span></h2>
              </div>
              <p>
                Explore selected interiors and finish details. Visualisations are identified
                as such; on-site photographs are labelled separately.
              </p>
            </div>
            <div className="interiors-filters" aria-label="Filter gallery by category">
              <button
                type="button"
                className={activeCategory === "All" ? "is-active" : ""}
                aria-pressed={activeCategory === "All"}
                onClick={() => setActiveCategory("All")}
              >
                All spaces
              </button>
              {categories.map((category) => (
                <button
                  type="button"
                  className={activeCategory === category ? "is-active" : ""}
                  aria-pressed={activeCategory === category}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="interiors-gallery-grid" aria-live="polite">
              {visibleImages.map((image, index) => (
                <button
                  className="interiors-gallery-card"
                  type="button"
                  key={image.src}
                  onClick={() => setSelectedImage(image)}
                  aria-label={`View ${image.title}, ${image.type}`}
                  style={{ "--gallery-order": index } as React.CSSProperties}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <span className="interiors-gallery-overlay">
                    <span className="interiors-gallery-type">{image.type}</span>
                    <span className="interiors-gallery-title">{image.title}</span>
                    <span className="interiors-gallery-category">{image.category}</span>
                    <span className="interiors-gallery-open" aria-hidden="true">
                      <ArrowUpRight size={18} />
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <p className="interiors-gallery-caption">
              <Sparkles size={15} aria-hidden="true" />
              Design visualisations are shared for inspiration and are not represented as completed projects.
            </p>
          </div>
        </section>

        <section className="interiors-approach section-wrap" aria-labelledby="approach-title">
          <div className="interiors-approach-intro">
            <p className="interiors-eyebrow"><span /> Built around you</p>
            <h2 id="approach-title">Good design is<br /><em>felt every day.</em></h2>
            <p>
              A beautiful room should work as well as it looks. We bring practical
              thinking and careful execution to every step of your interior journey.
            </p>
            <a className="interiors-text-link" href="#contact">
              Let’s talk about your space <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <ul className="interiors-reasons">
            {reasons.map((reason, index) => (
              <li key={reason}>
                <span className="interiors-reason-number">0{index + 1}</span>
                <span>{reason}</span>
                <Check size={17} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </section>

        <section className="interiors-process-section" aria-labelledby="process-title">
          <div className="section-wrap">
            <div className="interiors-section-heading interiors-process-heading">
              <div>
                <p className="interiors-eyebrow"><span /> From first conversation to final detail</p>
                <h2 id="process-title">A clear path to<br /><em>a space that feels right.</em></h2>
              </div>
              <p>
                Every project is different. A thoughtful process keeps the decisions,
                scope and progress clear from the beginning.
              </p>
            </div>
            <ol className="interiors-process-grid">
              {process.map(([title, description], index) => (
                <li key={title}>
                  <span className="interiors-process-number">0{index + 1}</span>
                  <span className="interiors-process-rule" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="interiors-contact" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap interiors-contact-inner">
            <div>
              <p className="interiors-eyebrow"><span /> Your next chapter starts here</p>
              <h2 id="contact-title">Let’s design<br /><em>your dream space.</em></h2>
              <p className="interiors-contact-copy">
                Tell us what you have in mind. We’d love to hear about your space.
              </p>
            </div>
            <div className="interiors-contact-actions">
              <a className="interiors-contact-phone" href={`tel:${PHONE}`}>
                <span><Phone size={18} aria-hidden="true" /></span>
                <span><small>Call us</small>{PHONE_LABEL}</span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <a
                className="interiors-contact-whatsapp"
                href={`${WHATSAPP}?text=${encodeURIComponent("Hello SRJ Construction, I would like to discuss an interior design project.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Start a WhatsApp conversation
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <p>Share your ideas, your plans or simply start with a conversation.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <dialog
        className="interiors-lightbox"
        ref={dialogRef}
        aria-labelledby="lightbox-title"
        onClose={() => setSelectedImage(null)}
        onCancel={() => setSelectedImage(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") moveLightbox(-1);
          if (event.key === "ArrowRight") moveLightbox(1);
        }}
      >
        {selectedImage && (
          <div className="interiors-lightbox-content">
            <div className="interiors-lightbox-topline">
              <div>
                <span className="interiors-gallery-type">{selectedImage.type}</span>
                <h2 id="lightbox-title">{selectedImage.title}</h2>
              </div>
              <button
                className="interiors-lightbox-close"
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close image viewer"
              >
                <X size={21} aria-hidden="true" />
              </button>
            </div>
            <div className="interiors-lightbox-image-wrap">
              <button
                className="interiors-lightbox-arrow interiors-lightbox-previous"
                type="button"
                onClick={() => moveLightbox(-1)}
                aria-label="Previous image"
              >
                <ChevronLeft size={23} aria-hidden="true" />
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <button
                className="interiors-lightbox-arrow interiors-lightbox-next"
                type="button"
                onClick={() => moveLightbox(1)}
                aria-label="Next image"
              >
                <ChevronRight size={23} aria-hidden="true" />
              </button>
            </div>
            <p className="interiors-lightbox-caption">{selectedImage.category}</p>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default InteriorsFitOuts;
