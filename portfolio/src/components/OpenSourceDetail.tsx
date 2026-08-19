import { Box, Container, Typography, Paper, Chip, Button, Divider, Grid, Link as MuiLink } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { openSourceContributions } from '../data/openSource';
import { getTechIcon } from './TechStackIcons';
import { getTechColor } from '../utils/techColors';
import { useEffect, useState } from 'react';

type LivePullRequest = {
  number: number;
  title: string;
  url: string;
  status: 'merged' | 'closed' | 'open';
  date?: string;
};

type GitHubSearchItem = {
  number: number;
  title: string;
  state: 'open' | 'closed';
  html_url: string;
  closed_at: string | null;
  created_at: string;
  pull_request?: { merged_at?: string | null };
};

const OpenSourceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const contribution = openSourceContributions.find((c) => c.id === id);
  const [livePullRequests, setLivePullRequests] = useState<LivePullRequest[] | null>(null);
  const [isLoadingPullRequests, setIsLoadingPullRequests] = useState(true);

  useEffect(() => {
    if (!contribution) return;

    const controller = new AbortController();
    const repositoryPath = contribution.repository.replace('https://github.com/', '').replace(/\/$/, '');
    const query = encodeURIComponent(`author:lakshay88 is:pr repo:${repositoryPath}`);

    fetch(`https://api.github.com/search/issues?q=${query}&sort=created&order=desc&per_page=100`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('GitHub API request failed');
        return response.json() as Promise<{ items: GitHubSearchItem[] }>;
      })
      .then(({ items }) => {
        setLivePullRequests(items.map((item) => {
          const mergedAt = item.pull_request?.merged_at;
          const dateValue = mergedAt || item.closed_at || item.created_at;
          return {
            number: item.number,
            title: item.title,
            url: item.html_url,
            status: mergedAt ? 'merged' : item.state,
            date: new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(dateValue)),
          };
        }));
      })
      .catch((error) => {
        if ((error as Error).name !== 'AbortError') setLivePullRequests(null);
      })
      .finally(() => setIsLoadingPullRequests(false));

    return () => controller.abort();
  }, [contribution]);

  const pullRequests: LivePullRequest[] = livePullRequests || contribution?.pullRequests || [];

  if (!contribution) {
    return (
      <Box sx={{ py: 10, textAlign: 'center', minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Typography variant="h4">Contribution not found</Typography>
        <Button onClick={() => navigate('/lakshay88#portfolio', { state: { scrollTo: 'portfolio' } })} sx={{ mt: 2 }}>
          Back to Open Source
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
          Back to Open Source
        </Button>

        <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, mb: 4, borderRadius: 3, backgroundColor: 'rgba(13,27,45,0.8)', border: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <GitHubIcon sx={{ mr: 2, color: 'secondary.main', fontSize: 40 }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 750, mb: 1 }}>
                {contribution.title}
              </Typography>
              {contribution.organization && (
                <Typography variant="h5" color="secondary.main" gutterBottom sx={{ fontWeight: 600 }}>
                  {contribution.organization}
                </Typography>
              )}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              href={contribution.repository}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<LaunchIcon />}
              sx={{
                borderColor: 'rgba(94,234,212,0.5)',
                color: 'secondary.light',
                borderWidth: 1.5,
                backgroundColor: 'rgba(94,234,212,0.06)',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'secondary.main',
                  backgroundColor: 'secondary.main',
                  color: '#07111f',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Repository
            </Button>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, color: 'secondary.light' }}>
            Overview
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4, color: 'text.primary' }}>
            {contribution.description}
          </Typography>

          {contribution.contributions && contribution.contributions.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, color: 'secondary.light' }}>
                Contributions Summary
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                {contribution.contributions.map((contrib, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" sx={{ mb: 1.25, lineHeight: 1.7, color: 'text.secondary' }}>
                      {contrib}
                    </Typography>
                  </li>
                ))}
              </Box>
            </>
          )}

          {pullRequests.length > 0 && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, color: 'secondary.light' }}>
                Pull Requests ({pullRequests.length}) {isLoadingPullRequests && '· Syncing with GitHub…'}
              </Typography>
              <Grid container spacing={3}>
                {pullRequests.map((pr) => (
                  <Grid item xs={12} key={pr.number}>
                    <Paper
                      elevation={1}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        backgroundColor: 'rgba(7,17,31,0.6)',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          borderColor: 'secondary.main',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                        <Box sx={{ flex: 1 }}>
                          <MuiLink
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: 'text.primary',
                              textDecoration: 'none',
                              fontWeight: 600,
                              fontSize: '1.05rem',
                              '&:hover': {
                                color: 'secondary.light',
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            #{pr.number}: {pr.title}
                          </MuiLink>
                        </Box>
                        <Chip
                          label={pr.status}
                          size="small"
                          sx={{
                            backgroundColor: pr.status === 'merged' ? 'rgba(94,234,212,0.2)' : 'rgba(56,189,248,0.2)',
                            color: pr.status === 'merged' ? 'secondary.light' : 'primary.light',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            fontSize: '0.7rem',
                          }}
                        />
                      </Box>
                      {pr.date && (
                        <Typography variant="caption" color="text.secondary">
                          {pr.date}
                        </Typography>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, color: 'secondary.light' }}>
            Technologies Used
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {contribution.technologies.map((tech) => {
              const icon = getTechIcon(tech);
              const colors = getTechColor(tech);
              return (
                <Chip
                  key={tech}
                  icon={icon || undefined}
                  label={tech}
                  sx={{
                    fontSize: '0.875rem',
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
        </Paper>
      </Container>
    </Box>
  );
};

export default OpenSourceDetail;
