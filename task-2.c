#include<stdio.h>
#include<string.h>
int checkpalin(char str[],int low,int high)         //function to check string is palindrome or not
{
  static int flag=0;                               //indication that string is palindrome
    
  if(low>=high)
    return flag;
  if(str[low]==str[high])
    {
      return checkpalin(str,low+1,high-1);
    }
  else
    {
      flag=flag+1;                                    //if flag is other than 0 it is not palindrome
      return checkpalin(str,low+1,high-1);
    }

}
int main()
{
  char str[100];                                 //decleration
  int a,len;
  printf("enter the string\n");
  scanf("%[^\n]",str);                         //input
  len=strlen(str);                            //function to find string lenght
  printf("%s\n",str);
  a=checkpalin(str,0,len-1);
  if(a==0)
    printf("it is palindrome");
  else
    printf("it is not palindrome");
    return 0;
}
	
