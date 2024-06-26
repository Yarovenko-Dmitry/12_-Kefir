export const getPublishedDate = (createdDate: any) => {
    const now: Date = new Date();
    const timestamp: Date = new Date(createdDate);
    const elapsedSeconds: number = Math.floor((now.getTime() - timestamp.getTime()) / 1000);

    if (elapsedSeconds < 86400) { // less than a day
        if (elapsedSeconds < 3600) {
            return `меньше часа назад`;
        }

        const hoursElapsed = Math.floor(elapsedSeconds / 3600);

        if (hoursElapsed === 1) {
            return `1 час назад`;
        }

        return `${hoursElapsed} час${hoursElapsed < 5 ? "а" : "ов"} назад`;
    } else { // more than a day
        const dateOptions: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        };

        return timestamp.toLocaleDateString("ru-RU", dateOptions) + ", " + timestamp.toLocaleTimeString("ru-RU");
    }
};
