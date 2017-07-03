var gameMain = function(game){   
    var osc, rev, luminosity, frequency, frequency_check;
    var note, last_frequency, factor, form, scale, reverb, sensitivity;
    var btns = [];

    sensitivities = [100, 70, 40, 15, 1];
    reverbs = [0.1, 0.3, 0.5, 0.7, 0.9];
    labelsAmount = ['0%', '25%', '50%', '75%', '100%'];
    waves = ['sin', 'saw', 'tri', 'square'];
    scales = ['None', 'Chromatic', 'Major', 'Minor', 'Blues', 'Pentatonic', 'Hijaz'];
    
    notes = [ 
        'c0','c#0','d0','d#0','e0','f0','f#0','g0','g#0','a0','a#0','b0', 'c1','c#1','d1','d#1','e1','f1','f#1','g1','g#1','a1','a#1','b1',
        'c2','c#2','d2','d#2','e2','f2','f#2','g2','g#2','a2','a#2','b2', 'c3','c#3','d3','d#3','e3','f3','f#3','g3','g#3','a3','a#3','b3',
        'c4','c#4','d4','d#4','e4','f4','f#4','g4','g#4','a4','a#4','b4', 'c5','c#5','d5','d#5','e5','f5','f#5','g5','g#5','a5','a#5','b5',
        'c6','c#6','d6','d#6','e6','f6','f#6','g6','g#6','a6','a#6','b6', 'c7','c#7','d7','d#7','e7','f7','f#7','g7','g#7','a7','a#7','b7',
        'c8','c#8','d8','d#8','e8','f8','f#8','g8','g#8','a8','a#8','b8', 'c9','c#9','d9','d#9','e9','f9','f#9','g9','g#9','a9','a#9','b9',
        'c10','c#10','d10','d#10','e10','f10','f#10','g10','g#10','a10','a#10','b10'
    ];
    
    notes_blues = [
        'c0','d#0','f0','f#0','g0','a#0', 'c1','d#1','f1','f#1','g1','a#1', 'c2','d#2','f2','f#2','g2','a#2', 'c3','d#3','f3','f#3','g3','a#3',
        'c4','d#4','f4','f#4','g4','a#4', 'c5','d#5','f5','f#5','g5','a#5', 'c6','d#6','f6','f#6','g6','a#6', 'c7','d#7','f7','f#7','g7','a#7',
        'c8','d#8','f8','f#8','g8','a#8', 'c9','d#9','f9','f#9','g9','a#9', 'c10','d#10','f10','f#10','g10','a#10'
    ];
    
    notes_major = [
        'c0','d0','e0','f0','g0','a0','b0', 'c1','d1','e1','f1','g1','a1','b1', 'c2','d2','e2','f2','g2','a2','b2', 'c3','d3','e3','f3','g3','a3','b3',
        'c4','d4','e4','f4','g4','a4','b4', 'c5','d5','e5','f5','g5','a5','b5', 'c6','d6','e6','f6','g6','a6','b6', 'c7','d7','e7','f7','g7','a7','b7',
        'c8','d8','e8','f8','g8','a8','b8', 'c9','d9','e9','f9','g9','a9','b9', 'c10','d10','e10','f10','g10','a10','b10'
    ];
    
    notes_minor = [
        'c0','d0','d#0','f0','g0','g#0','a#0', 'c1','d1','d#1','f1','g1','g#1','a#1', 'c2','d2','d#2','f2','g2','g#2','a#2', 'c3','d3','d#3','f3','g3','g#3','a#3',
        'c4','d4','d#4','f4','g4','g#4','a#4', 'c5','d5','d#5','f5','g5','g#5','a#5', 'c6','d6','d#6','f6','g6','g#6','a#6', 'c7','d7','d#7','f7','g7','g#7','a#7',
        'c8','d8','d#8','f8','g8','g#8','a#8', 'c9','d9','d#9','f9','g9','g#9','a#9', 'c10','d10','d#10','f10','g10','g#10','a#10'   
    ];
    
    notes_penta = [
        'c#0','d#0','f#0','g#0','a#0', 'c#1','d#1','f#1','g#1','a#1', 'c#2','d#2','f#2','g#2','a#2', 'c#3','d#3','f#3','g#3','a#3', 'c#4','d#4','f#4','g#4','a#4', 'c#5','d#5','f#5','g#5','a#5',
        'c#6','d#6','f#6','g#6','a#6', 'c#7','d#7','f#7','g#7','a#7', 'c#8','d#8','f#8','g#8','a#8', 'c#9','d#9','f#9','g#9','a#9', 'c#10','d#10','f#10','g#10','a#10'
    ];
    
    notes_hijaz = [
        'c0','c#0','e0','f0','g0','g#0','b0','c1','c#1','e1','f1','g1','g#1','b1', 'c2','c#2','e2','f2','g2','g#2','b2','c3','c#3','e3','f3','g3','g#3','b3',
        'c4','c#4','e4','f4','g4','g#4','b4','c5','c#5','e5','f5','g5','g#5','b5', 'c6','c#6','e6','f6','g6','g#6','b6','c7','c#7','e7','f7','g7','g#7','b7',
        'c8','c#8','e8','f8','g8','g#8','b8','c9','c#9','e9','f9','g9','g#9','b9', 'c10','c#10','e10','f10','g10','g#10'
    ];
};

gameMain.prototype = {
    create: function(){  
        note = 53; 
        last_frequency = 0;
        factor = 3;

        form = 0;
        scale = 0;
        reverb = 3;
        sensitivity = 4;

        bg = game.add.image(0, 0, 'bg');
        bg.alpha = 0.4;
        
        buttons_labels();

        osc = T("cosc", {wave:waves[form], beats:5, mul:0.40});
        rev = T("reverb", {room:0.8, damp:0.4, mix:reverbs[reverb]}, osc).play();

        try{
            window.plugins.insomnia.keepAwake();
        } catch(e){}
        
        setTimeout(function(){
            try{
                StatusBar.hide;
            } catch(e){}    
        }, 1000);

        initAd();
        getReading();
    }
};

function getReading(){
    window.plugin.lightsensor.watchReadings(function success(reading){
        luminosity = parseInt(reading.intensity);

        frequency_check = luminosity * factor;
        frequency_text = "";
        
        if (Math.abs(frequency_check - last_frequency) > sensitivities[sensitivity]){
            if (scale != 0){
                if (frequency_check < last_frequency){ // semitone down
                    note--; 
                }
                else if (frequency_check > last_frequency){ // semitone up
                    note++;
                }

                if (scale == 2){
                    frequency = teoria.note(notes_major[note]).fq();
                    frequency_text = notes_major[note];
                } 
                else if (scale == 4){
                    frequency = teoria.note(notes_blues[note]).fq();
                    frequency_text = notes_blues[note];
                } 
                else if (scale == 3){
                    frequency = teoria.note(notes_minor[note]).fq();
                    frequency_text = notes_minor[note];
                } 
                else if (scale == 5){
                    frequency = teoria.note(notes_penta[note]).fq();
                    frequency_text = notes_penta[note];
                } 
                else if (scale == 6){
                    frequency = teoria.note(notes_hijaz[note]).fq();
                    frequency_text = notes_hijaz[note];
                } 
                else if (scale == 1){
                    frequency = teoria.note(notes[note]).fq();
                    frequency_text = notes[note];
                } 
            }
            else{
                frequency = frequency_check; 
                frequency_text = Math.round(frequency) + "Hz"; 
            }
            
            var addedText = '';
                
            if (frequency > 20000){
                frequency = 20000;  
                addedText = "(Can't go above 20KHz)";
            } 
            else if (frequency == 0){
               addedText = "(It's too dark here)"; 
            }
            
            debug_label.text = luminosity + 'lx * ' + Math.round(factor * 100) / 100 + ' = ' + frequency_text + '\n' + addedText;
            
            var glide = T("param", {value: frequency});
            osc.set({freq: glide});
            glide.linTo(frequency, "25ms");
    
            last_frequency = frequency;
        }
    });      
}

function change_waveform(){  
    osc.pause();
    rev.pause();
    
    if (waves[form] != 'square'){
        osc = T("cosc", {wave:waves[form], freq:frequency, beats:5, mul:0.40});  
    }
    else{
        osc = T("square", {freq:frequency, mul:0.20}).play();
    }
    
    rev = T("reverb", {room:0.8, damp:0.4, mix:reverbs[reverb]}, osc).play();
}

function mute(){  
    if (mute_btn.frame == 0){
        mute_btn.frame = 1; 
        
        osc.pause(); 
        rev.pause();
    }
    else{
        mute_btn.frame = 0; 
        
        osc.play();
        rev.play();        
    } 
}

function initAd(){
    var admobid = {};

    admobid = {
        interstitial: 'ca-app-pub-9795366520625065/2870402631',
        banner: 'ca-app-pub-9795366520625065/7321032237'
    };

    if(AdMob) AdMob.createBanner({
       adId: admobid.banner,
       position: AdMob.AD_POSITION.BOTTOM_RIGHT,
       autoShow: true,
       isTesting: false
    });

    if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
}

function buttons_labels(){
    game.add.text(40, 225, 'Waveform', {
        font: '40px ' + font, fill: '#71d9ed', fontWeight: 'bold', align: 'center', stroke:'darkblue', strokeThickness: 2
    });
    game.add.text(70, 385, 'Scale', {
        font: '40px ' + font, fill: '#71d9ed', fontWeight: 'bold', align: 'center', stroke:'darkgreen', strokeThickness: 2
    });
    game.add.text(55, 535, 'Reverb', {
        font: '40px ' + font, fill: '#71d9ed', fontWeight: 'bold', align: 'center', stroke:'darkblue', strokeThickness: 2
    });
    game.add.text(30, 685, 'Sensitivity', {
        font: '40px ' + font, fill: '#71d9ed', fontWeight: 'bold', align: 'center', stroke:'darkgreen', strokeThickness: 2
    });

    Label_wave = game.add.text(525, 280, waves[0], {
        font: '48px ' + font, fill: 'white', fontWeight: 'normal', align: 'center', stroke:'black', strokeThickness: 1
    });
    Label_wave.anchor.set(0.5, 0.5);

    Label_scale = game.add.text(525, 432, scales[0], {
        font: '48px ' + font, fill: 'white', fontWeight: 'normal', align: 'center', stroke:'black', strokeThickness: 1
    });
    Label_scale.anchor.set(0.5, 0.5);

    Label_reverb = game.add.text(525, 585, labelsAmount[reverb], {
        font: '48px ' + font, fill: 'white', fontWeight: 'normal', align: 'center', stroke:'black', strokeThickness: 1
    });
    Label_reverb.anchor.set(0.5, 0.5);

    Label_sens= game.add.text(525, 738, labelsAmount[sensitivity], {
        font: '48px ' + font, fill: 'white', fontWeight: 'normal', align: 'center', stroke:'black', strokeThickness: 1
    });
    Label_sens.anchor.set(0.5, 0.5);

    next_btn_wave = game.add.sprite(644, 225, 'next');
    next_btn_wave.scale.set(0.5, 0.5);
    next_btn_wave.inputEnabled = true;
    next_btn_wave.events.onInputDown.add(function(){
        form++;
        if (form > 3) form = 0;
        Label_wave.text = waves[form];
        change_waveform();
    }, this);
    
    prev_btn_wave = game.add.sprite(270, 225, 'prev');
    prev_btn_wave.scale.set(0.5, 0.5);
    prev_btn_wave.inputEnabled = true;
    prev_btn_wave.events.onInputDown.add(function(){
        form--;
        if (form < 0) form = 3;
        Label_wave.text = waves[form];
        change_waveform();
    }, this);

    next_btn_scale = game.add.sprite(644, 375, 'next');
    next_btn_scale.scale.set(0.5, 0.5);
    next_btn_scale.inputEnabled = true;
    next_btn_scale.events.onInputDown.add(function(){
        scale++;
        if (scale > 6) scale = 0;
        Label_scale.text = scales[scale];
    }, this);

    prev_btn_scale = game.add.sprite(270, 375, 'prev');
    prev_btn_scale.scale.set(0.5, 0.5);
    prev_btn_scale.inputEnabled = true;
    prev_btn_scale.events.onInputDown.add(function(){
        scale--;
        if (scale < 0) scale = 6;
        Label_scale.text = scales[scale];
    }, this);

    plus_btn_rev = game.add.sprite(644, 525, 'plus');
    plus_btn_rev.scale.set(0.5, 0.5);
    plus_btn_rev.inputEnabled = true;
    plus_btn_rev.events.onInputDown.add(function(){
        if (reverb < 4) reverb++;
        Label_reverb.text = labelsAmount[reverb];
        change_waveform();
    }, this);

    minus_btn_rev = game.add.sprite(270, 525, 'minus');
    minus_btn_rev.scale.set(0.5, 0.5);
    minus_btn_rev.inputEnabled = true;
    minus_btn_rev.events.onInputDown.add(function(){
        if (reverb > 0) reverb--;
        Label_reverb.text = labelsAmount[reverb];
        change_waveform();
    }, this);

    plus_btn_sens = game.add.sprite(644, 680, 'plus');
    plus_btn_sens.scale.set(0.5, 0.5);
    plus_btn_sens.inputEnabled = true;
    plus_btn_sens.events.onInputDown.add(function(){
        if (sensitivity < 4) sensitivity++;
        Label_sens.text = labelsAmount[sensitivity];
    }, this);

    minus_btn_sens = game.add.sprite(270, 680, 'minus');
    minus_btn_sens.scale.set(0.5, 0.5);
    minus_btn_sens.inputEnabled = true;
    minus_btn_sens.events.onInputDown.add(function(){
        if (sensitivity > 0) sensitivity--;
        Label_sens.text = labelsAmount[sensitivity];
    }, this);

    calibrate_btn_440 = game.add.sprite(245, 95, 'calibrate');
    calibrate_btn_440.scale.set(0.7, 0.45);
    calibrate_btn_440.inputEnabled = true;
    calibrate_btn_440.events.onInputDown.add(function(){
        calibrate(440);
    }, this);
        
    Label_440 = game.add.text(270, 100, ' Calibrate to 440Hz', {
        font: '18px ' + font, fill: 'yellow', fontWeight: 'normal', align: 'center', stroke:'#ffffff', strokeThickness: 1
    });
    Label_440.alpha = 0.7;
    
    calibrate_btn_880 = game.add.sprite(435, 95, 'calibrate');
    calibrate_btn_880.scale.set(0.7, 0.45);
    calibrate_btn_880.inputEnabled = true;
    calibrate_btn_880.events.onInputDown.add(function(){
        calibrate(880);
    }, this);
    
    Label_880 = game.add.text(460, 100, 'Calibrate to 880Hz', {
        font: '18px ' + font, fill: 'yellow', fontWeight: 'normal', align: 'center', stroke:'#ffffff', strokeThickness: 1
    });
    Label_880.alpha = 0.8;
    
    calibrate_btn_1320 = game.add.sprite(625, 95, 'calibrate');
    calibrate_btn_1320.scale.set(0.7, 0.45);
    calibrate_btn_1320.inputEnabled = true;
    calibrate_btn_1320.events.onInputDown.add(function(){
        calibrate(1320);
    }, this);

    Label_1320 = game.add.text(645, 100, 'Calibrate to 1320Hz', {
        font: '18px ' + font, fill: 'yellow', fontWeight: 'normal', align: 'center', stroke:'#ffffff', strokeThickness: 1
    });
    Label_1320.alpha = 0.9;
    
    debug_label = game.add.text(40, 40, "No light sensor activity. It might be too dark.", {font: '34px ' + font, fill: 'white', fontWeight: 'bold', align: 'left'
    });

    mute_btn = game.add.sprite(620, 840, 'mute_btn');
    mute_btn.frame = 0;
    mute_btn.scale.set(0.62, 0.6);
    mute_btn.inputEnabled = true;
    mute_btn.events.onInputDown.add(function(){
        mute();
    }, this);
    mute_btn.alpha = 0.9;

    info_btn = game.add.sprite(270, 840, 'info');
    info_btn.scale.set(0.62, 0.6);
    info_btn.inputEnabled = true;
    info_btn.events.onInputDown.add(function(){
        killOsc();
        game.state.start("Info");  
    }, this);
    info_btn.alpha = 0.9;
    
    reset_btn = game.add.sprite(445, 840, 'reset');
    reset_btn.scale.set(0.62, 0.6);
    reset_btn.inputEnabled = true;
    reset_btn.events.onInputDown.add(function(){
        killOsc();
        game.state.start("Preloader");  
    }, this);
    reset_btn.alpha = 0.9;
 
    support_btn = game.add.sprite(70, 900, 'support');
    support_btn.scale.set(0.5, 0.5);
    support_btn.inputEnabled = true;
    support_btn.events.onInputDown.add(function(){
        if(AdMob) AdMob.showInterstitial();
    }, this);
    support_btn.alpha = 0.8;

    Label_support2= game.add.text(70, 900, 'Show ad to support', {
        font: '17px ' + font, fill: 'yellow', fontWeight: 'normal', align: 'center'
    });
    Label_support2.alpha = 0.7;
    
    btns = [reset_btn, info_btn, support_btn, mute_btn, minus_btn_sens, plus_btn_sens, minus_btn_rev, plus_btn_rev, next_btn_scale, prev_btn_scale, next_btn_wave, prev_btn_wave];
}

function calibrate(num){
    if (luminosity > 1){
        factor = num / luminosity;
    }
    else{
        factor = num;
    }
}

function killOsc(){
    osc.pause();
    rev.pause();
    osc.remove();
    rev.remove();
    osc = null;
    rev = null;
}