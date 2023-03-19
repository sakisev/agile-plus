export interface User {
    id: number;
    email: string;
    password: string;
    session_id?: string;
}


export const users: User[] = [
    {id: 1, email: 'user1@test.com', password: 'pass1'},
    {id: 2, email: 'user2@test.com', password: 'pass2'},
];