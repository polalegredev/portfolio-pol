import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, Move, TrendingUp, Gauge } from "lucide-react";

export default function Hero({ t }) {
  const heroRef = useRef(null);

  // Motion values to store raw cursor offsets from the center of the hero section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to interpolate the cursor movements
  const springConfig = { stiffness: 100, damping: 22, mass: 0.15 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update css custom properties for spotlight follow
    heroRef.current.style.setProperty(
      "--mouse-x",
      `${(x / rect.width) * 100}%`,
    );
    heroRef.current.style.setProperty(
      "--mouse-y",
      `${(y / rect.height) * 100}%`,
    );

    // Update parallax offsets relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    mouseX.set(x - centerX);
    mouseY.set(y - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Pre-calculate tilt styles for each card based on its target depth multiplier
  const createTiltStyles = (depth) => {
    const moveX = useTransform(springX, (val) => val * depth * 0.15);
    const moveY = useTransform(springY, (val) => val * depth * 0.15);
    const rotateX = useTransform(springY, (val) => -val * depth * 0.04);
    const rotateY = useTransform(springX, (val) => val * depth * 0.04);

    return {
      x: moveX,
      y: moveY,
      rotateX,
      rotateY,
      transformStyle: "preserve-3d",
    };
  };

  return (
    <section
      ref={heroRef}
      className="hero-section"
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-video-bg">
        <video
          src={`${import.meta.env.BASE_URL}assets/video-hero.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        ></video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-spotlight"></div>
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-text-side animate-fade-in">
            <div className="hero-badge" id="hero-badge-badge">
              <span className="badge-dot"></span>
              <span
                dangerouslySetInnerHTML={{ __html: t("hero-badge") }}
              ></span>
            </div>
            <h1
              className="hero-title animate-slide-up"
              id="hero-main-title"
              dangerouslySetInnerHTML={{ __html: t("hero-title") }}
            ></h1>
            <p
              className="hero-subtitle animate-slide-up-delayed"
              id="hero-main-subtitle"
            >
              {t("hero-subtitle")}
            </p>
            <div
              className="hero-actions animate-slide-up-delayed"
              id="hero-main-actions"
            >
              <a
                href="#contacto"
                className="btn btn-primary btn-glow"
                id="btn-hero-contacto"
              >
                {t("btn-hero-contacto")}
              </a>
              <a
                href="#como-trabajamos"
                className="btn btn-outline"
                id="btn-hero-proceso"
              >
                {t("btn-hero-proceso")}
              </a>
            </div>
          </div>

          <div className="hero-interactive-side animate-fade-in-delayed">
            <div className="tech-stack-collage">
              <motion.div
                style={createTiltStyles(0.15)}
                className="tech-card card-js"
              >
                <span className="tech-icon">
                  <Zap size={16} style={{ color: "#ffb900" }} />
                </span>
                <div className="tech-info">
                  <h4>{t("tech-js-title")}</h4>
                  <p>{t("tech-js-desc")}</p>
                </div>
              </motion.div>

              <motion.div
                style={createTiltStyles(0.3)}
                className="tech-card card-gsap"
              >
                <span className="tech-icon">
                  <Move size={16} style={{ color: "var(--accent-pink)" }} />
                </span>
                <div className="tech-info">
                  <h4>{t("tech-gsap-title")}</h4>
                  <p>{t("tech-gsap-desc")}</p>
                </div>
              </motion.div>

              <motion.div
                style={createTiltStyles(0.2)}
                className="tech-card card-seo"
              >
                <span className="tech-icon">
                  <TrendingUp
                    size={16}
                    style={{ color: "var(--accent-clay)" }}
                  />
                </span>
                <div className="tech-info">
                  <h4>{t("tech-seo-title")}</h4>
                  <p>{t("tech-seo-desc")}</p>
                </div>
              </motion.div>

              <motion.div
                style={createTiltStyles(0.35)}
                className="tech-card card-speed"
              >
                <span className="tech-icon">
                  <Gauge size={16} style={{ color: "#10b981" }} />
                </span>
                <div className="tech-info">
                  <h4>{t("tech-speed-title")}</h4>
                  <p>{t("tech-speed-desc")}</p>
                </div>
              </motion.div>

              <motion.div
                style={createTiltStyles(0.1)}
                className="tech-card card-code"
              >
                <div className="editor-header">
                  <span className="dot-red"></span>
                  <span className="dot-yellow"></span>
                  <span className="dot-green"></span>
                </div>
                <pre>
                  <code>
                    {`const web = {
  velocidad: "100%",
  diseño: "único",
  seo: "top"
};`}
                  </code>
                </pre>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
