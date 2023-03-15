import axios from './axiosInstance';

export class API {
    public static async signIn(email: string, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            axios.post<{ success: boolean, session_id: string }>('/api/login', {
                email,
                password
            }).then((response) => {
                    if (response.data.success && response.data.session_id) {
                        localStorage.setItem('session_id', response.data.session_id);
                        resolve(true);
                    }
                }
            ).catch(() => reject(false));


        })
    }
}