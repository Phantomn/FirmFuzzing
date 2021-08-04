#!/bin/sh

qemu-system-mipsel -hda ./stretch.img -M malta -kernel ./vmlinux-4.9.0-13-4kc-malta \
		   -initrd ./initrd.gz \
 		   -append "quite root=/dev/sda1 console=tty0 nokaslr" -nographic 
#		   -netdev user,id=net0,hostfwd=tcp::2022-:22,hostfwd=tcp::2080-:80 -device virtio-net,netdev=net0 \
#		   -nographic
#qemu-system-x86_64 -kernel bzImage -append "quiet console=ttyS0 root=/dev/sda" -hda ./stretch.img -nographic -m 2G -smp 2 -s

