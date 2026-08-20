import { Box, Container, Typography, Paper, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';
import CodeIcon from '@mui/icons-material/Code';
import { whileInViewFadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    {
      number: '4.5+',
      label: 'Years of Experience',
      description: 'Building scalable systems',
      icon: <WorkIcon sx={{ fontSize: 32 }} />,
    },
    {
      number: '5+',
      label: 'Enterprise Platforms',
      description: 'Production-grade solutions',
      icon: <FolderIcon sx={{ fontSize: 32 }} />,
    },
    {
      number: '11',
      label: 'Open Source PRs',
      description: 'Contributions merged',
      icon: <CodeIcon sx={{ fontSize: 32 }} />,
    },
  ];

  return (
    <Box
      id="about"
      component={motion.section}
      sx={{
        py: 10,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <motion.div
          initial={whileInViewFadeInUp.initial}
          whileInView={whileInViewFadeInUp.whileInView}
          viewport={whileInViewFadeInUp.viewport}
          transition={whileInViewFadeInUp.transition}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 2, fontWeight: 700 }}>
            About Me
          </Typography>
        </motion.div>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={7}>
            <motion.div
              initial={whileInViewFadeInUp.initial}
              whileInView={whileInViewFadeInUp.whileInView}
              viewport={whileInViewFadeInUp.viewport}
              transition={whileInViewFadeInUp.transition}
            >
              <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, backgroundColor: 'background.paper', height: '100%', borderRadius: 3 }}>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                  Hello, I'm <strong>Lakshay Maheshwari</strong> — working as <strong>Consultant Developer @ Thoughtworks</strong> with 4.5+ years of software engineering experience.
                  I specialize in architecting fast, scalable, production-grade distributed systems, full-stack enterprise platforms (FastAPI, React, TypeScript), and cloud-native microservices.
                  Comfortable owning platforms end-to-end — from system architecture, backend APIs, and TDD to Docker/Kubernetes deployment and cross-functional production rollouts.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                  Specializing in <strong>Golang, Python, FastAPI, React, Cloud & Kubernetes</strong>, focusing on clean architecture, resilient event-driven systems, and engineering best practices.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 4 }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outlined"
                      startIcon={<DownloadIcon />}
                      href="/lakshay88/resume.pdf"
                      target="_blank"
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        borderWidth: 2,
                        backgroundColor: 'transparent',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                          borderColor: 'primary.main',
                        },
                        '&:focus': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                          borderColor: 'primary.main',
                        },
                      }}
                    >
                      Resume
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outlined"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => scrollToSection('experience')}
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        borderWidth: 2,
                        backgroundColor: 'transparent',
                        '&:hover': {
                          borderColor: 'primary.main',
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                        '&:focus': {
                          borderColor: 'primary.main',
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    >
                      View Experience
                    </Button>
                  </motion.div>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
            >
              <Grid container spacing={2}>
                {stats.map((stat, index) => (
                  <Grid item xs={12} key={index}>
                    <motion.div variants={staggerItem}>
                      <Card
                        elevation={2}
                        component={motion.div}
                        whileHover={{ y: -8, scale: 1.02 }}
                        sx={{
                          height: '100%',
                          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                          border: '2px solid',
                          borderColor: 'primary.light',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Box
                              sx={{
                                p: 1.5,
                                borderRadius: 2,
                                backgroundColor: 'primary.main',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {stat.icon}
                            </Box>
                            <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 0 }}>
                              {stat.number}
                            </Typography>
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {stat.label}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
