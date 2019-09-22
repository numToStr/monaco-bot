export class ChatBot {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    reply(message) {
        setTimeout(() => {
            this.dispatch({
                message,
                createdAt: new Date(),
                createdBy: "bot"
            });
        }, 500);
    }

    sleep(time) {
        return new Promise(resolve => setTimeout(resolve, Number(time)));
    }

    getNouns() {
        setTimeout(() => {
            this.dispatch({
                message: "Nouns: a, e, i, o, u",
                createdAt: new Date(),
                createdBy: "bot"
            });
        }, 500);
    }
}
