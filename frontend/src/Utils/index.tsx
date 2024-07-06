export const calculateTimeUntilExpiration = (expirationTimeInSeconds: number) => {
    if (!Number.isFinite(expirationTimeInSeconds)) {
        return 0;
    }
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const timeDifference = expirationTimeInSeconds - nowInSeconds;
    return Number(timeDifference)
};

export const scheduleTokenRefresh = async (timeUntilExpiration: number, refreshToken: string, attempt: number) => {
    if (timeUntilExpiration < 3 || Number.isNaN(timeUntilExpiration) || attempt >= 3 || localStorage.getItem("refreshToken") == undefined) {
        console.error('Máximo de tentativas de renovação alcançado.');
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessTokenExp");
        return;
    }
    setTimeout(async () => {
        const refresh = refreshToken;
        if (refresh !== undefined) {
            try {
                const response = await fetch('http://localhost:8000/api/token/refresh/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ refresh: refresh }),
                });
                if (response.ok) {
                    const data = await response.json();
                    const newAccessToken = data.access;
                    const newTokenExp = data.exp;
                    const updatedRefreshToken = refresh;
                    localStorage.setItem('accessToken', newAccessToken);
                    localStorage.setItem('accessTokenExp', String(newTokenExp));
                    const updatedTimeUntilExpiration = calculateTimeUntilExpiration(Number(newTokenExp));
                    scheduleTokenRefresh(updatedTimeUntilExpiration, updatedRefreshToken, 0);
                } else {
                    if (refreshToken) {
                        scheduleTokenRefresh(timeUntilExpiration, refreshToken, attempt + 1);
                    }
                    return
                }
            } catch (error: any) {
                if (refreshToken) {
                    scheduleTokenRefresh(timeUntilExpiration, refreshToken, attempt + 1);
                }
                return
            }
        }
    }, timeUntilExpiration * 900);
};

const isTokenExpired = (exp: number) => {
    const tokenExp = exp;
    const nowInSeconds = Math.floor(Date.now() / 1000);
    return !tokenExp || nowInSeconds >= tokenExp;
};

const validateToken = async (accessToken: any) => {
    if (!accessToken) {
        return false;
    }
    try {
        const response = await fetch('http://localhost:8000/api/token/validate/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });
        if (response.status == 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

export const verifyAuthenticated = async (accessToken: any, accessTokenExp: any) => {
    if (accessTokenExp) {
        if (isTokenExpired(Number(accessTokenExp))) {
            return false;
        }
        return await validateToken(accessToken);
    }
    return false;
};

export function parseValue(value: string): string {
    return value.replace(/\D/g, '')
}