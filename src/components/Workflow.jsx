import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

export default function Workflow({ t }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track scroll progress on the desktop container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth out scroll progression using spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.15,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
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
        rootMargin: '-25% 0px -35% 0px',
        threshold: 0.1,
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step-index'), 10);
            if (!isNaN(stepIndex)) {
              setActiveStep(stepIndex);
            }
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const blocks = document.querySelectorAll('.workflow-step-text-block');
      blocks.forEach((block) => observer.observe(block));

      return () => {
        blocks.forEach((block) => observer.unobserve(block));
      };
    }
  }, [isMobile]);

  // Framer Motion transforms for the text block animations in desktop
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 0, -40]);

  const text2Opacity = useTransform(scrollYProgress, [0.15, 0.22, 0.45, 0.55], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.15, 0.22, 0.45, 0.55], [40, 0, 0, -40]);

  const text3Opacity = useTransform(scrollYProgress, [0.45, 0.52, 0.75, 0.85], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.45, 0.52, 0.75, 0.85], [40, 0, 0, -40]);

  const text4Opacity = useTransform(scrollYProgress, [0.75, 0.82, 1.0], [0, 1, 1]);
  const text4Y = useTransform(scrollYProgress, [0.75, 0.82, 1.0], [40, 0, 0]);

  return (
    <>
      <section className="workflow-intro-section" id="como-trabajamos">
        <div className="container">
          <div className="section-header reveal active">
            <span className="section-decor-tag">{t('method-decor')}</span>
            <h2 className="section-title">{t('method-title')}</h2>
            <p className="section-subtitle">{t('method-subtitle')}</p>
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
                style={
                  isMobile
                    ? {}
                    : {
                        opacity: text1Opacity,
                        y: text1Y,
                        pointerEvents: activeStep === 0 ? 'all' : 'none',
                      }
                }
              >
                <span className="step-badge-premium">{t('step-badge-1')}</span>
                <h3 className="cinematic-title" dangerouslySetInnerHTML={{ __html: t('step-reunion-title') }}></h3>
                <p className="cinematic-desc" dangerouslySetInnerHTML={{ __html: t('step-reunion-desc') }}></p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="workflow-step-text-block"
                id="text-step-2"
                data-step-index={1}
                style={
                  isMobile
                    ? {}
                    : {
                        opacity: text2Opacity,
                        y: text2Y,
                        pointerEvents: activeStep === 1 ? 'all' : 'none',
                      }
                }
              >
                <span className="step-badge-premium">{t('step-badge-2')}</span>
                <h3 className="cinematic-title" dangerouslySetInnerHTML={{ __html: t('step-diseno-title') }}></h3>
                <p className="cinematic-desc" dangerouslySetInnerHTML={{ __html: t('step-diseno-desc') }}></p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="workflow-step-text-block"
                id="text-step-3"
                data-step-index={2}
                style={
                  isMobile
                    ? {}
                    : {
                        opacity: text3Opacity,
                        y: text3Y,
                        pointerEvents: activeStep === 2 ? 'all' : 'none',
                      }
                }
              >
                <span className="step-badge-premium">{t('step-badge-3')}</span>
                <h3 className="cinematic-title" dangerouslySetInnerHTML={{ __html: t('step-desarrollo-title') }}></h3>
                <p className="cinematic-desc" dangerouslySetInnerHTML={{ __html: t('step-desarrollo-desc') }}></p>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                className="workflow-step-text-block"
                id="text-step-4"
                data-step-index={3}
                style={
                  isMobile
                    ? {}
                    : {
                        opacity: text4Opacity,
                        y: text4Y,
                        pointerEvents: activeStep === 3 ? 'all' : 'none',
                      }
                }
              >
                <span className="step-badge-premium">{t('step-badge-4')}</span>
                <h3 className="cinematic-title" dangerouslySetInnerHTML={{ __html: t('step-publicacion-title') }}></h3>
                <p className="cinematic-desc" dangerouslySetInnerHTML={{ __html: t('step-publicacion-desc') }}></p>
              </motion.div>
            </div>

            {/* Central timeline axis */}
            <div className="workflow-center-timeline">
              <div className="timeline-axis"></div>
              <motion.div
                className="timeline-progress-fill"
                style={isMobile ? { height: 0 } : { height: progressHeight }}
              ></motion.div>
              <div className={`timeline-node node-1 ${activeStep >= 0 ? 'active' : ''}`} data-step="1"></div>
              <div className={`timeline-node node-2 ${activeStep >= 1 ? 'active' : ''}`} data-step="2"></div>
              <div className={`timeline-node node-3 ${activeStep >= 2 ? 'active' : ''}`} data-step="3"></div>
              <div className={`timeline-node node-4 ${activeStep >= 3 ? 'active' : ''}`} data-step="4"></div>
            </div>

            {/* Right side: visual viewport */}
            <div className="workflow-right-visual">
              <div className="workflow-image-viewport">
                <div
                  className={`workflow-image-pane ${activeStep === 0 ? 'active' : ''}`}
                  style={{ backgroundImage: "url('/assets/hero-step1.png')" }}
                ></div>
                <div
                  className={`workflow-image-pane ${activeStep === 1 ? 'active' : ''}`}
                  style={{ backgroundImage: "url('/assets/hero-step2.png')" }}
                ></div>
                <div
                  className={`workflow-image-pane ${activeStep === 2 ? 'active' : ''}`}
                  style={{ backgroundImage: "url('/assets/hero-step3.png')" }}
                ></div>
                <div
                  className={`workflow-image-pane ${activeStep === 3 ? 'active' : ''}`}
                  style={{ backgroundImage: "url('/assets/hero-step4.png')" }}
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
