import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

export default function Workflow({ t }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll progress on the desktop container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out scroll progression using spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.15,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (window.innerWidth > 1024) {
      if (latest < 0.22) {
        setActiveStep(0);
      } else if (latest < 0.52) {
        setActiveStep(1);
      } else if (latest < 0.82) {
        setActiveStep(2);
      } else {
        setActiveStep(3);
      }
    }
  });

  // Mobile viewport tracking: intersection observers trigger image panes swap
  useEffect(() => {
    if (isMobile) {
      const observerOptions = {
        root: null,
        rootMargin: "-25% 0px -35% 0px",
        threshold: 0.1,
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(
              entry.target.getAttribute("data-step-index"),
              10,
            );
            if (!isNaN(stepIndex)) {
              setActiveStep(stepIndex);
            }
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions,
      );
      const blocks = document.querySelectorAll(".workflow-step-text-block");
      blocks.forEach((block) => observer.observe(block));

      return () => {
        blocks.forEach((block) => observer.unobserve(block));
      };
    }
  }, [isMobile]);

  return (
    <>
      <section className="workflow-intro-section" id="como-trabajamos">
        <div className="container">
          <div className="section-header reveal active">
            <span className="section-decor-tag">{t("method-decor")}</span>
            <h2 className="section-title">{t("method-title")}</h2>
            <p className="section-subtitle">{t("method-subtitle")}</p>
          </div>
        </div>
      </section>

      <section ref={containerRef} className="workflow-sticky-section">
        <div className="workflow-sticky-container">
          <div className="workflow-sticky-inner">
            {/* Left side: narrative text blocks */}
            <div className="workflow-left-text">
              {/* Step 1 */}
              <motion.div
                className="workflow-step-text-block"
                id="text-step-1"
                data-step-index={0}
                animate={
                  isMobile
                    ? {}
                    : {
                        opacity: activeStep === 0 ? 1 : 0,
                        y: activeStep === 0 ? 0 : activeStep > 0 ? -40 : 40,
                        pointerEvents: activeStep === 0 ? "all" : "none",
                      }
                }
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="step-badge-premium">{t("step-badge-1")}</span>
                <h3
                  className="cinematic-title"
                  dangerouslySetInnerHTML={{ __html: t("step-reunion-title") }}
                ></h3>
                <p
                  className="cinematic-desc"
                  dangerouslySetInnerHTML={{ __html: t("step-reunion-desc") }}
                ></p>
                <img
                  src={`${import.meta.env.BASE_URL}assets/hero-step1.png`}
                  alt="Café & Ideas"
                  className="mobile-step-img"
                  loading="lazy"
                />
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="workflow-step-text-block"
                id="text-step-2"
                data-step-index={1}
                animate={
                  isMobile
                    ? {}
                    : {
                        opacity: activeStep === 1 ? 1 : 0,
                        y: activeStep === 1 ? 0 : activeStep > 1 ? -40 : 40,
                        pointerEvents: activeStep === 1 ? "all" : "none",
                      }
                }
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="step-badge-premium">{t("step-badge-2")}</span>
                <h3
                  className="cinematic-title"
                  dangerouslySetInnerHTML={{ __html: t("step-diseno-title") }}
                ></h3>
                <p
                  className="cinematic-desc"
                  dangerouslySetInnerHTML={{ __html: t("step-diseno-desc") }}
                ></p>
                <img
                  src={`${import.meta.env.BASE_URL}assets/hero-step2.png`}
                  alt="El Boceto"
                  className="mobile-step-img"
                  loading="lazy"
                />
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="workflow-step-text-block"
                id="text-step-3"
                data-step-index={2}
                animate={
                  isMobile
                    ? {}
                    : {
                        opacity: activeStep === 2 ? 1 : 0,
                        y: activeStep === 2 ? 0 : activeStep > 2 ? -40 : 40,
                        pointerEvents: activeStep === 2 ? "all" : "none",
                      }
                }
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="step-badge-premium">{t("step-badge-3")}</span>
                <h3
                  className="cinematic-title"
                  dangerouslySetInnerHTML={{
                    __html: t("step-desarrollo-title"),
                  }}
                ></h3>
                <p
                  className="cinematic-desc"
                  dangerouslySetInnerHTML={{
                    __html: t("step-desarrollo-desc"),
                  }}
                ></p>
                <img
                  src={`${import.meta.env.BASE_URL}assets/hero-step3.png`}
                  alt="El Código"
                  className="mobile-step-img"
                  loading="lazy"
                />
              </motion.div>

              {/* Step 4 */}
              <motion.div
                className="workflow-step-text-block"
                id="text-step-4"
                data-step-index={3}
                animate={
                  isMobile
                    ? {}
                    : {
                        opacity: activeStep === 3 ? 1 : 0,
                        y: activeStep === 3 ? 0 : activeStep > 3 ? -40 : 40,
                        pointerEvents: activeStep === 3 ? "all" : "none",
                      }
                }
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="step-badge-premium">{t("step-badge-4")}</span>
                <h3
                  className="cinematic-title"
                  dangerouslySetInnerHTML={{
                    __html: t("step-publicacion-title"),
                  }}
                ></h3>
                <p
                  className="cinematic-desc"
                  dangerouslySetInnerHTML={{
                    __html: t("step-publicacion-desc"),
                  }}
                ></p>
                <img
                  src={`${import.meta.env.BASE_URL}assets/hero-step4.png`}
                  alt="El Despegue"
                  className="mobile-step-img"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Central timeline axis */}
            <div className="workflow-center-timeline">
              <div className="timeline-axis"></div>
              <motion.div
                className="timeline-progress-fill"
                style={isMobile ? { height: 0 } : { height: progressHeight }}
              ></motion.div>
              <div
                className={`timeline-node node-1 ${activeStep >= 0 ? "active" : ""}`}
                data-step="1"
              ></div>
              <div
                className={`timeline-node node-2 ${activeStep >= 1 ? "active" : ""}`}
                data-step="2"
              ></div>
              <div
                className={`timeline-node node-3 ${activeStep >= 2 ? "active" : ""}`}
                data-step="3"
              ></div>
              <div
                className={`timeline-node node-4 ${activeStep >= 3 ? "active" : ""}`}
                data-step="4"
              ></div>
            </div>

            {/* Right side: visual viewport */}
            <div className="workflow-right-visual">
              <div className="workflow-image-viewport">
                <div
                  className={`workflow-image-pane ${activeStep === 0 ? "active" : ""}`}
                  style={{
                    backgroundImage: `url("${import.meta.env.BASE_URL}assets/hero-step1.png")`,
                  }}
                ></div>
                <div
                  className={`workflow-image-pane ${activeStep === 1 ? "active" : ""}`}
                  style={{
                    backgroundImage: `url("${import.meta.env.BASE_URL}assets/hero-step2.png")`,
                  }}
                ></div>
                <div
                  className={`workflow-image-pane ${activeStep === 2 ? "active" : ""}`}
                  style={{
                    backgroundImage: `url("${import.meta.env.BASE_URL}assets/hero-step3.png")`,
                  }}
                ></div>
                <div
                  className={`workflow-image-pane ${activeStep === 3 ? "active" : ""}`}
                  style={{
                    backgroundImage: `url("${import.meta.env.BASE_URL}assets/hero-step4.png")`,
                  }}
                ></div>
                <div className="workflow-image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
