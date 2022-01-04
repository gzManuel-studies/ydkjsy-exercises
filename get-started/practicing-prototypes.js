function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}
var reel = {
    symbols: [
        "X", "Y", "Z", "W", "$", "*", "<", "@"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    }
};
var slotMachine = {
    reels: [
        Object.create(reel),
        Object.create(reel),
        Object.create(reel)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel) {
            reel.spin();
        });
    },
    display() {
        var lines = [];
        // display all 3 lines on the slot machine
        for (let linePos = -1; linePos <= 1; linePos++) {

            let line = this.reels.map(
                function getSlot(reel) {
                    // creating a prototype object to later use it and modify its position
                    var slot = Object.create(reel);

                    // getting a circular position
                    slot.position = (
                        reel.symbols.length +
                        reel.position +
                        linePos
                    ) % reel.symbols.length;

                    // console.log(slot.position);

                    return reel.display.call(slot);
                }
            );
            lines.push(line.join(" | "));
            // console.log(lines);
        }
        return lines.join("\n");
    }
};

slotMachine.spin();
console.log(slotMachine.display());
// < | @ | *
// @ | X | <
// X | Y | @
// slotMachine.spin();
// console.log(slotMachine.display());
    // Z | X | W
    // W | Y | $
    // $ | Z | *