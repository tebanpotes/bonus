class Queue {

    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;

    }

    queueEmpty(){
        return this.front == null;
    }

    Size(){
        return this.size;
    }

    Front(){
        return this.front.data;
    }

    Enqueue(data){

        
        let newNode = new Node(data);

        if(this.queueEmpty()){
            this.front = newNode;
            this.rear = newNode;

        }else{
            // Pointer next the element end => newNode
            this.front.next = newNode;
            //Pointer end => new element
            this.front = newNode;
        }

        this.size++;

    }

    Dequeue(){

        if(this.queueEmpty()){
            console.log("Error: You can't remove element of empty queue");
        }
        else if(this.front == this.rear){
            this.front  = null;
            this.rear = null;
            this.size ++;
        }else{
            this.front = this.front.next;
            this.size ++;
        }
            
        
    }



    show(){
        let aux = this.rear;

        // console.log(aux)

        while(aux){

           console.log(aux.data);
           aux = aux.next;
        }
    }


}


module.exports = Queue;