import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link as RouterLink } from 'react-router-dom';
import { whileInViewFadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { experiences } from '../data/experiences';
import { useState } from 'react';

const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Box
      id="experience"
      component={motion.section}
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      sx={{
        minHeight: 'auto',
        py: 10,
        backgroundColor: 'transparent',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        contentVisibility: 'auto',
        containIntrinsicSize: '900px',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <motion.div
          initial={whileInViewFadeInUp.initial}
          whileInView={whileInViewFadeInUp.whileInView}
          viewport={{ once: true, margin: '-50px' }}
          transition={whileInViewFadeInUp.transition}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 750 }}>
            Experience
          </Typography>
        </motion.div>

        <Box>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            {experiences.map((exp) => (
              <Box
                key={exp.id}
                component={motion.div}
                variants={staggerItem}
                sx={{
                  position: 'relative',
                  mb: 5,
                }}
              >
                <motion.div
                  onHoverStart={() => setExpandedId(exp.id)}
                  onHoverEnd={() => setExpandedId(null)}
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Paper
                    sx={{
                      p: { xs: 3, sm: 4 },
                      position: 'relative',
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: expandedId === exp.id ? 'secondary.main' : 'divider',
                      backgroundColor: 'rgba(13,27,45,.75)',
                      backdropFilter: 'blur(16px)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: expandedId === exp.id ? '0 12px 40px rgba(0,0,0,0.35)' : '0 4px 20px rgba(0,0,0,0.2)',
                    }}
                  >
                  {/* Date range */}
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: 'secondary.light',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                    }}
                  >
                    {exp.period}
                  </Typography>

                  {/* Job title */}
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 1,
                      fontWeight: 700,
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    }}
                  >
                    {exp.title}
                  </Typography>

                  {/* Company name */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, flexWrap: 'wrap' }}>
                    <Typography
                      variant="h6"
                      color="primary.main"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                      }}
                    >
                      {exp.company}
                    </Typography>
                    {exp.companyWebsite && (
                      <Button
                        component="a"
                        href={exp.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        endIcon={<LaunchIcon sx={{ fontSize: '0.85rem' }} />}
                        sx={{
                          minWidth: 'auto',
                          px: 1,
                          py: 0.5,
                          fontSize: '0.75rem',
                          color: 'secondary.light',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        Website
                      </Button>
                    )}
                  </Box>

                  {/* Location */}
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      fontSize: '0.875rem',
                    }}
                  >
                    {exp.location}
                  </Typography>

                  {/* Short description */}
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      lineHeight: 1.75,
                      color: 'text.primary',
                    }}
                  >
                    {exp.shortDescription}
                  </Typography>

                  {/* Expanded achievements on hover */}
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <Box
                        sx={{
                          mt: 2,
                          pt: 2,
                          borderTop: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            mb: 1.5,
                            fontWeight: 600,
                            color: 'secondary.main',
                          }}
                        >
                          Key Achievements:
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                          {exp.achievements.slice(0, 4).map((achievement, idx) => (
                            <li key={idx}>
                              <Typography
                                variant="body2"
                                sx={{
                                  mb: 1,
                                  lineHeight: 1.6,
                                  color: 'text.secondary',
                                }}
                              >
                                {achievement}
                              </Typography>
                            </li>
                          ))}
                        </Box>
                      </Box>
                    </motion.div>
                  )}

                  {/* View More button */}
                  <Box sx={{ mt: 2 }}>
                    <Button
                      component={RouterLink}
                      to={`/lakshay88/experience/${exp.id}`}
                      variant="outlined"
                      size="medium"
                      endIcon={<LaunchIcon />}
                      sx={{
                        borderColor: 'rgba(255,255,255,0.25)',
                        color: 'white',
                        borderWidth: 1.5,
                        backgroundColor: 'transparent',
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: 'secondary.main',
                          backgroundColor: 'secondary.main',
                          color: '#07111f',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      View Details
                    </Button>
                  </Box>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
