var app = new Vue(
    {
        el: '#app',
        data: {
            newtodo:
                {
                    testo: '',
                    done: false
                },
            todoList: [
                {
                    testo: 'Fare la spesa ',
                    done: true
                },

                {
                    testo: 'Fare il bucato ',
                    done: true
                },
                {
                    testo: 'Fare un giro ',
                    done: true
                },

                {
                    testo: 'lavorare al computer ',
                    done: false
                },
                {
                    testo: 'fare un giro in città ',
                    done: false
                },


            ]

        },
        
        methods: {
            aggiungitod() {
                this.todoList.push(this.newtodo);
                this.newtodo ={
                    testo: '',
                    done: false
                }
            },
            eliminatodo(index){
                this.todoList.splice(index,1)
            },
            toglirig(index){
                if(this.todoList[index].done){
                    this.todoList[index].done = false;
                }else {
                    this.todoList[index].done = true;
                }
            },
        
        }
    }
);

