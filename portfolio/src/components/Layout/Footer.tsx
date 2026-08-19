import { Box, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Footer = () => {
  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/lakshay88', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/lakshaymaheshwari81/', label: 'LinkedIn' },
    { icon: <EmailIcon />, url: 'mailto:lakshaymaheshwari81@gmail.com', label: 'Email' },
  ];

  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#050c16',
        py: 3.5,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease',
        minHeight: 'auto',
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
          <motion.div variants={staggerItem}>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component={motion.a}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  sx={{
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    padding: '6px',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', textAlign: 'center' }}>
              © {new Date().getFullYear()} Lakshay Maheshwari · Consultant Developer @ Thoughtworks. Built with React & Vite.
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Footer;
