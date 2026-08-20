import { Box, Container, Typography, Paper, IconButton, Grid, TextField, Button, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { whileInViewFadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { useState, type FormEvent } from 'react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const socialLinks = [
    {
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      url: 'tel:+918890360389',
      label: 'Mobile / WhatsApp',
      text: '+91 8890360389',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      url: 'mailto:lakshaymaheshwari81@gmail.com',
      label: 'Email',
      text: 'lakshaymaheshwari81@gmail.com',
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
      url: 'https://www.linkedin.com/in/lakshaymaheshwari81/',
      label: 'LinkedIn',
      text: 'Connect on LinkedIn',
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 32 }} />,
      url: 'https://github.com/lakshay88',
      label: 'GitHub',
      text: '@lakshay88',
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:lakshaymaheshwari81@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <Box
      id="contact"
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      sx={{
        minHeight: 'auto',
        contentVisibility: 'auto',
        containIntrinsicSize: '700px',
        py: 10,
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <motion.div
          initial={whileInViewFadeInUp.initial}
          whileInView={whileInViewFadeInUp.whileInView}
          viewport={whileInViewFadeInUp.viewport}
          transition={whileInViewFadeInUp.transition}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 2, fontWeight: 750 }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}>
            Looking to collaborate, discuss distributed systems, or chat about tech? Feel free to reach out!
          </Typography>
        </motion.div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={whileInViewFadeInUp.initial}
              whileInView={whileInViewFadeInUp.whileInView}
              viewport={whileInViewFadeInUp.viewport}
              transition={whileInViewFadeInUp.transition}
            >
              <Paper elevation={2} sx={{ p: { xs: 3, sm: 4 }, height: '100%', borderRadius: 3, backgroundColor: 'rgba(13,27,45,0.75)', border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 650, mb: 1, color: 'secondary.light' }}>
                  Send a Message
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Fill in the form below to initiate an email directly to my inbox.
                </Typography>
                {formSubmitted && (
                  <Alert icon={<CheckCircleOutlineIcon fontSize="inherit" />} severity="success" sx={{ mb: 3 }}>
                    Opening your default email client. Thanks for reaching out!
                  </Alert>
                )}
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <motion.div variants={staggerItem}>
                      <TextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(7,17,31,0.5)',
                            '&:hover fieldset': {
                              borderColor: 'secondary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'secondary.main',
                            },
                          },
                        }}
                      />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <TextField
                        label="Your Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(7,17,31,0.5)',
                            '&:hover fieldset': {
                              borderColor: 'secondary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'secondary.main',
                            },
                          },
                        }}
                      />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <TextField
                        label="Your Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(7,17,31,0.5)',
                            '&:hover fieldset': {
                              borderColor: 'secondary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'secondary.main',
                            },
                          },
                        }}
                      />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{
                            mt: 1,
                            backgroundColor: 'primary.main',
                            color: '#07111f',
                            fontWeight: 700,
                            px: 4,
                            '&:hover': {
                              backgroundColor: 'primary.light',
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.div>
                  </Box>
                </motion.div>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={whileInViewFadeInUp.initial}
              whileInView={whileInViewFadeInUp.whileInView}
              viewport={whileInViewFadeInUp.viewport}
              transition={whileInViewFadeInUp.transition}
            >
              <Paper elevation={2} sx={{ p: { xs: 3, sm: 4 }, height: '100%', borderRadius: 3, backgroundColor: 'rgba(13,27,45,0.75)', border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 650, mb: 1, color: 'secondary.light' }}>
                  Social & Direct Links
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Feel free to connect on LinkedIn or check out my repositories on GitHub.
                </Typography>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {socialLinks.map((social) => (
                      <motion.div key={social.label} variants={staggerItem}>
                        <Box
                          component={motion.a}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 6, scale: 1.01 }}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            textDecoration: 'none',
                            color: 'inherit',
                            borderRadius: 2,
                            border: '1px solid',
                            borderColor: 'divider',
                            backgroundColor: 'rgba(7,17,31,0.5)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: 'secondary.main',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                            },
                          }}
                        >
                          <IconButton
                            sx={{
                              color: 'secondary.light',
                              backgroundColor: 'rgba(94,234,212,0.1)',
                            }}
                          >
                            {social.icon}
                          </IconButton>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              {social.label}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {social.text}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
