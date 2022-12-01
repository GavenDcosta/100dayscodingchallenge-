#include<stdio.h>
int main(){
    int a,b,c,d,e;
    printf("Enter marks of the 5 subjects");
    scanf("%d %d %d %d %d",&a,&b,&c,&d,&e);
    int avg=(a+b+c+d+e)/5;
    printf("%d",avg);
    return 0;
}