var app = new Vue(
    {
        el:'#app',
        data:{
            newtodo:'',
            todoList: [
                {
                    testo:'Fare la spesa ',
                    done:true
                },

                {
                    testo:'Fare il bucato ',
                    done: false
                },
                {
                    testo:'Fare un giro ',
                    done:true
                },

                {
                    testo:'lavorare al computer ',
                    done:true
                },

                
            ]
        
        }
        
    }
);

