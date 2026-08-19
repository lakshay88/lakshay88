import { AppBar, Toolbar, Button, Box, Chip, useScrollTrigger } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect, type MouseEvent } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'journey', label: 'Impact' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  const isHome = location.pathname === '/lakshay88' || location.pathname === '/' || location.pathname === '/lakshay88/';

  const scrollToSection = (sectionId: string) => {
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  };

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      event.preventDefault();
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar
      component={motion.nav}
      position="fixed"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      sx={{
        backgroundColor: scrolled ? 'rgba(7, 17, 31, 0.85)' : 'rgba(7, 17, 31, 0.4)',
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,.25)' : 0,
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(18px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between',
          maxWidth: '1200px',
          mx: 'auto',
          width: '100%',
          px: { xs: 2, sm: 3 },
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            component={RouterLink}
            to="/lakshay88#hero"
            state={{ scrollTo: 'hero' }}
            onClick={handleHomeClick}
            sx={{
              color: 'text.primary',
              fontWeight: 800,
              fontSize: { xs: '1rem', sm: '1.15rem' },
              textTransform: 'none',
              letterSpacing: '-0.02em',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <Box component="span" sx={{ background: 'linear-gradient(90deg, #38bdf8, #5eead4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Lakshay Maheshwari
            </Box>
          </Button>
        </motion.div>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
          {sections.map((section) => (
            <motion.div
              key={section.id}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Button
                component={RouterLink}
                to={`/lakshay88#${section.id}`}
                state={{ scrollTo: section.id }}
                onClick={(event) => {
                  if (isHome) {
                    event.preventDefault();
                    scrollToSection(section.id);
                  }
                }}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '0.95rem' },
                  minWidth: 'auto',
                  px: { xs: 1, sm: 1.5 },
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'primary.main',
                    },
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {section.label}
              </Button>
            </motion.div>
          ))}
        </Box>
        <Chip
          label="Thoughtworks"
          size="small"
          sx={{ display: { xs: 'flex', md: 'none' }, color: 'secondary.light', backgroundColor: 'rgba(94,234,212,.1)', fontWeight: 600 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
