export enum BlogType {
    blog = "blog",
    activity = "activity"
};

export enum ActivityInfoProcessType {
    start = "start",
    end = "end"
};

export enum ActivityInfoType {
    offline = "offline",
    online = "online"
};

export interface ActivityInfo{
    type: ActivityInfoType,
    place: string,
    start: Date,
    id: string,
};