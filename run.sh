#!/bin/sh

qemu-system-mipsel -M malta -kernel vmlinux-3.2.0-4-4kc-malta -hda debian_wheezy_mipsel_standard.qcow2 \
 		   -append "root=/dev/sda1 console=tty0" \
		   -netdev user,id=net0,hostfwd=tcp::2022-:22,hostfwd=tcp::2080-:80 -device virtio-net,netdev=net0 \
		   -nographic
