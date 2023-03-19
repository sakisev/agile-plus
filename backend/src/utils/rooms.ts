import { User } from './users';

export interface Room {
    room_uuid: string;
    display_name: string;
    users: User[];
    host_uuid: User['id'];
}

export const rooms: Room[] = [];