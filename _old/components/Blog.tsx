import React, { useState } from 'react';
import { Grid, Card, CardContent, CardHeader, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Content } from './layout/StyledLayoutComponents';
import { BlogData } from './data/BlogData';

export interface Blog {
  id: number;
  date: Date;
  title: string;
  description: string;
  href: string;
  tag: Array<keyof Tag>;
}

export interface Tag {
  Code: boolean;
  Design: boolean;
}

function Blog() {
  const [posts] = useState<Array<Blog>>(
    BlogData.sort((a, b) => +b.date - +a.date)
  );
  const [expanded, setExpanded] = useState<boolean>(false);

  const numberOfItems = expanded ? 6 : 3;
  return (
    <Grid container spacing={1}>
      {posts.slice(0, numberOfItems).map((i) => (
        <Grid key={i.id} item xs={12}>
          <Card
            elevation={0}
            style={{
              background: '#f6f3f0',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            <CardHeader
              style={{ padding: '0 1em' }}
              action={
                <Button
                  href={i.href}
                  size='small'
                  style={{ marginLeft: 'auto' }}
                >
                  Read Article
                </Button>
              }
              title={i.title}
              subheader={i.date.toDateString()}
            />
            <CardContent style={{ padding: '0 1em' }}>
              <Content>{i.description}</Content>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Button
        startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        onClick={() => setExpanded(!expanded)}
        size='small'
        style={{ marginLeft: 'auto' }}
      >
        {expanded ? 'Less' : 'More'}
      </Button>
    </Grid>
  );
}

export default Blog;
