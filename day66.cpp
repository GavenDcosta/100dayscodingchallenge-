#include <stdio.h>

int size = 20;



int search(int arr[], int n, int x)

{

for (int i = 0; i < n; i++)

{
 if (arr[i] == x)

 return i;
 }
return -1;

}



int main()

{

 int arr[size];

 int x, n;
 printf("How many Elements in Array\n");
 scanf("%d", &n);

printf("Enter the Elements\n");

for (int i = 0; i < n; i++)

 scanf("%d", &arr[i]);

printf("\nEnter the Element to be searched\n");

 scanf("%d", &x);

 int result = search(arr, n, x);

}


