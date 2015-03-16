ENGINE.Coin = function(args) {

  Utils.extend(this, {
    color: "#ff0" /* default color if none is provided */
  }, args);

  this.sprite = this.sprites[this.frame];
  this.width = this.sprites[this.frame][2];
  this.height = this.sprites[this.frame][3];
  this.radius = Math.min(this.width, this.height) / 2 | 0;

};

ENGINE.Coin.prototype = {

  constructor: ENGINE.Coin,

  collidable: true,

  sprites: [
  [1, 1, 8, 8],
  [11, 1, 8, 8],
  [22, 1, 6, 8],
  [33, 1, 4, 8],
  [44, 1, 2, 8],
  [53, 1, 4, 8],
  [62, 1, 6, 8]
  ],

  frame: 0,

  duration: 1,

  delta: 0,

  collision: function(object) {

    if (object instanceof ENGINE.Player) {
      app.game.players[0].score += 5;
      this.collection.remove(this);
    }

  },

  step: function(delta) {
    this.delta += delta;

    if( this.delta > 0.1 )
    {
      this.frame += 1;
      if( this.frame > 6 ) this.frame = 0;

      this.delta = 0;
    }
  },

  render: function(delta) {
    app.layer.save();
    app.layer.drawRegion(app.images.coins, this.sprites[this.frame], this.x, this.y);
    app.layer.restore();
  }

};