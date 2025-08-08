import axios from '@/lib/axios';

export const loginUser = async (userName: string, password: string) => {
  try {
    const response = await axios.post('/api/token/', {
      userName,
      password,
    });

    const { access, refresh } = response.data;

    // Store tokens securely (localStorage for simplicity)
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);

    return { success: true };
  } catch (error: unknown) {
    console.error('Login failed:', error);
    return { success: false, message: (error as Error).message || 'Login failed' };
  }
};
