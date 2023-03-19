import ApiWrapper from './ApiWrapper';
import {
    RoomCreateRequest,
    RoomCreateResponse,
    RoomJoinRequest, RoomJoinResponse,
    SignInRequest,
    SignInResponse,
    SignOutRequest
} from './types';

export default class API {
    public static user = {
        signIn: async (email: string, password: string): Promise<SignInResponse> => {
            const response = await ApiWrapper.post<SignInRequest, SignInResponse>('user/sign-in', {
                email,
                password
            });

            return response.data;
        },
        signOut: async (session_id: string): Promise<void> => {
            await ApiWrapper.post<SignOutRequest, void>('user/sign-out', {
                session_id
            })
        }
    }

    public static room = {
        create: async (session_id: string, display_name: string) => {
            const response = await ApiWrapper.post<RoomCreateRequest, RoomCreateResponse>('room/create', {
                session_id, display_name
            });

            return response.data;
        },
        join: async (session_id: string, room_uuid: string) => {
            const response = await ApiWrapper.post<RoomJoinRequest, RoomJoinResponse>('room/join', {
                session_id,
                room_uuid
            });

            return response.data;
        }
    }
}