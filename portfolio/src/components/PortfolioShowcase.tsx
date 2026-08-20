import { Box, Container, Typography, Tabs, Tab, Paper, Card, CardContent, CardActions, Button, Chip, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { projects } from '../data/projects';
import { openSourceContributions } from '../data/openSource';
import { whileInViewFadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { getTechIcon } from './TechStackIcons';
import { getTechColor } from '../utils/techColors';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      aria-labelledby={`portfolio-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const PortfolioShowcase = () => {
  const SHOW_PROJECTS_TAB = true;
  const [value, setValue] = useState(0);
  const [livePullRequestCounts, setLivePullRequestCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const controller = new AbortController();
    const query = encodeURIComponent('author:lakshay88 is:pr');

    fetch(`https://api.github.com/search/issues?q=${query}&sort=created&order=desc&per_page=100`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('GitHub API request failed');
        return response.json() as Promise<{ items: Array<{ repository_url: string; pull_request?: { merged_at?: string | null } }> }>;
      })
      .then(({ items }) => {
        const counts = items.reduce<Record<string, number>>((result, item) => {
          if (item.pull_request?.merged_at) {
            const repository = item.repository_url.replace('https://api.github.com/repos/', '').toLowerCase();
            result[repository] = (result[repository] || 0) + 1;
          }
          return result;
        }, {});
        setLivePullRequestCounts(counts);
      })
      .catch((error) => {
        if ((error as Error).name !== 'AbortError') setLivePullRequestCounts({});
      });

    return () => controller.abort();
  }, []);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const skillCategories = {
    'Languages & Frameworks': ['Golang', 'Python', 'FastAPI', 'Gin', 'GORM', 'TypeScript', 'JavaScript', 'SQL', 'HTML5', 'CSS3', 'Bash'],
    'AI, Data & Architecture': [
      'RAG (Retrieval-Augmented Generation)',
      'Google Vertex AI',
      'Gemini',
      'Claude API',
      'REST APIs',
      'gRPC',
      'Microservices',
      'Event-Driven Architecture',
      'RBAC & Security',
      'System Design',
    ],
    'Frontend & Web': ['React', 'TypeScript', 'JavaScript', 'Redux', 'Material UI', 'TailwindCSS', 'HTML5', 'CSS3'],
    'Data, Messaging & Caching': ['PostgreSQL', 'MySQL', 'DGraph', 'Redis', 'RabbitMQ', 'Kafka', 'SQL'],
    'Cloud, DevOps & Tooling': [
      'Docker',
      'Kubernetes',
      'Terraform',
      'Prometheus',
      'Grafana',
      'Google Cloud (GCP)',
      'AWS',
      'Jenkins',
      'CI/CD',
      'GitHub Actions',
      'Git',
      'GitHub',
      'Bitbucket',
      'Jest',
      'Postman',
    ],
  };

  return (
    <Box
      id="portfolio"
      component={motion.section}
      initial={{ opacity: 0, scale: 0.985 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      sx={{
        minHeight: 'auto',
        py: 10,
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        contentVisibility: 'auto',
        containIntrinsicSize: '1000px',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <motion.div
          initial={whileInViewFadeInUp.initial}
          whileInView={whileInViewFadeInUp.whileInView}
          viewport={whileInViewFadeInUp.viewport}
          transition={whileInViewFadeInUp.transition}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 750, mb: 2 }}>
              Portfolio Showcase
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
              Explore my featured projects, open source repositories, and technical skills across cloud, distributed systems, and modern web architectures.
            </Typography>
          </Box>
        </motion.div>

        <Paper 
          elevation={3} 
          sx={{ 
            borderRadius: 3, 
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'rgba(13,27,45,.65)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            sx={{
              borderBottom: 2,
              borderColor: 'divider',
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                py: 2.5,
                minHeight: 64,
              },
              '& .Mui-selected': {
                color: 'secondary.light',
              },
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: '3px 3px 0 0',
                backgroundColor: 'secondary.main',
              },
            }}
          >
            {SHOW_PROJECTS_TAB && (
              <Tab
                icon={<CodeIcon sx={{ mb: 0.5 }} />}
                iconPosition="start"
                label="Featured Projects"
                id="portfolio-tab-0"
                aria-controls="portfolio-tabpanel-0"
              />
            )}
            <Tab
              icon={<BuildIcon sx={{ mb: 0.5 }} />}
              iconPosition="start"
              label="Open Source"
              id={`portfolio-tab-${SHOW_PROJECTS_TAB ? 1 : 0}`}
              aria-controls={`portfolio-tabpanel-${SHOW_PROJECTS_TAB ? 1 : 0}`}
            />
            <Tab
              icon={<SchoolIcon sx={{ mb: 0.5 }} />}
              iconPosition="start"
              label="Tech Stack"
              id={`portfolio-tab-${SHOW_PROJECTS_TAB ? 2 : 1}`}
              aria-controls={`portfolio-tabpanel-${SHOW_PROJECTS_TAB ? 2 : 1}`}
            />
          </Tabs>

          <Box sx={{ p: { xs: 3, sm: 4 } }}>
            <AnimatePresence mode="wait">
              {SHOW_PROJECTS_TAB && (
                <TabPanel value={value} index={0} key="projects">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <Grid container spacing={3}>
                      {projects.map((project) => (
                        <Grid item xs={12} md={6} lg={4} key={project.id}>
                          <motion.div variants={staggerItem}>
                            <Card
                              component={motion.div}
                              whileHover={{ y: -8, scale: 1.01 }}
                              sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                backgroundColor: 'rgba(15,33,52,.85)',
                                transition: 'all 0.3s ease',
                              }}
                            >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 650, fontSize: '1.2rem' }}>
                          {project.title}
                        </Typography>
                        {project.company && (
                          <Typography variant="subtitle2" color="secondary.main" gutterBottom sx={{ fontWeight: 600 }}>
                            {project.company}
                          </Typography>
                        )}
                        <Typography variant="body2" paragraph sx={{ mb: 2, color: 'text.secondary', minHeight: '60px', lineHeight: 1.6 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                          {project.techStack.slice(0, 4).map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(56,189,248,0.15)',
                                color: 'primary.light',
                                border: '1px solid rgba(56,189,248,0.3)',
                                fontSize: '0.72rem',
                                fontWeight: 500,
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between' }}>
                        <Button
                          component={Link}
                          to={`/lakshay88/project/${project.id}`}
                          size="small"
                          endIcon={<ArrowForwardIcon />}
                          sx={{ color: 'secondary.light', fontWeight: 600 }}
                        >
                          Details
                        </Button>
                        {project.link && (
                          <Button
                            size="small"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            endIcon={<LaunchIcon sx={{ fontSize: '1rem' }} />}
                            sx={{ color: 'text.secondary', fontSize: '0.8rem' }}
                          >
                            Code
                          </Button>
                        )}
                      </CardActions>
                            </Card>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </motion.div>
              </TabPanel>
              )}

              <TabPanel value={value} index={SHOW_PROJECTS_TAB ? 1 : 0} key="opensource">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <Grid container spacing={3}>
                      {openSourceContributions.map((contribution) => {
                        const repositoryPath = contribution.repository.replace('https://github.com/', '').replace(/\/$/, '').toLowerCase();
                        const pullRequestCount = livePullRequestCounts[repositoryPath] ?? contribution.pullRequests?.filter((pr) => pr.status === 'merged').length ?? 0;
                        return (
                        <Grid item xs={12} md={6} key={contribution.id}>
                          <motion.div variants={staggerItem}>
                            <Card
                              component={motion.div}
                              whileHover={{ y: -8, scale: 1.01 }}
                              sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                backgroundColor: 'rgba(15,33,52,.85)',
                                transition: 'all 0.3s ease',
                              }}
                            >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 650, fontSize: '1.2rem' }}>
                          {contribution.title}
                        </Typography>
                        {contribution.organization && (
                          <Typography variant="subtitle2" color="secondary.main" gutterBottom sx={{ fontWeight: 600 }}>
                            {contribution.organization}
                          </Typography>
                        )}
                        <Typography variant="body2" paragraph sx={{ mb: 2, color: 'text.secondary', minHeight: '60px', lineHeight: 1.6 }}>
                          {contribution.description}
                        </Typography>
                        {pullRequestCount > 0 && (
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {pullRequestCount} Pull Request{pullRequestCount > 1 ? 's' : ''} merged
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                          component={Link}
                          to={`/lakshay88/opensource/${contribution.id}`}
                          variant="outlined"
                          size="small"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            borderColor: 'rgba(255,255,255,0.25)',
                            color: 'white',
                            borderWidth: 1.5,
                            backgroundColor: 'transparent',
                            fontWeight: 600,
                            mr: 1,
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'white',
                              borderColor: 'primary.main',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Details
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          href={contribution.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          endIcon={<LaunchIcon />}
                          sx={{
                            borderColor: 'rgba(94,234,212,0.3)',
                            color: 'secondary.light',
                            borderWidth: 1.5,
                            backgroundColor: 'transparent',
                            fontWeight: 600,
                            '&:hover': {
                              borderColor: 'secondary.main',
                              backgroundColor: 'rgba(94,234,212,0.1)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Repository
                        </Button>
                      </CardActions>
                            </Card>
                          </motion.div>
                        </Grid>
                      )})}
                    </Grid>
                  </motion.div>
                </motion.div>
              </TabPanel>

              <TabPanel value={value} index={SHOW_PROJECTS_TAB ? 2 : 1} key="techstack">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <motion.div
                      key={category}
                      initial={whileInViewFadeInUp.initial}
                      whileInView={whileInViewFadeInUp.whileInView}
                      viewport={whileInViewFadeInUp.viewport}
                      transition={whileInViewFadeInUp.transition}
                    >
                      <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, mb: 4, backgroundColor: 'rgba(7,17,31,0.6)', border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
                        <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 650 }}>
                          {category}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                          {skills.map((skill) => {
                            const icon = getTechIcon(skill);
                            const colors = getTechColor(skill);
                            return (
                              <motion.div key={skill} whileHover={{ scale: 1.05, y: -2 }}>
                                <Chip
                                  icon={icon || undefined}
                                  label={skill}
                                  sx={{
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    height: 32,
                                    backgroundColor: colors.bg,
                                    color: colors.text,
                                    cursor: 'pointer',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    transition: 'all 0.2s ease',
                                    '& .MuiChip-icon': {
                                      color: colors.icon,
                                      fontSize: '18px',
                                      marginLeft: '8px',
                                      marginRight: '4px',
                                    },
                                    '& .MuiChip-label': {
                                      paddingLeft: icon ? '0px' : '10px',
                                      paddingRight: '10px',
                                      fontSize: '0.875rem',
                                    },
                                    '&:hover': {
                                      transform: 'translateY(-2px)',
                                      boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                                    },
                                  }}
                                />
                              </motion.div>
                            );
                          })}
                        </Box>
                      </Paper>
                    </motion.div>
                  ))}
                </motion.div>
              </TabPanel>
            </AnimatePresence>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default PortfolioShowcase;
