import { Dialog, DialogTitle } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import API from '../../apis/api';
import Authentication from '../../apis/Authentication';

function DashboardContent() {
    const [openCreateRoomModal, setOpenCreateRoomModal] = useState(false);

    const joinRoom = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            roomId: data.get('room-id')
        });

        const room = await API.room.join(Authentication.getSessionId() ?? '', data.get('room-id') as string)
        console.log(room)
    }
    const createRoom = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            roomId: data.get('display-name')
        });
        const room = await API.room.create(Authentication.getSessionId() ?? '', data.get('display-name') as string)
        console.log(room)
        setOpenCreateRoomModal(false);
    }

    return (
        <Box sx={{display: 'flex'}}>
            <Box
                component="main"
                display={'flex'}
                overflow={'auto'}
                justifyContent={'center'}
                alignItems={'center'}
                flexGrow={1}
                height={'100vh'}
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],

                }}
            >
                <Box maxWidth="lg" sx={{mt: 4}} display={'flex'} flexDirection={'column'} justifyContent={'center'}
                     alignItems={'center'}>
                    <Typography variant={'h4'} textAlign={'center'}>Create a room or Join and existing one</Typography>
                    <Box component={'form'} noValidate onSubmit={joinRoom} display={'flex'} flexDirection={'column'}
                         width={'60%'} justifyContent={'center'} alignItems={'center'}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="room-id"
                            label="Room ID"
                            name="room-id"
                        />
                        <Button fullWidth variant={'contained'} type={'submit'}>Enter room</Button>
                        <Typography variant={'body1'} color={'text.secondary'}>or</Typography>
                        <Button fullWidth variant={'contained'} onClick={() => setOpenCreateRoomModal(true)}>Create
                            room</Button>
                    </Box>
                </Box>
            </Box>

            <Dialog open={openCreateRoomModal} onClose={() => setOpenCreateRoomModal(false)}>
                <DialogTitle variant={'h6'}>Create your room</DialogTitle>
                <Box display={'flex'} flexDirection={'column'} flex={1} overflow={'auto'}
                     p={'0 24px 20px 24px'} component={'form'}
                     onSubmit={createRoom}>
                    <TextField required placeholder={'Display name'} variant={'outlined'} name={'display-name'}
                               id={'display-name'}/>
                    <Box display={'flex'} alignSelf={'flex-end'} mt={2} gap={1}>
                        <Button variant={'contained'} color={'secondary'}
                                onClick={() => setOpenCreateRoomModal(false)}>Cancel</Button>
                        <Button variant={'contained'} color={'primary'} type={'submit'}>Create</Button>
                    </Box>
                </Box>
            </Dialog>
        </Box>
    );
}

export default function Dashboard() {
    return <DashboardContent/>;
}