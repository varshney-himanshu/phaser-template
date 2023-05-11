const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: { default: "arcade" },
  scene: {
    preload,
    create,
    update,
  },
};

let bird = null;

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "assets/bird.png");
}

function create() {
  this.add.image(0, 0, "sky").setOrigin(0);
  bird = this.physics.add
    .sprite(config.width / 10, config.height / 2, "bird")
    .setOrigin(0);
  bird.x = bird.x - bird.width / 2;
  bird.y = bird.y - bird.height / 2;
  bird.body.velocity.x = 200;
  bird.body.velocity.y = 30;

  // bird.body.gravity.y = 10;
}

function update(time, delta) {
  if (bird.x > config.width) {
    bird.x = 0;
  }

  if (bird.y > config.height) {
    bird.y = 0;
  }

  bird.body.velocity.x += (50 * delta) / 1000;
  bird.body.velocity.y += (10 * delta) / 1000;
}

new Phaser.Game(config);
