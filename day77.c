#include<stdio.h>
#include "d77.h"  
// "d77.h" indicates that we have to search in the same directory 
//header file to perform arithmatic operations

int main(){
    int x,y;
    printf("Enter any two numbers");
    scanf("%d %d",&x,&y);
    add(x,y);
    sub(x,y);
    mul(x,y);
    div(x,y);
    mod(x,y);
}