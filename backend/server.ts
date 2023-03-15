import cookieSession from 'cookie-session';
import express, { Request, Response } from 'express';
import path from 'path';


interface User {
    id: number;
    email: string;
    password: string;
}

const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, '../../build')));

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

// Serve the React app for any other request
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});


// Set up middleware
app.use(express.json());
app.use(
    cookieSession({
        name: 'session',
        secret: 'supersecret',
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    })
);

const getUniqueID = () => {
    const s4 = () =>
        Math.floor((1 + Math.random()) * 10000)
            .toString(16)
            .substring(1);
    return s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
};

const users: User[] = [
    {id: 1, email: 'user1@test.com', password: 'pass1'},
    {id: 2, email: 'user2@test.com', password: 'pass2'},
];


// Handle login API call
app.post('/api/login', (req: Request, res: Response) => {
    const {email, password} = req.body;
    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (user) {
        const sessionId = getUniqueID();

        res.json({success: true, session_id: sessionId});
    } else {
        res.status(401).json({success: false});
    }
});