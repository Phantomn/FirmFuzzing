ELF          (      4   �   4    (      4   4  4  �   �            �   �  �                           �  �           �  � � <  X           �  � � �   �         Q�td                          /lib/ld-musl-arm.so.1                                                                                                                              	   
                                           3  0                        `     	                2              9              @              G   $      M                            �              T              \                        r              >  0       x              $         �                       �              �              2  0       F  0       �               libcgi.so snprintf _fini __deregister_frame_info strcmp system fclose _init strstr system2 __register_frame_info fgets get_pvalue print_http_header puts fopen is_factory_test_mode libuserland.so libmt7622.so libnas.so libiconv.so.2 libgcc_s.so.1 libc.so __libc_start_main _edata __bss_start __bss_start__ __bss_end__ __end__ _end  �   �   �   �   �   � 	  � 
  �   �   �   �                @-�@���/��-���������  Ə�ʌ���� Ə�ʌ���� Ə�ʌ�x��� Ə�ʌ�p��� Ə�ʌ�h��� Ə�ʌ�`��� Ə�ʌ�X��� Ə�ʌ�P��� Ə�ʌ�H��� Ə�ʌ�@��� Ə�ʌ�8��� Ə�ʌ�0��� Ə�ʌ�(��� Ə�ʌ� ��� Ə�ʌ����p@-� P��@������  P�5  
���  ��������  P�  
�� ��p@��= �`������P��e  � ��`��  ��P������ ��@��  ��@������ ������ ��  ������ �����x ��  ����� ����� �����` ��  ����� �����P ��  ����� �����@ ��  �����8 ��  �����  ��p���j  \  �  �  3  U  <  �  $  �  �  �   ��� ������ �����Р�   �  0��@-� ��0��0�� 0��0�� �� �����` $ � 00��  ��  R��/@-�@��0��  S�  
 ��j���0�� 0�����     � 0��  S��/�� ���/�     � � ��@-�  ��f��� ��  ��u��� ��  ��r��� ��  ��o���x ��  ��l���p ��  ��i���h ��  ��f���` ��  ��c���X ��  ��`���P ��  ��]���H ��  ��Z���@ ��  ��W���8 ��@��  ��A���|  y  �  |  w  �  �  �  �  �  �  �  [  �O-���M�0"���`�� @�� 0�� ����� ��HP�����"��0���� �� ����� �������� ������� PP�*  ��� ����,��� pP�m  
́��̑��̡�����	���
���Ro�� ���� �����  P�  
�� ����� @P�    U����
	�� ������  P�	  
�� ������  P�  P������@��   �@�� ��E  �D�� �������� PP�B  0�� �������� �P�<  
1��p�����0����� 0��1��
������0��0��Ro��	 ���� ������  P�%  
  �����0��@�� ������� ������ @P�    U����
�� �����  P�  
�� ����� W�  
p��
  �
�� �����  P�  
l ����@��  �����  �P������@��	 ����� ��   � ���ߍ�����  p  w  b  H  N  `  �  �  �  �  �  v    p@-�@���� ���������� P�� �������� @�������  ��������  ��������  ������x��  ��}���p��  ��z���  T�  U  \��  ��t���T��  ��H  �L�� ����a���  P�  8����  ��m���,��  ��[���$��  ��a�������  ��%  ��� ����M���  P�,   �� ���  P�  � ��  ��P���� ��  ��M���� ��  ��  � P�  � ��  ��E���� ��  ��B��� ��  ��  � P�  � ��  ��:��� ����  ��6���
  � P�  � ��  ��0��� ��  ��-���| ��  ��*���t ��  ��'���  ��p���  �  �  �  �  �  �  �  �  �  �  �  �    R  3  Y  �  �  -  ]  U  }  �  �  	  �  @-�@���/�<script> function StartTest(band) { var F; if(band == '2g') F=txbf_iframe2g.txbf_act; else if(band == '5g') F=txbf_iframe5g.txbf_act; document.txbf.bt2g.disabled=true; document.txbf.bt5g.disabled=true; F.act.value='start'; F.band.value=band; F.submit(); } /bin/dmesg >> /var/run/txbf.%s 2g r Group : 0 Calibrated result = 1 Calibrated result = 0 5g Group : %d %s:Success<br> %s:FAIL<br> act band <html> <form name=txbf_act action=txbf_act.cgi method=get> <input type=hidden name=act> <input type=hidden name=band> </form> <span style="font-size:30px;color:blue">No Action</span> </html> start /bin/rm -rf /var/run/txbf.%s /bin/dmesg -c > /tmp/dummy <span style="font-size:30px;color:black">Waiting</span> <meta http-equiv=refresh content="3; URL=txbf_act.cgi?act=wait&band=%s"> wait <span style="font-size:30px;color:blue">OK</span> <script> parent.document.txbf.bt2g.disabled=false;</script> <script> parent.document.txbf.bt5g.disabled=false;</script> <span style="font-size:30px;color:red">NG</span> <span style="font-size:30px;color:red">ERROR</span> /cgibin/txbf_act.cgi <form name=txbf> <table><tr><td> <input type=button name=bt2g value='Get 2G TXBF CAL Result' style='width:250px; height:200px; font-size:20px;' onclick="StartTest('2g');"> </td><td> <iframe src="txbf_act.cgi" scrolling=no width=250px height=200px frameborder=yes name="txbf_iframe2g"></iframe> </td></tr></table> <input type=button name=bt5g value='Get 5G TXBF CAL Result' style='width:250px; height:200px; font-size:20px;' onclick="StartTest('5g');"> <iframe src="txbf_act.cgi" scrolling=no width=250px height=200px frameborder=yes name="txbf_iframe5g"></iframe>      � x          �      �      �      �      �      �      $    `    �          �              `    � 
   K                  �    x            �                                                 �         0 0 0 0 0 0 0 0 0 0 0 0 0 0 0     A:   aeabi 0   Cortex-A7 
A	"*,D .shstrtab .interp .hash .dynsym .dynstr .rel.plt .init .text .fini .rodata .eh_frame .init_array .fini_array .dynamic .got .data .bss .ARM.attributes                                                    �  �                                 �                         � �  �              !         ` `  K                 )   	   B   � �  x               2         $ $                    -         0 0  �                 8         � �  h                 >         ` `                    D      2   l l  g                L         � �                    V         � �                    b         � �                    n         � �  �                w         � �  H                 |                              �                              �     p          ;                                O  �                  