#!/bin/sh

qemu-system-mipsel -cdrom debian-9.1.0-mipsel-netinst.iso \
		   -hda hda.qcow -M malta -kernel vmlinux-4.9.0-13-4kc-malta \
		   -boot d -initrd initrd.gz -smp 4 -m 1G \
 		   -append "root=/dev/sda1 console=tty0" \
		   -netdev user,id=net0,hostfwd=tcp::2022-:22,hostfwd=tcp::2080-:80 -device virtio-net,netdev=net0 \
		   -nographic
