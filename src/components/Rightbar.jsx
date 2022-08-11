import { 
    Avatar, 
    AvatarGroup, 
    Box, 
    Divider, 
    ImageList, 
    ImageListItem, 
    List, 
    ListItem, 
    ListItemText, 
    Typography,
    ListItemAvatar,
    } from '@mui/material';
import React from 'react';

export default function Rightbar() {
    const itemData = [
        {
            title: 'image1',
            image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'
        },
        {
            title: 'image2',
            image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format'
        },
        {
            title: 'image3',
            image: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format',
        },
        {
            title: 'image4',
            image: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format',
        },
        {
            title: 'image5',
            image: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format',
        },
        {
            title: 'image6',
            image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format',
        }
    ]

    return (
        <Box
            flex={2.5}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}

        >
            <Box position="fixed" width={300}>
                <Typography variant='h6' fontWeight={100} mb={2}>Online Friends</Typography>
                <AvatarGroup total={100} max={6}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100} mt={5} mb={2}>Latest Photos</Typography>
                <ImageList cols={2} rowHeight={100} gap={5}>
                    {itemData.map((item, idx) => (
                        <ImageListItem key={idx}>
                            <img src={item.image} alt={item.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography
                    variant='h6' fontWeight={100} mt={5} mb={2}>
                    Latest Conversations
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}