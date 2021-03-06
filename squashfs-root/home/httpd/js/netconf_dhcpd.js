<script>

var regExp_spchar = /[\{\}\[\]\/?;:|*~`!^+<>@&$#%\\\=\'\"]/g;

function validate_string(str, regExp, type)
{
        if(type == 'unpermitted'){if(str.match(regExp)) return false;}
        else if(!type || type == 'match'){if(!str.match(regExp)) return false;}
        return true;
}

function reset_form(F)
{
        if(!F)  return;

        for(var i = 0; i < F.length;){
                if(F[i] && F[i].tagName && F[i].tagName == 'INPUT' && F[i].name){
                        var nm = F[i].name;
                        F.removeChild(F[i]);
                        if(F[nm])       F[nm] = null;
                }else i++;
        }
}

function isIE6()
{
	var retv = -1;
	if (window.navigator && navigator.appName == 'Microsoft Internet Explorer')
	{
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
			retv = parseFloat( RegExp.$1 );
	}
	return ((retv==6.0)?true:false);
}

function add_hiddeninput(F, elem, idoc)
{
	if(!F || !elem)	return;

	var crelm = document.createElement('input');
	if(idoc)	crelm = idoc.createElement('input');
	crelm.type = 'hidden';
	/*IE 5*/
	if(crelm.getAttribute('type') != 'hidden')	crelm.setAttribute('type', 'hidden');

	if(elem.type == 'checkbox'){
		crelm.value = elem.checked?'on':'off';
		crelm.setAttribute('value', elem.checked?'on':'off');
	}else{
		crelm.value = elem.value;
		crelm.setAttribute('value', elem.value);
	}

	crelm.name = elem.name;
	crelm.setAttribute('name', elem.name);

	F.appendChild(crelm);
	/*IE 5*/
	if(!F[elem.name])
		F[elem.name] = crelm;

}

function copy_formvalues(original_form, copied_form, idoc)
{
        var F = original_form;
        var iform = copied_form;

        for(var i = 0; i < F.length; i++){
                if(F[i] && F[i].tagName && (F[i].tagName == 'INPUT' || F[i].tagName == 'SELECT') && F[i].name && !F[i].disabled){
                        if(is_viewing_element(F[i])){
                                var crelm = document.createElement('input');
				if(idoc)	crelm = idoc.createElement('input');
                                crelm.type = 'hidden';
                                /*IE 5*/
                                if(crelm.getAttribute('type') != 'hidden')	crelm.setAttribute('type', 'hidden');
                                if(F[i].type == 'checkbox' || F[i].type == 'radio'){
                                        if(F[i].checked){
                                                crelm.value = F[i].value;
                                                crelm.name = F[i].name;
                                                /*IE 5*/
                                                crelm.setAttribute('name', F[i].name);
                                                crelm.setAttribute('value', F[i].value);
                                        }else   continue;
                                }
                                else if(F[i].type == 'button'){
                                        continue;
                                }
                                else{
                                        crelm.value = F[i].value;
                                        crelm.name = F[i].name;
                                        /*IE 5*/
                                        crelm.setAttribute('name', F[i].name);
                                        crelm.setAttribute('value', F[i].value);
                                }
                                iform.appendChild(crelm);
                                /*IE 5*/
                                if(!iform[F[i].name])
                                        iform[F[i].name] = crelm;
                        }
                }
        }
}

function is_viewing_element(obj)
{
        var node = null;

        if(typeof obj.length == 'undefined'){
                node = obj;
                while(node){
                        if(typeof(node.style) != 'undefined' && node.style.display == 'none')
                                return false;
                        node = node.parentNode;
                }
                return true;
        }else{
                for(i=0; i < obj.length; i++){
                        node = obj[i];

                        var node_display = true;
                        while(node){
                                if(typeof(node.style) != 'undefined' && node.style.display == 'none'){
                                        node_display = false;   break;
                                }
                                node = node.parentNode;
                        }
                        if(node_display) return true;
                }
                return false;
        }
}

function SetIPViewByCheckbox(frm_name, checked)
{
	if(checked){
            EnableIP(frm_name);
	}
	else{
            DisableIP(frm_name);
	}
}

function onclick_ckbox(iname, obj)
{
	var F = document.netconf_dhcp;

	if(iname == 'miprange'){
		SetIPViewByCheckbox('spool_conf', obj.checked);
		SetIPViewByCheckbox('epool_conf', obj.checked);
		
		if(!obj.checked)	UpdateHiddenData('spool_conf', F.sporg.value);
		if(!obj.checked)	UpdateHiddenData('epool_conf', F.eporg.value);
	}
	else if(iname == 'mmask'){
		SetIPViewByCheckbox('smdhcp', obj.checked);
		if(!obj.checked)	UpdateHiddenData('smdhcp', F.smorg.value);
	}
	else if(iname == 'mgw'){
		SetIPViewByCheckbox('gwdhcp', obj.checked);
		if(!obj.checked)	UpdateHiddenData('gwdhcp', F.gworg.value);
	}
	else if(iname == 'mdns'){
		SetIPViewByCheckbox('fdhdns', obj.checked);
		SetIPViewByCheckbox('sdhdns', obj.checked);
		if(!obj.checked)	UpdateHiddenData('fdhdns', F.fdnsorg.value);
		if(!obj.checked)	UpdateHiddenData('sdhdns', F.sdnsorg.value);
	}
}

function UpdateHiddenData(iname, dat)
{
	var F = document.netconf_dhcp;
	
	if(dat && dat != ''){
		var dats = dat.split('.');
		for(var i = 0; i < dats.length; i++){
			(document.getElementsByName(iname + (i+1)))[0].value = dats[i];
		}
	}else{
		for(var i = 0; i < 4; i++){
			(document.getElementsByName(iname + (i+1)))[0].value = '';
		}
	}
}

function ChangeDHCPServerOp()
{
    var F = document.netconf_dhcp;
    if (F.dhcp_enable[0].checked == true)
    {
            EnableIP('spool_conf');
            EnableIP('epool_conf');
            EnableIP('smdhcp');
            EnableIP('gwdhcp');
            EnableIP('sdhdns');
            EnableIP('fdhdns');
            EnableObj(F.domain);
            if(F.leasetime) F.leasetime.disabled = false;

            if(F.dhcp_auto_detect)
                    F.dhcp_auto_detect.disabled = false;
            if(F.miprange){
                    F.miprange.disabled = false;
		    SetIPViewByCheckbox('spool_conf', F.miprange.checked);
		    SetIPViewByCheckbox('epool_conf', F.miprange.checked);
	    }
            if(F.mmask){
                    F.mmask.disabled = false;
		    SetIPViewByCheckbox('smdhcp', F.mmask.checked);
	    }
            if(F.mgw){
                    F.mgw.disabled = false;
		    SetIPViewByCheckbox('gwdhcp', F.mgw.checked);
	    }
            if(F.mdns){
                    F.mdns.disabled = false;
		    SetIPViewByCheckbox('fdhdns', F.mdns.checked);
		    SetIPViewByCheckbox('sdhdns', F.mdns.checked);
	    }else{
		    DisableIP('sdhdns');
		    DisableIP('fdhdns');
	    }
    }
    else
    {
            DisableIP('spool_conf');
            DisableIP('epool_conf');
            DisableIP('smdhcp');
            DisableIP('gwdhcp');
            DisableIP('sdhdns');
            DisableIP('fdhdns');
            DisableObj(F.domain);
            if(F.leasetime) 		F.leasetime.disabled = true;
            if(F.dhcp_auto_detect)	F.dhcp_auto_detect.disabled = true;
            if(F.miprange)		F.miprange.disabled = true;
            if(F.mmask)			F.mmask.disabled = true;
            if(F.mgw)			F.mgw.disabled = true;
            if(F.mdns)			F.mdns.disabled = true;
    }
}

function check_ipval_diff(F, copyF, iname)
{
	if(!F || !copyF || !iname)	return 0;

	for(var i = 1; i <= 4; i++){
		if(!F[iname+i] && copyF[iname+i])		return 1;
		if(F[iname+i] && !copyF[iname+i])		return 1;
		if(F[iname+i].value != copyF[iname+i].value)	return 1;
	}

	return 0;
}

function onclick_research_span()
{
	var ifr = document.dhcp_pcinfo || document.getElementsByName('dhcp_pcinfo')[0];
        if(!ifr)        return;
        var idoc = ifr.document || ifr.contentWindow.document;
        if(!idoc)       return;
        var iform = idoc.dhcp_pcinfo_fm;
	if(!iform)	return;

	document.netconf_dhcp.add_allchk.checked = false;
	iform.act.value = '';
	iform.submit();
}

function FillManualAddr(doc, F, ip, hwaddr, desc)
{
	if(!ip || !hwaddr){
		F.manual_ip4.value = '';
		F.manual_hw1.value = '';
		F.manual_hw2.value = '';
		F.manual_hw3.value = '';
		F.manual_hw4.value = '';
		F.manual_hw5.value = '';
		F.manual_hw6.value = '';
		if(F.desc)
			F.desc.value = '';
		return;
	}
	SetIPDoc(doc, 'manual_ip', ip);
	SetHWDoc(doc, 'manual_hw', hwaddr);
	if(F.desc)
		F.desc.value = desc;
}

function onclick_list_tr(doc, line_count)
{
	var F = doc.dhcp_pcinfo_fm;
	var parentF = document.netconf_dhcp;
	var obj = doc.getElementById('addlease_line'+line_count);
	var macaddr = F['m'+line_count].value;
	var ipaddr = F['i'+line_count].value;
	var desc = F['h'+line_count].value;

	if(F.clickedid.value && F.clickedid.value != ''){
		if(F.clickedid.value == obj.id){
			FillManualAddr(document, parentF, null, null, null);
			obj.style.backgroundColor = F.clickedbg.value;
			F.clickedid.value = '';
			F.clickedbg.value = '';
		}else{
			FillManualAddr(document, parentF, ipaddr, macaddr, desc);
			doc.getElementById(F.clickedid.value).style.backgroundColor = F.clickedbg.value;
			F.clickedid.value = obj.id;
			F.clickedbg.value = obj.style.backgroundColor;
			obj.style.backgroundColor = '#C9D5E9';
		}
	}else{
		FillManualAddr(document, parentF, ipaddr, macaddr, desc);
		F.clickedid.value = obj.id;
		F.clickedbg.value = obj.style.backgroundColor;
		obj.style.backgroundColor = '#C9D5E9';
	}
}

function onclick_macristrict()
{
	ApplyPartSubmit('mac_restrict');
}

function ApplyPartSubmit(iname)
{
	var ifr = document.hiddendhcp_iframe || document.getElementsByName('hiddendhcp_iframe')[0];
        if(!ifr)        return;
        var idoc = ifr.document || ifr.contentWindow.document;
        if(!idoc)       return;
        var iform = idoc.netconf_hiddendhcp;
	
	var F = document.netconf_dhcp;

	document.getElementById('dhcp_div_msg').innerHTML = NETCONF_DHCP_APPLYSTR;
        MaskIt(document, 'apply_mask');

if(isIE6()){
	add_hiddeninput(iform, F[iname], idoc);
	add_hiddeninput(iform, F.tmenu, idoc);
	add_hiddeninput(iform, F.smenu, idoc);
	add_hiddeninput(iform, F.act, idoc);
}else{
	add_hiddeninput(iform, F[iname]);
	add_hiddeninput(iform, F.tmenu);
	add_hiddeninput(iform, F.smenu);
	add_hiddeninput(iform, F.act);
}

	iform.tmenu.value = 'iframe';
	iform.smenu.value = 'hiddendhcpsetup';
	iform.act.value = 'part';

	iform.submit();
}

function ApplyDhcpSetup()
{
	if(!CheckDHCPSetup())		return;
	if(!CheckDHCPOptions())		return;

	var F = document.netconf_dhcp;
	var copyF = document.backup_dhcp;

	var ifr = document.hiddendhcp_iframe || document.getElementsByName('hiddendhcp_iframe')[0];
        if(!ifr)        return;
        var idoc = ifr.document || ifr.contentWindow.document;
        if(!idoc)       return;
        var iform = idoc.netconf_hiddendhcp;

if(isIE6()){
	copy_formvalues(F, iform, idoc);
}else{	
	copy_formvalues(F, iform);
}
	iform.act.value = 'submit';
	iform.tmenu.value = 'iframe';
	iform.smenu.value = 'hiddendhcpsetup';

	document.getElementById('dhcp_div_msg').innerHTML = NETCONF_DHCP_APPLYSTR;
        MaskIt(document, 'apply_mask');

	iform.submit();
	reset_form(copyF);
	copy_formvalues(F, copyF);
}

function GetBCAddr(ip, sm)
{
	var nw = [];
	var broad = [];

	for(var i = 0; i < 4; i ++){
		nw[i] = sm[i] & ip[i];
		broad[i] = (nw[i] ^ ~ sm[i] & 255);
	}

        return (broad[0]+'.'+broad[1]+'.'+broad[2]+'.'+broad[3]);
}

function GetNAddr(ip, sm)
{
	var nw = [];

        for(var i = 0; i < 4; i ++){
                nw[i] = sm[i] & ip[i];
        }

        return (nw[0]+'.'+nw[1]+'.'+nw[2]+'.'+nw[3]);
}

function CheckDHCPOptions()
{
	var F = document.netconf_dhcp;

	if(GetValue(F.dhcp_enable) == 'off' || !F.miprange.checked)	return 1;

	var ipaddr;
	var subnet;
	var braddr;
	var netaddr;

	//if(F.mgw.checked)
		ipaddr = GetIP('gwdhcp').split('.');
	//else
	//	ipaddr = F.lgw.value.split('.');
	//if(F.mmask.checked)
		subnet = GetIP('smdhcp').split('.');
	//else
	//	subnet = F.lmask.value.split('.');

	braddr = GetBCAddr(ipaddr, subnet);
	netaddr = GetNAddr(ipaddr, subnet);

	var sip_org = GetIP('spool_conf');
	var eip_org = GetIP('epool_conf');

	if(braddr == sip_org || braddr == eip_org){
		alert(MSG_ERROR_BROAD_DHCP);	return 0;
	}
	if(netaddr == sip_org || netaddr == eip_org){
		alert(MSG_ERROR_NETWORK_DHCP);	return 0;
	}

	var sip = sip_org.split('.');
	var eip = eip_org.split('.');

	for(var i = 0; i < 4; i ++){
		ipaddr[i] = parseInt(ipaddr[i]);
		subnet[i] = parseInt(subnet[i]);
		sip[i] = parseInt(sip[i]);
		eip[i] = parseInt(eip[i]);
	}
	
	for(var i = 0; i < 4; i ++){
		if((ipaddr[i] & subnet[i]) != (sip[i] & subnet[i])){
			alert(NETCONF_DHCP_SIP_CALC_FAIL);
			return 0;
		}
		if((ipaddr[i] & subnet[i]) != (eip[i] & subnet[i])){
			alert(NETCONF_DHCP_EIP_CALC_FAIL);
			return 0;
		}
	}

	return 1;
}

function UpdateSubmitResult(sip, eip, sm, gw, fdns, sdns)
{
	var F = document.netconf_dhcp;

	var splitted;
	var i;

	if(!F.miprange.checked){
		splitted = sip.split('.');
		for(i = 0; i < splitted.length; i++){
			(document.getElementsByName('spool_conf'+(i+1)))[0].value = splitted[i];
		}
		splitted = eip.split('.');
		for(i = 0; i < splitted.length; i++){
			(document.getElementsByName('epool_conf'+(i+1)))[0].value = splitted[i];
		}
	}
	if(!F.mmask.checked){
		splitted = sm.split('.');
		for(i = 0; i < splitted.length; i++){
			(document.getElementsByName('smdhcp'+(i+1)))[0].value = splitted[i];
		}
	}
	if(!F.mgw.checked){
		splitted = gw.split('.');
		for(i = 0; i < splitted.length; i++){
			(document.getElementsByName('gwdhcp'+(i+1)))[0].value = splitted[i];
		}
	}
	if(!F.mdns || (F.mdns && !F.mdns.checked)){
		splitted = fdns.split('.');
		for(i = 0; i < splitted.length; i++){
			(document.getElementsByName('fdhdns'+(i+1)))[0].value = splitted[i];
		}
		splitted = sdns.split('.');
		for(i = 0; i < splitted.length; i++){
			(document.getElementsByName('sdhdns'+(i+1)))[0].value = splitted[i];
		}
	}
}

function CheckDHCPSetup()
{
    var obj;
    var F = document.netconf_dhcp;
    if (F.dhcp_enable[0].checked == true)
    {
	if(F.miprange.checked){
            if(obj=CheckIP('spool_conf'))
            {
                    obj.focus();
                    obj.select();
                    alert(NETCONF_DHCP_SIP_CALC_FAIL);
		    return 0;
            }
            else if(obj=CheckIP('epool_conf'))
            {
                    obj.focus();
                    obj.select();
                    alert(NETCONF_DHCP_EIP_CALC_FAIL);
		    return 0;
            }
            else if (parseInt(F.spool_conf4.value) > parseInt(F.epool_conf4.value)){
                    alert(NETCONF_DHCP_INVALID_ADDR);
		    return 0;
	    }
	}
	if(F.mgw.checked){
            if(obj=CheckIP('gwdhcp'))
            {
                    obj.focus();
                    obj.select();
                    alert(MSG_INVALID_DHCP_GATEWAY);
		    return 0;
            }
	}
	if(F.mmask.checked){
            if(obj=CheckMask('smdhcp'))
            {
                    obj.focus();
                    obj.select();
                    alert(MSG_INVALID_DHCP_NETMASK);
		    return 0;
            }
	}
	if(F.mdns && F.mdns.checked){
            if(obj=CheckIP('fdhdns'))
            {
                    obj.focus();
                    obj.select();
                    alert(MSG_INVALID_FDNS);
		    return 0;
            }
            if(F.sdhdns1.value != '' || F.sdhdns2.value != '' || F.sdhdns3.value != '' || F.sdhdns4.value != ''){
			if((obj=CheckIP('sdhdns')))
			{
				obj.focus();
				obj.select();
				alert(MSG_INVALID_SDNS);
				return 0;
			}
		}
	}

	if((F.leasetime.value == '-') || (isInteger(F.leasetime.value) == false) )
	{
                    alert(NETCONF_INTERNAL_INVALID_LEASETIME);
		    F.leasetime.focus();
		    return 0;
	}
    }
    else
    {
            return 1;
    }
    return 1;
}


function CheckManualRegister()
{
        var F= document.dhcp_pcinfo_fm;
        if(F.dhcp_pcinfo_fm.checked == true)
	{
                EnableHW('manual_hw');
                EnableIP('manual_ip');
	}
        else
	{
                DisableHW('manual_hw');
                DisableIP('manual_ip');
	}
}

function CheckIPObj_Custom(name)
{
	var i;
        for( i=1;i<= 4 ;i++)
        {
                obj=document.getElementsByName(name+i);
                if(!obj[0])
                {
                        alert("Bug:Invalid IP Obj"+name+i);
                        break;
                }
                if ((i == 1) && (checkRange(obj[0].value, 1, 255)))
                        return obj[0];
                else if(checkRange(obj[0].value, 0, 255))
                        return obj[0];
        }
        return 0;
}

function CheckHWObj_Custom(name)
{
	var i;
        var name;
        for( i=1;i<= 6 ;i++)
        {
                obj=document.getElementsByName(name+i);
                if(!obj[0])
                {
                        alert("Bug:Invalid Obj"+name);
                        break;
                }

                if(checkHardwareRange(obj[0].value,0))
                        return obj[0];
        }
        return 0;
}

function GetHW_Custom( name )
{
        var hwval=(document.getElementsByName(name+1))[0].value+':';

        hwval+=(document.getElementsByName(name+2))[0].value+':';
        hwval+=(document.getElementsByName(name+3))[0].value+':';
        hwval+=(document.getElementsByName(name+4))[0].value+':';
        hwval+=(document.getElementsByName(name+5))[0].value+':';
        hwval+=(document.getElementsByName(name+6))[0].value;

        return hwval;
}

function ClearManualBox()
{
	document.netconf_dhcp.manual_ip4.value = '';
	document.netconf_dhcp.manual_hw1.value = '';
	document.netconf_dhcp.manual_hw2.value = '';
	document.netconf_dhcp.manual_hw3.value = '';
	document.netconf_dhcp.manual_hw4.value = '';
	document.netconf_dhcp.manual_hw5.value = '';
	document.netconf_dhcp.manual_hw6.value = '';
	if(document.netconf_dhcp.desc)
		document.netconf_dhcp.desc.value = '';
}

function AddManualStaticLease()
{
	var obj;
	var desclen;

	if(obj=CheckIPObj_Custom('manual_ip'))
	{
		alert(MSG_INVALID_IP);
		obj.focus();
		obj.select();
		return;
	}
	if(obj=CheckHWObj_Custom('manual_hw'))
	{
		alert(MSG_INVALID_HWADDR);
		obj.focus();
		obj.select();
		return;
	}
	if(document.netconf_dhcp.desc){
		if((desclen=StrLenUTF8CharCode(document.netconf_dhcp.desc.value)) > 20)
		{
			alert(MSG_DESC_TOO_LONG+desclen+'bytes');
			return;
		}
		if(!validate_string(document.netconf_dhcp.desc.value, regExp_spchar, 'unpermitted'))
		{
			alert(NETCONF_DHCP_UNPERMITTED_ALERT);
			return;
		}
	}
	var ifr = document.dhcp_pcinfo || document.getElementsByName('dhcp_pcinfo')[0];
        if(!ifr)        return;
        var idoc = ifr.document || ifr.contentWindow.document;
        if(!idoc)       return;
        var iform = idoc.dhcp_pcinfo_fm;
	if(!iform)	return;

	document.netconf_dhcp.add_allchk.checked = false;
	iform.act.value = 'add';
	iform.manual_check.value = 'on';
	iform.manual_ip.value = GetIP('manual_ip');
	iform.manual_hw.value = GetHW_Custom('manual_hw');
	if(document.netconf_dhcp.desc)
		iform.desc.value = document.netconf_dhcp.desc.value;
	iform.submit();

	ClearManualBox();
}

function AddStaticLease()
{
	document.netconf_dhcp.add_allchk.checked = false;
	var ifr = document.dhcp_pcinfo || document.getElementsByName('dhcp_pcinfo')[0];
        if(!ifr)        return;
        var idoc = ifr.document || ifr.contentWindow.document;
        if(!idoc)       return;
        var iform = idoc.dhcp_pcinfo_fm;
	if(!iform)	return;

	iform.act.value = 'add';
	iform.manual_check.value = '';
	iform.submit();
	
	ClearManualBox();
}

function RemoveStaticLease()
{
	document.netconf_dhcp.del_allchk.checked = false;
	var ifr = document.static_lease || document.getElementsByName('static_lease')[0];
        if(!ifr)        return;
        var idoc = ifr.document || ifr.contentWindow.document;
        if(!idoc)       return;
        var iform = idoc.static_lease_fm;
	if(!iform)	return;
	iform.act.value = 'remove';
	iform.submit();
}

function AddPostSubmit()
{
	var ifr = document.static_lease || document.getElementsByName('static_lease')[0];
        if(!ifr)        return;
        var idoc = ifr.document || ifr.contentWindow.document;
        if(!idoc)       return;
        var iform = idoc.static_lease_fm;
	if(!iform)	return;
        iform.act.value = '';
        iform.submit();
}

function RemovePostSubmit()
{
	var ifr = document.dhcp_pcinfo || document.getElementsByName('dhcp_pcinfo')[0];
        if(!ifr)        return;
        var idoc = ifr.document || ifr.contentWindow.document;
        if(!idoc)       return;
        var iform = idoc.dhcp_pcinfo_fm;
	if(!iform)	return;

        iform.act.value = '';
        iform.submit();
}

function init_netconf_dhcp()
{
	document.runstat = 'run';
	document.body.style.backgroundColor='#EEEEEE';  document.body.children[0].style.backgroundColor='#EEEEEE';
	var F = document.netconf_dhcp;
	var copyF = document.backup_dhcp;

	reset_form(copyF);
	copy_formvalues(F, copyF);

	ChangeDHCPServerOp();
}

</script>
