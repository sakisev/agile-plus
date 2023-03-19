import { Request, Response } from 'express';
import { getUniqueID } from '../utils/helpers';
import { Room, rooms } from '../utils/rooms';
import { users } from '../utils/users';

export const roomCreate = (req: Request, res: Response) => {
    const {session_id, display_name} = req.body;
    const user = users.find(
        (u) => u.session_id === session_id
    );

    if (user) {
        const isHost = rooms.find(room => room.host_uuid === user.id);

        if (isHost) {
            res.status(401).json({success: false});
            return;
        }
        // const room_uuid = ;
        const room: Room = {
            room_uuid: getUniqueID(),
            users: [user],
            display_name,
            host_uuid: user.id
        };
        rooms.push(room)

        res.json({success: true, room});


    } else {
        res.status(401).json({success: false});
    }
}

export const roomJoin = (req: Request, res: Response) => {
    const {session_id, room_uuid} = req.body;
    const user = users.find(
        (u) => u.session_id === session_id
    );
    if (user) {
        const room = rooms.find(room => room.room_uuid === room_uuid);

        if (!room) {
            res.status(401).json({success: false});
            return;
        }

        if (!room.users.find(u => u.id === user.id)) {
            room.users.push(user)
        }

        res.json({success: true, room});


    } else {
        res.status(401).json({success: false});
    }
}