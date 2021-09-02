#include <stdio.h>
#include <string.h>
#include <stdlib.h>

extern char** environ;

void main(int argc, char* argv[]){
	char s[0x60000] = {};
	char q[0x60000] = {};

	sprintf(s, "tmenu=");
	scanf("%1024s", q);
	strcat(s,q);
	strcat(s, "&smenu=");
	scanf("%1024s", q);
	strcat(s,q);
	printf("%s\n",s);

	setenv("QUERY_STRING", s, 1);
	setenv("REQUEST_METHOD", "POST", 1);	
	execv("./squashfs-root/cgibin/timepro.cgi", NULL, environ);
}
