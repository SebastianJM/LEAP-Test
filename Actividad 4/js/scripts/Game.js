Game = function(game){

}

Game.prototype = {
	create:function(){
		this.bg=this.add.sprite(0,0,"bg");
		this.group=this.add.group();
		this.group_slime=this.add.group();
        this.ready=false;
		this.btnStart=this.add.button(140,300,'start',this.startGame,this);
		
		this.btnStart.anchor.setTo(0.5,0.5);
		this.btnStart.x=this.world.centerX;
		this.btnStart.y=this.world.centerY;
		this.btnStart.bringToTop();
	
		this.elapsed=0;
		this.it=0;
		this.game_over=false;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.player=this.add.sprite(this.game.width/2,this.game.height-100,"player",3);
		this.player.animations.add('running',[0,1,2,3,2,1],15,true);
		this.player.animations.add('idle',[3],15,true);
		this.player.anchor.setTo(0.5,0.5);
		this.player.scale.setTo(1.5,1.5);
		this.game.physics.arcade.enable(this.player);
		
		this.isIdle=true;
	},
    startGame:function (start)
	{
	    
	    this.ready=true;
		start.destroy();
		
	},
	update:function()
	{

		if(this.ready && !this.game_over)
		{
			this.it+=this.time.elapsed;
			this.isIdle=true;
			if(this.player.y<=0)
			    this.victory();
			if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.player.x-3>0)
			{
				this.player.x-=3;
				this.player.play('running');
				this.isIdle=false;
			}
			if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.player.x+3<this.game.width)
			{
			    this.player.x+=3;
			    this.player.play('running');
			    this.isIdle=false;
			}
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
            {
                this.player.y-=2;
                this.player.play('running');
                this.isIdle=false;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN) && this.player.y+3<this.game.height)
            {
                this.player.y+=2;
                this.player.play('running');
                this.isIdle=false;
            }
            
			if(this.it>=1000)
			{
				this.it=0;
				var tmp=this.add.sprite(0,0,'slime');

				tmp.x=this.rnd.realInRange(0,this.game.width-tmp.width);
				tmp.y=0;
				tmp.xinicial=tmp.x;
				tmp.itx=-1;

				tmp.inputEnabled=true;
				tmp.checkWorldBounds = true;
				tmp.outOfBoundsKill = true;
				
                this.game.physics.arcade.enable(tmp);
				this.group_slime.add(tmp);
			}
			
			
			this.game.physics.arcade.overlap(this.player,this.group_slime,this.reduceLife,null,this);

			this.group_slime.forEach(function(sprite)
			{
				if(sprite.x<sprite.xinicial-40||sprite.x>sprite.xinicial+40)
					sprite.itx*=-1;
				sprite.x+=sprite.itx*3;
				sprite.y+=2;
			},this);
			if(this.isIdle)
			    this.player.play('idle');
		}
	},
	destroy:function(sprite)
	{
		sprite.destroy();
	},
	reduceLife:function(sprite)
	{
		this.gameOver=this.game.add.sprite(this.game.width/2,this.game.height/2,"game_over");
		this.gameOver.x-=this.gameOver.width/2;
		this.gameOver.y-=this.gameOver.height/2;
		this.game_over=true;
	},
	victory:function()
	{
	    this.win=this.game.add.sprite(this.game.width/2,this.game.height/2,"victory");
	    this.win.x-=this.win.width/2;
		this.win.y-=this.win.height/2;
		this.game_over=true;
	}
    
}