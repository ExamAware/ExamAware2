export interface TweenSettings {
    from: Record<string, number>;
    to: Record<string, number>;
    duration?: number;
    delay?: number;
    onStart?: (keys: Record<string, number>) => void;
    onUpdate?: (keys: Record<string, number>) => void;
    onFinish?: (keys: Record<string, number>) => void;
}
export default class Tween {
    private from;
    private to;
    private duration;
    private onStart?;
    private onUpdate;
    private onFinish?;
    private startTime;
    private started;
    private finished;
    private timer;
    private keys;
    constructor({ from, to, duration, onStart, onUpdate, onFinish }: TweenSettings);
    private time;
    private elapsed;
    private update;
    private polyfillStart;
    private normalStart;
    start(): void;
    stop(): void;
}
