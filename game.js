const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#a6e4ff",
    parent: "gameContainer",
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
let unicorn;
let letters = [];
let targetWord = "EVIE";
let currentLetterIndex = 0;
let successText;
let rainbowParticles;

function preload() {
    this.load.image("background", "assets/forest-background.png");
    this.load.image("unicorn", "assets/unicorn.png");
    this.load.image("letter", "assets/letter.png");
    this.load.image("rainbow", "assets/rainbow.png"); // For rainbow particle effect
}

function create() {
    // Background
    this.add.image(400, 300, "background");

    // Unicorn
    unicorn = this.physics.add.sprite(100, 500, "unicorn").setScale(0.3);

    // Letters
    const startX = 200;
    const startY = 100;
    for (let i = 0; i < targetWord.length; i++) {
        const letter = this.physics.add.sprite(startX + i * 100, startY, "letter").setScale(0.2);
        letter.text = targetWord[i];
        this.add.text(letter.x - 10, letter.y - 10, targetWord[i], { fontSize: "32px", fill: "#000" });
        letters.push(letter);
    }

    // Success Text (hidden initially)
    successText = this.add.text(400, 300, "You Did It!", { fontSize: "48px", fill: "#ff69b4" });
    successText.setOrigin(0.5);
    successText.visible = false;

    // Rainbow particles for success
    rainbowParticles = this.add.particles('rainbow');
    rainbowParticles.createEmitter({
        speed: 100,
        scale: { start: 0.5, end: 0 },
        blendMode: 'ADD',
        lifespan: 600
    });

    // Keyboard input
    this.input.keyboard.on("keydown", handleKeyPress, this);
}

function handleKeyPress(event) {
    const letter = event.key.toUpperCase();

    // Check if the typed letter matches the next required letter
    if (letter === targetWord[currentLetterIndex]) {
        const targetLetterSprite = letters[currentLetterIndex];
        
        // Move unicorn to the target letter
        this.tweens.add({
            targets: unicorn,
            x: targetLetterSprite.x,
            y: targetLetterSprite.y,
            duration: 300,
            onComplete: () => {
                targetLetterSprite.destroy(); // "Eat" the letter
                rainbowParticles.emitParticleAt(unicorn.x, unicorn.y); // Rainbow effect
                currentLetterIndex++;

                // Check if all letters are collected
                if (currentLetterIndex === targetWord.length) {
                    showSuccess();
                }
            }
        });
    }
}

function showSuccess() {
    successText.visible = true;
    this.time.delayedCall(2000, resetGame, [], this);
}

function resetGame() {
    currentLetterIndex = 0;
    successText.visible = false;
    letters.forEach((letter) => letter.destroy());
    letters = [];

    // Reposition letters for the next round
    const startX = 200;
    const startY = 100;
    for (let i = 0; i < targetWord.length; i++) {
        const letter = this.physics.add.sprite(startX + i * 100, startY, "letter").setScale(0.2);
        letter.text = targetWord[i];
        this.add.text(letter.x - 10, letter.y - 10, targetWord[i], { fontSize: "32px", fill: "#000" });
        letters.push(letter);
    }

    // Reset unicorn position
    unicorn.setPosition(100, 500);
}
