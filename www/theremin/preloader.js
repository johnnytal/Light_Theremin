var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        progressTxt = this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px', fill: 'white', fontWeight: 'normal', align: 'center'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
  
        loadingTxt = this.add.text(this.game.world.centerX - 37,  this.game.world.centerY - 150, "Loading...", {
            font: '18px', fill: 'lightgrey', fontWeight: 'normal', align: 'center'
        });
        
        game.load.image('bg', 'theremin/images/newBg.jpg');
        game.load.image('next', 'theremin/images/next.png');
        game.load.image('prev', 'theremin/images/prev.png');
        game.load.image('plus', 'theremin/images/plus.png');
        game.load.image('minus', 'theremin/images/minus.png');
        game.load.image('info', 'theremin/images/info.png');
        game.load.image('support', 'theremin/images/support.png');
        game.load.image('return', 'theremin/images/return.png');
        game.load.image('calibrate', 'theremin/images/calibrate.png');
        game.load.image('reset', 'theremin/images/reset.png');
        
        game.load.spritesheet('mute_btn', 'theremin/images/mute_btn.png', 503/2, 252);

    },
    
    create: function(){
        game.state.start("Game");  
    }, 
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};