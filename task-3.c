#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int main()
{
	int d,m,*x,i,n,j=0,a,k;
	i=0;
	printf("how much distance a full tank can go");
	scanf("%d",&m);
	a=m;
	printf("distance between towns");
	scanf("%d",&d);
	printf("enter the no of stations");
	scanf("%d",&n);
	x=(int*)calloc(n,sizeof(int));
	printf("enter the distance of stations from home village in order");
	for(i=0;i<n;i++)
	{
		scanf("%d",&x[i]);
	}
	while(a<d)
	{
		for(i=0;i<n;i++)
	    {
		    if(a>=x[i])
		    {
			   k=x[i];
		    }
	    }
	    printf("%d,",k);
	    a=m+k;
	    j++;
    }
    printf("\n total no.of times to refill:%d",j);
	return 0;
}
	
		
	 
