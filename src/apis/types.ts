import { User } from '../utils/types';

export interface SignInRequest {
    email: string;
    password: string;
}

export interface SignInResponse {
    success: boolean;
    session_id: string;
}

export interface SignOutRequest {
    session_id: string;
}

export interface RoomCreateRequest {
    session_id: string;
    display_name: string;
}

export interface RoomCreateResponse {
    room_uuid: string;
    display_name: string;
    users: User[];
    host_uuid: User['id'];
}

export interface RoomJoinRequest {
    session_id: string;
    room_uuid: string;
}

export interface RoomJoinResponse extends RoomCreateResponse {
}