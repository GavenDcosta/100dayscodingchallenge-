#include<stdio.h>
int main(){
    int a[50],x,n,i;
    printf("Enter the no of elements");
    scanf("%d",&n);
    printf("Enter elements of array");
    for(i=0;i<n;i++){
        scanf("%d",&a);
    }
    printf("Enter the element to be found");
    scanf("%d",&x);
    for(i=0;i<n;i++){
        if(a[i]==x){
            printf("element found at position %d",i);
        }
        else{
            printf("element not found");
        }
    }
return 0;        
}
