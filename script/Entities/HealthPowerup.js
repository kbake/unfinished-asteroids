ENGINE.HealthPowerup = function(args) {

  Utils.extend(this, {
    color: "#ff0" /* default color if none is provided */
  }, args);

  this.sprite = [106, 69, 9, 10];

};

ENGINE.HealthPowerup.prototype = {

  constructor: ENGINE.HealthPowerup,

  collidable: true,

  radius: 3,

  collision: function(object) {

    if (object instanceof ENGINE.Player) {
      app.game.players[0].hp += (app.game.players[0].maxHp / 2 | 0);
      if( app.game.players[0].hp > app.game.players[0].maxHp ) {
        app.game.players[0].hp = app.game.players[0].maxHp;
      }
      this.collection.remove(this);
    }

  },

  step: function(delta) {

  },

  render: function(delta) {
    app.layer.save();

    app.layer.drawRegion(app.images.spritesheet, this.sprite, this.x, this.y);

    app.layer.restore();

  }

};