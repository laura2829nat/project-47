class AnswerBox {

    constructor() {
        this.answerBox = createInput ("20+5 = ?" )
        this.answerBox.position (415, 200)
        this.answerBox.style('background', 'white')

        this.button = createButton('Submit');
        this.button.position(470,230);
        this.button.style('background', 'lightgrey'); 
        
        this.answerBox2 = createInput ("30-10 = ?" )
        this.answerBox2.position (242, 200)
        this.answerBox2.style('background', 'white')

        this.button2 = createButton('Submit');
        this.button2.position(297,230);
        this.button2.style('background', 'lightgrey');
        
        this.answerBox3 = createInput ("60-10 = ?" )
        this.answerBox3.position (310, 100)
        this.answerBox3.style('background', 'white')

        this.button3 = createButton('Submit');
        this.button3.position(365,130);
        this.button3.style('background', 'lightgrey');

        this.answerBox4 = createInput ("80+50 = ?" )
        this.answerBox4.position (588, 200)
        this.answerBox4.style('background', 'white')

        this.button4 = createButton('Submit');
        this.button4.position(643,230);
        this.button4.style('background', 'lightgrey');

        this.answerBox5 = createInput ("13+4 = ?" )
        this.answerBox5.position (500, 100)
        this.answerBox5.style('background', 'white')

        this.button5 = createButton('Submit');
        this.button5.position(555,130);
        this.button5.style('background', 'lightgrey');

       

        
    }

    

    display(){

         

        this.button.mousePressed(() => {
            if(system.authenticate(answer1,this.answerBox.value())){
                this.button.hide();
                this.answerBox.hide();
                coin.visible = true  
                amazing.visible = true 
                coin.velocityY = -9
                if (coin.y < 200) {
                    coin.y = 200
                }         
                  
                amazing.velocityX = 10
                if (amazing.x > 800) {
                    amazing.x = 100
                }   
                      
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(answer2,this.answerBox2.value())){
                this.button2.hide();
                this.answerBox2.hide();
                coin.visible = true  
                amazing.visible = true 
                coin.velocityY = -9
                if (coin.y < 200) {
                    coin.y = 200
                }         
                   
                amazing.velocityX = 10
                if (amazing.x > 800) {
                    amazing.x = 100
                }   
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(answer3,this.answerBox3.value())){
                this.button3.hide();
                this.answerBox3.hide();
                coin.visible = true   
                coin.velocityY = -9
                if (coin.y < 200) {
                    coin.y = 200
                }         
                amazing.visible = true   
                amazing.velocityX = 10
                if (amazing.x > 800) {
                    amazing.x = 100
                }   
                score++;
            }
        });

        this.button4.mousePressed(() => {
          if(system.authenticate(answer4,this.answerBox4.value())){
                this.button4.hide();
                this.answerBox4.hide();
                coin.visible = true   
                coin.velocityY = -9
                if (coin.y < 200) {
                    coin.y = 200
                }         
                amazing.visible = true   
                amazing.velocityX = 10
                if (amazing.x > 800) {
                    amazing.x = 100
                }   
                score++;
            }
        });

        this.button5.mousePressed(() => {
            if(system.authenticate(answer5,this.answerBox5.value())){
                this.button5.hide();
                this.answerBox5.hide();
                coin.visible = true   
                coin.velocityY = -9
                if (coin.y < 200) {
                    coin.y = 200
                }         
                amazing.visible = true   
                amazing.velocityX = 10
                if (amazing.x > 800) {
                    amazing.x = 100
                }   
                score++;
            }
        });

        
                

    }}