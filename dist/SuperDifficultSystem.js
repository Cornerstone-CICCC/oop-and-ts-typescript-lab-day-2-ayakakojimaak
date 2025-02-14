//
// 🤖 Build a Super Difficult System
//
//
//
//
//
//
//
//
//
//
// Just kidding.
//
//
// Happy Valentines Day to you! 💖
// Thank you for being my student! 😜
// Good luck with the rest of the lab,
// ...and I hope you enjoy your day!
//
//
//
//
class SuperDifficultSystem {
    currentMessage;
    contents = [];
    addMessageDetails({ to, from, title }) {
        this.currentMessage = { to, from, title, content: [] };
        return this;
    }
    addContent(reversedContent) {
        this.currentMessage.content.push(reversedContent);
    }
    addContentToMessage() {
        this.currentMessage.content = this.currentMessage.content.map((c) => c.split("").reverse().join(""));
        this.contents.push(this.currentMessage);
    }
    getAllMessage() {
        this.addContentToMessage();
        return this.contents;
    }
}
const messageManager = new SuperDifficultSystem();
messageManager.addMessageDetails({ to: "Elmer", from: "Jane", title: "Happy Valentines Day" });
messageManager.addContent("3< yaD s'enitnelaV yppaH");
messageManager.addContent("): noissap htiw su gnihcaet syawla rof uoy knahT");
messageManager.addContent("!tol a nrael dna loohcs ot dnetta ot tseb ym od ll'I");
console.log(messageManager.getAllMessage());
