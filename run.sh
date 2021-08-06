#!/bin/sh

qemu-system-mipsel -M malta \
 -m 256 -hda hda.img \
 -kernel vmlinux-4.19.0-17-4kc-malta \
 -initrd initrd.img-4.19.0-17-4kc-malta \
 -append "root=/dev/sda1 console=ttyS0 nokaslr" \
 -device e1000-82545em,netdev=net0 \
 -netdev user,id=net0,hostfwd=tcp::5555-:22 \
 -nographic 
