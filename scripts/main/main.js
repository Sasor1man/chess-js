export function main() {
    const online = document.getElementById("online");
    const offline = document.getElementById("offline");

    offline.addEventListener('click', e => {
        window.location.hash = 'offline';
    })

    online.addEventListener('click', e => {
        window.location.hash = 'online';
    })
}
