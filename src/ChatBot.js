export class ChatBot {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    reply(message) {
        setTimeout(() => {
            this.dispatch({
                type: "create",
                payload: {
                    text: message,
                    createdAt: new Date(),
                    createdBy: "bot"
                }
            });
        }, 1000);
    }

    sleep(time) {
        return new Promise(resolve => setTimeout(resolve, Number(time)));
    }

    getNouns() {
        setTimeout(() => {
            this.dispatch({
                type: "create",
                payload: {
                    text: "Nouns: a, e, i, o, u",
                    createdAt: new Date(),
                    createdBy: "bot"
                }
            });
        }, 1000);
    }
}
