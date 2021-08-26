import re
import sys
import random
import os

f = open("./squashfs-root/cgibin/timepro.cgi", "rb")
read = f.read()

regex = re.findall(r'cgi\?[a-zA-Z]+=[a-zA-Z_-]+&[a-zA-Z]+=[a-zA-Z_-]+', read)
tmenu = []
smenu = []
for i in regex:
        data = i.replace(re.match(r'cgi\?[a-zA-z]+=',i).group(), "")
        tmenu.append(re.match(r'[a-zA-Z_-]+',data).group())
        data2 = re.search(r'=[a-zA-Z_-]+',data).group()
        smenu.append(data2.replace("=", ""))

s = ""
q = ""
s += "tmenu="
q = raw_input()
s = s + q
s += "&smenu="
q = raw_input()
s = s + q
print s
os.environ["QUERY_STRING"] = s
os.environ["REQUEST_METHOD"] = "POST"
os.execve("./squashfs-root/cgibin/timepro.cgi", sys.argv, os.environ)
