import API from './api';

export default class Authentication {
    public static setAuthentication(sessionId: string) {
        localStorage.setItem('session_id', sessionId);
    }

    public static removeSessionToken() {
        localStorage.removeItem('session_id');
    }

    public static getSessionId(): string | null {
        return localStorage.getItem('session_id');
    }

    public static isAuthenticated(): boolean {
        return Authentication.getSessionId() !== null;
    }

    public static async signIn(email: string, password: string) {
        try {
            const response = await API.user.signIn(email, password);

            if (response.success) {
                Authentication.setAuthentication(response.session_id);
                return;
            } else {
                console.error('Probably incorrect credentials?')
            }
        } catch (e) {
            throw new Error('User could not be authenticated');
        }
    }

    public static async signOut() {
        if (!Authentication.isAuthenticated()) {
            Authentication.removeSessionToken();
        }
        try {
            const sessionId = Authentication.getSessionId();
            if (!sessionId) {
                return;
            }
            await API.user.signOut(sessionId)
            Authentication.removeSessionToken();
        } catch (e) {
            throw e;
        }
    }

}