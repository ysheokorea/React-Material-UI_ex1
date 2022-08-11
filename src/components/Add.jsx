import { Avatar, Box, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Stack } from '@mui/system';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})


export default function Add() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip
                onClick={() => setOpen(true)}
                title="Delete"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(44%)", md: 30 }
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => setOpen(true)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={300} height={400} p={5}  bgcolor={"background.default"} color={"text.primary"} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign={"center"}>Create Post</Typography>
                    <UserBox>
                        <Avatar src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
                            sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant="span" >About Tech</Typography>
                    </UserBox>
                    <TextField
                        id="standard-helperText"
                        sx={{ width: "100%" }}
                        multiline
                        rows={2}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction={"row"} gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button>One</Button>
                        <Button sx={{width:"100px"}}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}