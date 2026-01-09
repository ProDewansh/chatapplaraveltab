// import Echo from "laravel-echo";

// window.Echo = new Echo({
//     broadcaster: "reverb",
//     key: "local",
//     wsHost: window.location.hostname,
//     wsPort: 8080,
//     wssPort: 8080,
//     forceTLS: false,
//     encrypted: false,
//     enabledTransports: ["ws"],
// });

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// Make Pusher available globally
window.Pusher = Pusher;

// Create and export Echo instance
const echo = new Echo({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 8080,
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 8080,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
    authEndpoint: 'http://localhost:8000/broadcasting/auth',
    auth: {
        headers: {
            'Accept': 'application/json',
        },
    },
    // Add credentials for authentication
    withCredentials: true,
});

export default echo;