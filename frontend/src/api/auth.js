const API_URL = `${import.meta.env.VITE_API_URL || "http://localhost:4000"}/api`;

export const signup = async (userData) => {
    try {
        const res = await fetch(`${API_URL}/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        return await res.json();
    } catch {
        throw new Error('Network error during signup');
    }
};

export const login = async (userData) => {
    try {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        return await res.json();
    } catch {
        throw new Error('Network error during login');
    }
};
