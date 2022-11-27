#include<stdio.h>
#include<stdlib.h>

struct node{
  int data;
  struct node *next;
}*top;

void push(int data){
  struct node *temp;
  temp=(struct node *)malloc(sizeof(struct node));
  temp->data = data;
  if(top==NULL){
    top=temp;
    top->next=NULL;
  }
  else{
    temp->next=top;
    top=temp;
  }
}

void pop(){
  struct node*var=top;
  if(top==NULL){
    printf("empty");
  }
  else{
    top=top->next;
    free(var);
  }
}

void display(){
   struct node *temp=top;
   if(top==NULL){
    printf("empty");
   }
   else{
    while(temp!=NULL){
        printf("%d",temp->data);
        temp=temp->next;
    }
   }
}
int main(){
  int top,data,i=0,n;
  while(i<=15){
    printf("enter option");
    scanf("%d",&n);
    switch(n){
case 1:
    printf("Enter the data");
    scanf("%d",&data);
    push(data);
    break;
case 2:
    pop();
    break;
case 3:
    display();
    break;
    }
 i++;

  }

return(0);

}