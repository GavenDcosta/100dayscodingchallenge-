#include<stdio.h>
#include<stdlib.h>
#include<conio.h>

int s[50], front=-1, rear=-1,n, i=0,c=0,value;

int enqueue(int val){
  if(front = rear == -1){
    front=rear=0;
  }
  s[++rear] = val;
}

void dequeue(){
    printf("%d",s[front]);
    front++;
}

void display(){
  if(front=rear == -1){
    printf("Empty");
  }
  else{
    for(i=front;i<=rear;i++){

        printf("%d",s[i]);
    }
  }
}

int main(){
  while(c<=15)
  {
      printf("Enter option 1,2,3=>");
      scanf("%d",&n);
      switch(n){
    case 1:
        printf("Enter the value");
        scanf("%d",&value);
        enqueue(value);
        break;
    case 2:
        dequeue();
        break;
    case 3:
        display();
        break;
      }
      c++;
  }
getch();
return 0;

}
