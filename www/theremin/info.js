var info = function(game){};

info.prototype = {
    preload: function(){},
    
    create: function(){  
        info_text = game.add.text(35, 75, "1. Locate the light sensor on your device\n\n" +
        "2. Highly lit environment is best for the light theremin,\nas it allows the most sensitivity.\n" +
        "In a dim environment try calibrating the light to a higher frequency.\n\n" +
        "3. Consider working with a flashlight or a lamp;\ndirecting it closer and further from the light sensor.\n" +
        "Working with lamp dimmer is highly recommended.\n\n" +
        "4. My favorite settings:\nSin / Saw wave, Pentatonic / Hijaz scale, 25% / 75% reverb.\n\n" +
        "5. Be considerate of dogs in a highly lit environment.\n\n" +
        "Created by Johnny Tal, iLyich Games - johnnytal9@gmail.com", {
            font: '28px ' + font, fill: 'white', align: 'left', stroke:'#ffffff', strokeThickness: 0
        });
        
        return_btn = game.add.sprite(600, 860, 'return');
        return_btn.scale.set(0.6, 0.6);
        return_btn.inputEnabled = true;
        return_btn.events.onInputDown.add(function(){
            game.state.start("Game");  
        }, this);
        
     /*   support_btn = game.add.sprite(134, 910, 'support');
        support_btn.scale.set(0.47, 0.46);
        support_btn.inputEnabled = true;
        support_btn.events.onInputDown.add(function(){
            if(AdMob) AdMob.showInterstitial();
        }, this);
       
        Label_support= game.add.text(20, 785, 'This indie project will always remain free.\nYou can support it by showing and clicking an ad,\nor by rating and reviewing it in the play store.\nThank you. enjoy!', {
            font: '18px ' + font, fill: 'white', fontWeight: 'normal', align: 'center'
        });
        Label_support.alpha = 0.8;
        
        Label_support2= game.add.text(158, 917, 'Show ad', {
            font: '17px ' + font, fill: 'yellow', fontWeight: 'normal', align: 'center'
        });
        Label_support2.alpha = 0.8;*/
    }
};


