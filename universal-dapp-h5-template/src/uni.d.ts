interface Uni {
    postMessage?: any;
}

declare var uni: Uni & typeof globalThis;