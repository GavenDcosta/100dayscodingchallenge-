#include<stdio.h>
#include<stdlib.h>
#include<conio.h>

int s[50], top = -1, i=0;

int push(int val){
   s[++top] =val;
}

void display(){
   for(i=0;i<=top;i++){
    printf("%d",s[i]);
   }
}

int main(){
    int value,n, s[50],i, c=0;

    while(c<=15){
    printf("Enter option");
    scanf("%d",&n);
    switch(n){

    case 1:
    printf("Enter the value to push");
    scanf("%d",&value);
     push(value);
     break;

    case 2:
        display();
        break;
    }
    c++;
    }
    getch();
    return(0);
}
