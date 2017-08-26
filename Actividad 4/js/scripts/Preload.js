Preload = function(game){
}

Preload.prototype = {
	preload:function(){
	    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.load.image("bg",'assets/scene1.png');
		this.load.image('monster','assets/walk0001.png');
		this.load.image('slime','assets/slime_normal.png');

		this.load.image('start','assets/bnt_play.png');
		this.load.image('game_over','assets/game_over.png');
		this.load.image('victory','assets/victory.png');
        this.load.spritesheet('player',
				'assets/player_spritesheet.png',28,30, 5 , 1, 1);
	},
	create:function(){
		this.state.start('Game');
	}
}