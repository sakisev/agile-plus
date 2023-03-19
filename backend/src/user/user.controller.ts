import { Request, Response } from 'express';
import { getUniqueID } from '../utils/helpers';
import { users } from '../utils/users';

export const signIn = (req: Request, res: Response) => {
    const {email, password} = req.body;
    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (user) {
        if (!user.session_id) {
            const session_id = getUniqueID();
            user.session_id = session_id;

            res.json({success: true, session_id});
        }


    } else {
        res.status(401).json({success: false});
    }
}
export const signOut = (req: Request, res: Response) => {
    const {session_id} = req.body;
    const user = users.find(
        (u) => u.session_id === session_id
    );

    if (user) {
        if (user.session_id) {
            user.session_id = undefined;

            res.json({success: true});
        }
    } else {
        res.status(401).json({success: false});
    }
}