#include<stdio.h>
int main(){
    int a;
    printf("Enter year");
    scanf("%d",&a);
    if(a%100==0 || a%4==0){
         printf("It is a leap year");
    }
    else{
        printf("it is not a leap year");
    }
 return 0;   
}