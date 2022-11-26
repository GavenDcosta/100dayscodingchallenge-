#include<stdio.h>
int main(){
    int a,i,fact=1;
    printf("enter any no");
    scanf("%d",&a);
    for(i=1;i<=a;i++){
        fact=fact*i;
    }
    printf("%d",fact);
}