import { Box, Typography, Button, Container, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const tickerTechnologies = [
  { label: 'GO (GOLANG)', url: 'https://go.dev/' },
  { label: 'PYTHON', url: 'https://www.python.org/' },
  { label: 'REACT', url: 'https://react.dev/' },
  { label: 'TYPESCRIPT', url: 'https://www.typescriptlang.org/' },
  { label: 'JAVASCRIPT', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { label: 'KUBERNETES', url: 'https://kubernetes.io/' },
  { label: 'DOCKER', url: 'https://www.docker.com/' },
  { label: 'AWS', url: 'https://aws.amazon.com/' },
  { label: 'GOOGLE CLOUD (GCP)', url: 'https://cloud.google.com/' },
  { label: 'RABBITMQ', url: 'https://www.rabbitmq.com/' },
  { label: 'KAFKA', url: 'https://kafka.apache.org/' },
  { label: 'REDIS', url: 'https://redis.io/' },
  { label: 'POSTGRESQL', url: 'https://www.postgresql.org/' },
  { label: 'MYSQL', url: 'https://www.mysql.com/' },
  { label: 'ELASTICSEARCH', url: 'https://www.elastic.co/' },
  { label: 'TEST-DRIVEN DEVELOPMENT (TDD)', url: 'https://en.wikipedia.org/wiki/Test-driven_development' },
  { label: 'MICROSERVICES', url: 'https://microservices.io/' },
  { label: 'EVENT-DRIVEN ARCHITECTURE', url: 'https://aws.amazon.com/event-driven-architecture/' },
  { label: 'DISTRIBUTED SYSTEMS', url: 'https://en.wikipedia.org/wiki/Distributed_computing' },
  { label: 'SYSTEM DESIGN', url: 'https://en.wikipedia.org/wiki/Systems_design' },
  { label: 'GRAPHQL', url: 'https://graphql.org/' },
  { label: 'REST APIS', url: 'https://developer.mozilla.org/docs/Glossary/REST' },
  { label: 'FLUTTER', url: 'https://flutter.dev/' },
  { label: 'MATERIAL UI', url: 'https://mui.com/' },
  { label: 'CI/CD & GITHUB ACTIONS', url: 'https://github.com/features/actions' },
  { label: 'JENKINS', url: 'https://www.jenkins.io/' },
  { label: 'TERRAFORM', url: 'https://developer.hashicorp.com/terraform' },
  { label: 'NGINX', url: 'https://www.nginx.com/' },
  { label: 'BASH / LINUX', url: 'https://www.gnu.org/software/bash/' },
];

const HeroAbout = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Box
      id="hero"
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      sx={{
        minHeight: { xs: 'auto', md: '94svh' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Section 1: Title Section (Top) */}
      <Box sx={{ width: '100%', pt: { xs: 13, md: 17 }, pb: 3 }}>
        <Container maxWidth="lg" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <Chip
              label="Consultant Developer · Thoughtworks"
              sx={{
                mb: 3,
                color: 'secondary.light',
                border: '1px solid rgba(94,234,212,.26)',
                backgroundColor: 'rgba(94,234,212,.08)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.04em',
              }}
            />
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <Typography
              variant="h1"
              component={motion.h1}
              variants={titleVariants}
              sx={{
                mb: 2,
                fontWeight: 800,
                maxWidth: 950,
                fontSize: { xs: '2.5rem', sm: '3.8rem', md: '5rem' },
                lineHeight: 1.02,
                letterSpacing: '-0.045em',
              }}
            >
              <motion.span variants={titleVariants}>
                I engineer resilient platforms and scalable distributed systems.
              </motion.span>
            </Typography>
          </motion.div>

          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                maxWidth: '650px',
                lineHeight: 1.8,
                color: 'text.secondary',
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                fontWeight: 400,
              }}
            >
              Distributed Microservices · Cloud-Native Infrastructure · Test-Driven Development (TDD)
            </Typography>
          </motion.div>

          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                lineHeight: 1.8,
                color: 'text.primary',
                fontSize: { xs: '0.95rem', sm: '1.1rem' },
                maxWidth: 840,
              }}
            >
              Go, Python, React, Kubernetes and Cloud Systems—from low-latency microservices and event-driven worker pipelines to clean architectures that scale.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Section 2: Introduction Text (Middle - Full Width) */}
      <Box sx={{ width: '100%', py: 2 }}>
        <Container maxWidth="lg" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.5 }}
          >
            <Box
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 4,
                p: { xs: 2.5, sm: 3, md: 4 },
                maxWidth: '1050px',
                backgroundColor: 'rgba(13,27,45,.75)',
                backdropFilter: 'blur(18px)',
                boxShadow: '0 24px 70px rgba(0, 0, 0, 0.28)',
              }}
            >
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.25fr .75fr' }, gap: 4, alignItems: 'center' }}>
                <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', sm: '1.05rem' }, lineHeight: 1.85, color: 'text.primary' }}>
                  I'm <strong>Lakshay Maheshwari</strong>, working as <strong>Consultant Developer @ Thoughtworks</strong> with 3+ years of coding experience. A passionate learner willing to learn and work across technologies and domains 💡. I love to explore new technologies, design robust cloud-native microservices, and build high-performance systems ✨.
                </Typography>
                <Box sx={{ border: '1px solid rgba(94,234,212,.22)', borderRadius: 2.5, overflow: 'hidden', backgroundColor: 'rgba(3,10,19,.85)', textAlign: 'left', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                  <Box sx={{ display: 'flex', gap: .75, px: 2, py: 1.25, borderBottom: '1px solid', borderColor: 'divider' }}>
                    {['#fb7185', '#fbbf24', '#5eead4'].map((color) => <Box key={color} sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: color }} />)}
                    <Typography sx={{ ml: 1, fontFamily: 'inherit', fontSize: '.68rem', color: 'text.secondary' }}>thoughtworks.status</Typography>
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '.78rem', color: 'secondary.main', mb: 1 }}>$ kubectl get platform</Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '.72rem', color: 'text.secondary', mb: .7 }}>SYSTEM&nbsp;&nbsp;&nbsp;&nbsp; thoughtworks-cluster</Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '.72rem', color: 'text.secondary', mb: .7 }}>STATUS&nbsp;&nbsp;&nbsp;&nbsp; <Box component="span" sx={{ color: 'secondary.main' }}>● HEALTHY</Box></Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '.72rem', color: 'text.secondary' }}>PRACTICES&nbsp; TDD / CI-CD / Clean-Code</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2.5, mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                {[['3+ Years', 'coding experience'], ['< 25 ms', 'API response latency'], ['99.9%', 'uptime & reliability'], ['100%', 'TDD test coverage']].map(([value, label]) => (
                  <Box key={label}>
                    <Typography variant="h4" color="secondary.main" sx={{ fontWeight: 800, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>{value}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '.09em', fontSize: '.68rem' }}>{label}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Section 3: Action Buttons (Bottom) */}
      <Box sx={{ width: '100%', py: 2, pb: 4 }}>
        <Container maxWidth="lg" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', px: { xs: 2, sm: 0 } }}>
              <motion.div variants={staggerItem}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
                    href="/lakshay88/resume.pdf"
                    target="_blank"
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1.25, sm: 1.5 },
                      fontSize: { xs: '0.95rem', sm: '1.1rem' },
                      borderColor: 'white',
                      color: 'white',
                      borderWidth: 2,
                      backgroundColor: 'transparent',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        borderColor: 'primary.main',
                        transform: 'translateY(-2px)',
                      },
                      '&:focus': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        borderColor: 'primary.main',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Resume
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div variants={staggerItem}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection('portfolio')}
                    startIcon={<CodeIcon />}
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1.25, sm: 1.5 },
                      fontSize: { xs: '0.95rem', sm: '1.1rem' },
                      borderColor: 'white',
                      color: 'white',
                      borderWidth: 2,
                      backgroundColor: 'transparent',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-2px)',
                      },
                      '&:focus': {
                        borderColor: 'primary.main',
                        backgroundColor: 'primary.main',
                        color: 'white',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Featured Projects
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div variants={staggerItem}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection('contact')}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1.25, sm: 1.5 },
                      fontSize: { xs: '0.95rem', sm: '1.1rem' },
                      borderColor: 'rgba(94,234,212,0.5)',
                      color: 'secondary.light',
                      borderWidth: 2,
                      backgroundColor: 'rgba(94,234,212,0.06)',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: 'secondary.main',
                        backgroundColor: 'secondary.main',
                        color: '#07111f',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
      <Box sx={{ borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider', overflow: 'hidden', py: 1.5, backgroundColor: 'rgba(3,10,19,.55)' }}>
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            whiteSpace: 'nowrap',
            animation: 'techTicker 120s linear infinite',
            willChange: 'transform',
            '&:hover': { animationPlayState: 'paused' },
            '@keyframes techTicker': { to: { transform: 'translate3d(-50%, 0, 0)' } },
            '@media (prefers-reduced-motion: reduce)': { animation: 'none', transform: 'none' },
          }}
        >
          {[0, 1].map((copy) => (
            <Box key={copy} aria-hidden={copy === 1} sx={{ display: 'flex', flexShrink: 0, gap: 5, pr: 5 }}>
              {tickerTechnologies.map(({ label, url }) => (
                <Typography
                  key={`${copy}-${label}`}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={copy === 1 ? -1 : 0}
                  sx={{
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    fontSize: '.72rem',
                    letterSpacing: '.16em',
                    color: 'text.secondary',
                    textDecoration: 'none',
                    transition: 'color .2s ease',
                    '&:hover, &:focus-visible': { color: 'secondary.main' },
                  }}
                >
                  <Box component="span" sx={{ color: 'secondary.main', mr: 1 }}>◆</Box>{label}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroAbout;
