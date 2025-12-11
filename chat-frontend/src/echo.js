import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

export const echo = new Echo({
    broadcaster: "pusher",
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: window.location.hostname,
    wsPort: 8080,      // default Reverb port
    wssPort: 8080,
    forceTLS: false,
    encrypted: false,
    enabledTransports: ["ws"],
    withCredentials: true,
});
