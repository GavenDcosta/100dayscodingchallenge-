#include<stdio.h>
#define size 50
int q[size],front=-1,rear=-1;

void insert(int data){
    if(front==-1 && rear==-1){
        front=0 ; rear=0;
        q[rear]=data;
    }
    else if((rear+1)%size==front){
        printf("Queue is full");
    }
    else{
        rear=(rear+1)%size;
        q[rear]=data;
    }
}
int delete(){
    int element;
    if(front=rear==-1){
        printf("Queue is full");
    }
    else if(front==rear){
        front=rear=-1;
        printf("queue is empty");
    }
    else{
        element=q[front];
        front=(front+1)%size; 
    }
     return element;  
}
void display(){
    if(front=rear==-1){
        printf("queue is empty");
    }
    else{
        for(int i=front;i<(rear+1)%size;i++){
            printf("%d",q[i]);
        }
    }
}
int main(){
     int ele,ch;
     printf("1.Insert \n 2.delete \n 3.display \n 4.exit");
     while(ch<=4){
        
     printf("enter choice");
     scanf("%d",&ch);
     switch(ch){
        
        case 1: printf("enter the element to insert");
        scanf("%d",&ele);
        insert(ele);
       
        break;

        case 2: delete();
               
                break;

        case 3: display();
                 break;

        case 4: exit(0);
        break;      
     }
     }
return 0;     
}