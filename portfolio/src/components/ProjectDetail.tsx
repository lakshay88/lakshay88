import { Box, Container, Typography, Paper, Chip, Button, Divider, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import { projects } from '../data/projects';
import { getTechIcon } from './TechStackIcons';
import { getTechColor } from '../utils/techColors';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Box sx={{ py: 10, textAlign: 'center', minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Typography variant="h4">Project not found</Typography>
        <Button onClick={() => navigate('/lakshay88#portfolio', { state: { scrollTo: 'portfolio' } })} sx={{ mt: 2 }}>
          Back to Projects
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        py: 10,
        minHeight: '100vh',
        backgroundColor: 'background.default',
        pt: 14,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/lakshay88#portfolio', { state: { scrollTo: 'portfolio' } })}
          sx={{ mb: 4, color: 'secondary.light', fontWeight: 600 }}
        >
          Back to Projects
        </Button>

        <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, mb: 4, borderRadius: 3, backgroundColor: 'rgba(13,27,45,0.8)', border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 750, mb: 2 }}>
            {project.title}
          </Typography>
          
          {project.company && (
            <Typography variant="h5" color="secondary.main" gutterBottom sx={{ fontWeight: 600 }}>
              {project.company}
            </Typography>
          )}
          
          {project.role && (
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
              Role: {project.role}
            </Typography>
          )}
          
          {project.duration && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Timeline: {project.duration}
            </Typography>
          )}

          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            {project.link && (
              <Button
                variant="contained"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<LaunchIcon />}
                sx={{
                  backgroundColor: 'primary.main',
                  color: '#07111f',
                  fontWeight: 700,
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  },
                }}
              >
                View Repository / Live
              </Button>
            )}
            {project.githubLink && (
              <Button
                variant="outlined"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: 'rgba(255,255,255,0.25)',
                  color: 'white',
                  borderWidth: 1.5,
                  backgroundColor: 'transparent',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(56,189,248,0.1)',
                  },
                }}
              >
                View on GitHub
              </Button>
            )}
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, color: 'secondary.light' }}>
            Overview
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, color: 'text.primary' }}>
            {project.longDescription || project.description}
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, color: 'secondary.light' }}>
                Key Features
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {project.features.map((feature, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" sx={{ mb: 1.25, color: 'text.secondary', lineHeight: 1.6 }}>
                      {feature}
                    </Typography>
                  </li>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, color: 'secondary.light' }}>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.techStack.map((tech) => {
                  const icon = getTechIcon(tech);
                  const colors = getTechColor(tech);
                  return (
                    <Chip
                      key={tech}
                      icon={icon || undefined}
                      label={tech}
                      sx={{
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        backgroundColor: colors.bg,
                        color: colors.text,
                        borderRadius: '6px',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  );
                })}
              </Box>
            </Grid>
          </Grid>

          {project.challenges && project.challenges.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, color: 'secondary.light' }}>
                Key Challenges & Solutions
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                {project.challenges.map((challenge, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" sx={{ mb: 1.25, color: 'text.secondary', lineHeight: 1.6 }}>
                      {challenge}
                    </Typography>
                  </li>
                ))}
              </Box>
            </>
          )}

          {project.achievements && project.achievements.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, color: 'secondary.light' }}>
                Key Achievements
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                {project.achievements.map((achievement, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" sx={{ mb: 1.25, color: 'text.secondary', lineHeight: 1.6 }}>
                      {achievement}
                    </Typography>
                  </li>
                ))}
              </Box>
            </>
          )}

          {project.impact && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, color: 'secondary.light' }}>
                Impact & Outcomes
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.primary' }}>
                {project.impact}
              </Typography>
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
