ELF          (     4   ?#   4    (      4   4  4  ?   ?            ?   ?  ?                           8!  8!           8!  8! 8! ?  ?           @!  @! @!           Q?td                          /lib/ld-musl-arm.so.1                              
                                                                                                	                                                          
  ?$       ?              ?              )        	                ?              ?                 l      ?              ?             	             /               ?  ?"         ?$       ?                           ?  ?"       ?             $             9             ?              K             W             ?  ?"       b             ?              	  ?$         ?$       o              libnas.so _init __deregister_frame_info _fini __register_frame_info libmapd_interface_client.so libeasymesh_platform.so libeasymesh.so libapcp.so libnode.so libjson-c.so.4 sf_strncpy snprintf get_si hwinfo_get_product_code check_default_pass strcmp puts libcgi.so is_mobile_agent get_pvalue get_use_captcha_code print_http_header get_ux_lang print_file httpcon_auth httpcon_logout libuserland.so get_default_id_password libmt7622.so libiconv.so.2 libgcc_s.so.1 libc.so __libc_start_main _edata __bss_start __bss_start__ __bss_end__ __end__ _end   d"   h"   l"   p"   t"   x" 	  |" 
  ?"   ?"   ?"   ?"   ?"   ?"   ?"   ?"   ?"   ?"   ?"   ?"   @-?@???/??-???????????  Ə?ʌ????? Ə?ʌ????? Ə?ʌ????? Ə?ʌ????? Ə?ʌ????? Ə?ʌ????? Ə?ʌ????? Ə?ʌ????? Ə?ʌ????? Ə?ʌ????? Ə?ʌ????? Ə?ʌ?x??? Ə?ʌ?p??? Ə?ʌ?h??? Ə?ʌ?`??? Ə?ʌ?X??? Ə?ʌ?P??? Ə?ʌ?H??? Ə?ʌ?@????O-???M?p?????? ???[O??x????,???l???  ??P???`?????????? ??@?? ?? ??????D$??0??@?? ?? ??????
 ?????? ?????????? ???K?? ???????? ????????  P?  
?????????  P?   ??????? ???????? p?? ?? ??????  P?  
???  ??????  W?  
?????  ??????  ????  ?????????  ???  ???????@??  ??????K ? ??@ ?? ??|???l??  ??????d??  ??????\??  ??????T??  ??????L??  ??????D?? ????  ??n???4??  ??????,??  ??????$??  ??????j???  P?  
??  ??_?????  ?????? ??  ??}??????  ??z???  W?  
?????  ??P??????  ??q????????  ??I??????  ??j??????  ??g??????
 ????  ??>????????  ??:??????  ??[??????  ??X???????? ??  ??/???  Y??t?? p??  ??(???h??  ??I???`?? ????  ?? ???P??  ?????  Y?c  @"??@??@2?? ????0??4??  ?????  ?? ? ?? ??  ???????  ??-?????  ??*?????  ??'??? ??  ??$??????  ??!???  X?  
??? ????  ?????????  ??????a??`?? ????????  ???????? ????  ?????????  ????? ??????????  ?????????  ?????????  ?????????  ??????x??  ??????p??  ??????h??  ??????`??  ??????X??  ??????P??  ??????H??  ??????@??  ??????8??  ??????  ???ߍ?????  ???  ???  ??1????0???????  T  B  5    ?  ?  &  X  L  K  _  s  l  %  $
  ?    ?  ?  +  '  #  Q  q  ?  ?  ?    ;  ?  ?  ?  T    ?  ?  ?    ?  ?  ?  v  ?  ?  ?    1  W  ?  O  R  e  x  ?  !    ?  ?      ?    c        ;  <   ??? ??????? ?????Р?   ?  0??@-? ??0??0?? 0??0?? ?? ??Z??? l p 00??  ??  R??/@-?@??0??  S?  
 ??@???0?? 0??????"     4! 0??  S??/?? ???/?    ?" 4! @-?,??@????@???? ??,??? ?????? (  7@-? P??0@??????, ?? 0??@???? P??L?? ?? ????? ??Ѝ?0???? ?   @-? ??4???X?? ???????  P?H0?H ?0?  ? 
  
<?? ???????  P?  (0??( ??0?? ??0?? 0??Ѝ????p  0 P K   $ ,0??@-? @??0?? 0??  S?   ????0??0?? 0???????? ? @-?@???/?/images2 %s/%s password 000000 text 888888 pi logout 1 target <HTML> <SCRIPT>document.location.href="/sess-bin/login.cgi?target=%s"</SCRIPT>
 <SCRIPT>document.location.href="/sess-bin/login.cgi"</SCRIPT> </HTML> <HTML><HEAD><TITLE>%s</TITLE>
 /home/httpd/js/login_session.js <SCRIPT type="text/javascript"> <!-- function LoginProcess()
		{
			if(document.form.captcha_on.value == '1')				document.form.captcha_file.value=iframe_captcha.document.captcha_form.captcha_file.value;
			document.form.submit();
		} function ChangeCaptchaUse(flag)
        {
                if(flag==0)
                {
                        with(document)
                        {
                                getElementById("captchatr1").style.display = "none";
                                getElementById("captchatr2").style.display = "none";
                                getElementById("captchatr3").style.display = "none";
                        }
                }
                else
                        ChangeCaptchaInputBg();
        } function ChangeCaptchaInputBg(flag)
        {
                if(flag=="clear")
                        document.form.captcha_code.style.cssText="background-image:url();width:255px; height:21px;";
                else
                        document.form.captcha_code.style.cssText="background-image:url(%s/login_str_captcha_bg.%s.gif);width:255px; height:21px;";
        }
 function FocusPassword()
	{
        var F = document.form;
        if(F.passwd.value == F.default_passwd.value)
        {
		document.getElementById("passwd_td").innerHTML = '<input type=password name=passwd CLASS=login_input TABINDEX=2>';
                document.form.passwd.value = '';
                document.form.passwd.style.color = "#000000";
                document.form.passwd.focus();
        }
	} function RenewCaptchaImage()
        {
                document.getElementById("iframe_captcha").contentWindow.location.href="/sess-bin/captcha.cgi";
        }
	//-->
	</SCRIPT> /home/httpd/login_session.css <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=2.0; user-scalable=0;" /> </HEAD> <BODY > <FORM NAME="form" METHOD="post" ACTION="/sess-bin/login_handler.cgi"> <INPUT TYPE=hidden NAME="target" value=%s>
 <INPUT TYPE=hidden NAME="init_status" value=1> <INPUT TYPE=hidden NAME="captcha_on" value=%d>
 <INPUT TYPE=hidden NAME="captcha_file"> <TABLE CELLPADDING=0 CELLSPACING=0 CLASS=navi_login_table ALIGN=CENTER border=0> <TR><TD><IMG SRC="%s/login_title.%s.gif" BORDER=0></TD></TR>
 <TR><TD BACKGROUND="%s/login_main_bg.gif" STYLE="vertical-align:top;padding:0 0 0 3px;">
 <TABLE CELLPADDING=0 CELLSPACING=0 WIDTH=258 ALIGN=CENTER> <TR><TD COLSPAN=2 HEIGHT=10></TD></TR> <TR><TD WIDTH=70 STYLE="padding:0 0 0 1px;"><IMG SRC="%s/login_str_id.%s.gif" BORDER=0></TD>
 <TD><INPUT type=text name=username CLASS=login_input TABINDEX=1 value="%s" onkeydown="if (event.keyCode == 13) LoginProcess();"></TD></TR>
 <TR><TD COLSPAN=2 HEIGHT=3></TD></TR> <TR><TD WIDTH=70 STYLE="padding:0 0 0 1px;"><IMG SRC="%s/login_str_passwd.%s.gif" BORDER=0></TD>
 <TD ID='passwd_td'> <INPUT type=%s name=passwd CLASS=login_input TABINDEX=2 onfocus="FocusPassword();" value="%s" style="color:#%s" onkeydown="if (event.keyCode == 13) LoginProcess();"></TD></TR>
 <input type=hidden name="default_passwd" value="%s"> <TR><TD COLSPAN=2 HEIGHT=8></TD></TR> <TR ID=captchatr1><TD COLSPAN=2><INPUT type=text name=captcha_code CLASS=login_input STYLE="width:255px; height:21px;" autocomplete='off' autocorrect= 'off' autocapitalize = 'off' spellcheck = 'false' ONFOCUS="ChangeCaptchaInputBg('clear');" TABINDEX=3 onkeydown="if (event.keyCode == 13) LoginProcess();"></TD></TR> <TR ID=captchatr2><TD COLSPAN=2 HEIGHT=5></TD></TR> <TR ID=captchatr3><TD COLSPAN=2 HEIGHT=72> <TABLE CELLPADDING=0 CELLSPACING=0 HEIGHT=72 CLASS="login_input"> <TR><TD WIDTH=25><IMG SRC="%s/login_bt_refresh.%s.gif" BORDER=0 ONCLICK="RenewCaptchaImage();" STYLE="cursor:pointer;"></TD>
 <TD><IFRAME NAME=iframe_captcha ID=iframe_captcha SRC="/sess-bin/captcha.cgi" WIDTH=201 HEIGHT=70 FRAMEBORDER=no SCROLLING=no></IFRAME></TD></TR> </TABLE></TD></TR> <TR><TD COLSPAN=2 HEIGHT=12></TD></TR> <TR><TD COLSPAN=2 HEIGHT=50><IMG style="cursor:pointer" SRC="%s/login_bt.newwizard.%s.gif" TABINDEX=4 ID="submit_bt" onclick="LoginProcess();"  ></TD></TR>
 <TR><TD HEIGHT=10 BACKGROUND="%s/login_sess_back_info.gif"></TD></TR></TABLE>
 </FORM> </BODY> with(document) { ChangeCaptchaUse(form.captcha_on.value); form.username.focus(); //--> kr en Password is 'admin'. Change the password. 초기암호:admin(변경필요)        ? t          E      a      y      ?      ?      ?      ?      ~     ?     ?     ?     ?     l        8!          <!              ?    ? 
   "                  X"    ?            ?                                                 @!         x x x x x x x x x x x x x x x x x x x     ! ?  A:   aeabi 0   Cortex-A7 
A	"*,D .shstrtab .interp .hash .dynsym .dynstr .rel.plt .init .text .fini .rodata .eh_frame .init_array .fini_array .dynamic .got .data .bss .ARM.attributes                                                    ?  ?                                 ?                         ? ?  ?              !         ? ?  "                 )   	   B   ? ?  ?               2         l l                    -         x x  ?                 8         p p  ?                 >                              D      2                        L         4! 4!                    V         8! 8!                    b         <! <!                    n         @! @!                 w         X" X"  X                 |         ?" ?"                    ?         ?" ?"                    ?     p        ?"  ;                                ?"  ?                  