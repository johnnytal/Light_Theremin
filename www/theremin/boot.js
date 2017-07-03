document.addEventListener("deviceready", start, false);
//window.onload = start;

function start(){
    WIDTH = 850; 
    HEIGHT = 1100;

    game = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, '');

    game.state.add("Boot", boot);
    game.state.add("Preloader", preloader);
    game.state.add("Game", gameMain);
    game.state.add("Info", info);
    
    game.state.start("Boot");  
};

var boot = function(game){};

boot.prototype = {
    preload: function(){},
    
    create: function(){  
        game.stage.backgroundColor = '#000';  
        font = 'Rationale';
        
        if (!this.game.device.desktop){
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.scale.maxWidth = window.innerWidth * window.devicePixelRatio;
            this.scale.maxHeight = window.innerHeight * window.devicePixelRatio;
            
            this.scale.forceOrientation(true, false );
        } 

        game.state.start('Preloader');
    }
};


