import re

f = open("./cgibin/timepro.cgi", "rb")
read = f.read()

regex = re.findall(r'cgi\?[a-zA-Z]+=[a-zA-Z_-]+&[a-zA-Z]+=[a-zA-Z_-]+', read)
tmenu = []
smenu = []
#cgi?page=url_redirect&subpage=frame
for i in regex:
	data = i.replace(re.match(r'cgi\?[a-zA-z]+=',i).group(), "")
	tmenu.append(re.match(r'[a-zA-Z_-]+',data).group())
	data2 = re.search(r'=[a-zA-Z_-]+',data).group()
	smenu.append(data2.replace("=", ""))

print tmenu
print
print
print smenu
