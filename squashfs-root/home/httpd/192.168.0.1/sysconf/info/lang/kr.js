// JavaScript Set Language (kr)
var D_lang = {
        "D_WWAN_DESC" 						: "무선WAN",
	"D_BLOCK_BY_PPPOE_SCHEDULER_DESC"			: "PPPoE 스케줄러에 의하여 차단됨",
        "D_SYSINFO_INTERNET_CONN_TYPE" 				: "연결 방식",
        "D_SYSINFO_INTERNET_PPTP_STATIC_IP" 			: "PPTP 연결",
        "D_SYSINFO_INTERNET_STATIC_IP" 				: "고정 IP 연결",
        "D_SYSINFO_INTERNET_CABLE_MODEM" 			: "동적 IP 연결",
        "D_SYSINFO_INTERNET_PPPOE" 				: "PPPoE 연결",
        "D_SYSINFO_INTERNET_CONN_STATE" 			: "연결 상태",
        "D_SYSINFO_INTERNET_CONN_SUCCESS" 			: "인터넷에 연결됨",
        "D_SYSINFO_INTERNET_CONFIGURING_IP" 			: "IP를 받는 중",
        "D_SYSINFO_INTERNET_INVALID_ID" 			: "잘못된 계정/암호",
        "D_SYSINFO_INTERNET_NO_CONNECTED" 			: "인터넷 연결 시도중",
        "D_SYSINFO_INTERNET_SAME_NETWORK" 			: "내부네트워크와 동일대역의 IP주소가 검출",
        "D_INTERNET_STOP_STRING" 				: "관리자에의해 중지됨",
        "D_INTERNET_CONNECTING" 				: "인터넷 연결 중",
        "D_SYSINFO_INTERNET_PRIVATEIP" 				: "사설 IP주소 검출됨",
        "D_DESC_WAN_PORT_DISCONNECTED" 				: "WAN포트 연결안됨",
	"D_WANPORT_IS_USED_BY_LAN"				: "WAN포트를 LAN포트로 사용 중",
	"D_SYSINFO_INTERNET_BACKUP_OFF"				: "인터넷 라인백업 중지됨",
	"D_SYSINFO_INTERNET_BACKUP_WAN2"			: "WAN2로 백업됨",
	"D_SYSINFO_INTERNET_BACKUP_WAN1"			: "WAN1로 백업됨",
	"D_SYSINFO_INTERNET_BACKUP_DISCON"			: "모든 WAN 연결 끊김",
	"D_SYSINFO_INTERNET_BACKUP_ON"				: "인터넷 라인백업 동작 중",
	"D_USB_TEHERING_USE"					: "USB 테더링 사용 중",

	"D_AP_MODE"						: "AP 모드",
	"D_ROUTER_MODE"						: "Router 모드",

	"D_NETCONF_INTERNAL_DHCP_STOPPED"			: "DHCP 서버 중지됨",
	"D_NETCONF_INTERNAL_DHCP_STOPPED_BY_LANWAN_SWITCH"	: "AP모드로 사용 중",
	"D_NETCONF_INTERNAL_DHCP_SUSPENDED"			: "중단됨(내부 네트워크에서 DHCP서버 검색)",
	"D_NETCONF_INTERNAL_DHCP_RUNNING"			: "DHCP 서버 동작 중",
	"D_WIFI_STOPPED_BY_SCHEDULER"				: "무선 스케줄러에 의해 중단됨",
	"D_WIFI_TURN_OFF_BY_SWITCH"				: "무선 스위치에 의해 꺼짐",
	"D_STARTED_STATUS"					: "동작 중",
	"D_STR_WIRELESS_CWAN_MODE"				: "무선 WAN모드",
	"D_SYSTEM_INFO_WIRELESS_ENC_ENABLE"			: "암호화 사용",
	"D_SYSTEM_INFO_WIRELESS_ENC_DISABLE"			: "암호화 사용하지 않음",
	"D_STOPPED_STATUS"					: "중단됨",
	"D_SYSINFO_WIRELESS_NOT_CONNECTED"			: "연결되지 않음",
	"D_SYSINFO_WIRELESS_DIFFERENT_AP"			: "설정되지 않은 AP로 연결",
	"D_SYSINFO_WIRELESS_MULTIBRIDGE_USEAP"			: "AP 기능 사용",
	"D_SYSINFO_WIRELESS_MULTIBRIDGE_NOUSEAP"		: "AP 기능 사용 중지",
	"D_DYNAMIC"						: "동적 IP 연결",
	"D_STATIC"						: "고정 IP 연결",
	"D_PPPOE"						: "PPPoE 연결",
	"D_PPTP"						: "PPTP 연결",
	"D_REMOTEMGMT_START_COMMENT"				: "번 원격 관리 포트 사용중",
	"D_REMOTEMGMT_STOP_COMMENT"				: "원격 관리 포트가 설정되어 있지 않음",


	"D_SYSCONF_MISC_PORT_ROLE_LAN_USE" 			: "LAN 포트",
	"D_SYSCONF_MISC_PORT_ROLE_WAN_USE" 			: "WAN 포트",
}

var S_lang = {
	"S_PAGE_TITLE"						: "시스템 요약 정보",

	"S_MENU_TEXT1"						: "바로가기",

	"S_MENU_WIRELESS"					: "무선 정보",

	"S_MENU1_TITLE"						: "인터넷 정보",
	"S_MENU1_TEXT1"						: "인터넷 연결 방식",
	"S_MENU1_TEXT2"						: "외부IP주소",
	"S_MENU1_TEXT3"						: "인터넷 연결 시간",
	"S_MENU1_TEXT4"						: "WAN IP할당 정보",
	"S_MENU1_TEXT5"						: "유선 포트",
	"S_MENU1_TEXT6" 					: "로 사용 중",
	"S_MENU1_TEXT7"		 				: "IP 대여시간 : ",
	"S_PORT_ROLE_PAGE_WARNING1" 				: "유선 포트 설정은",
	"S_PORT_ROLE_PAGE_WARNING2" 				: "[시스템 기타 설정]",
	"S_PORT_ROLE_PAGE_WARNING3" 				: "페이지에서 변경 가능",

	"S_MENU2_TITLE"						: "내부 네트워크 정보",
	"S_MENU2_TEXT1"						: "DHCP 서버 상태",
	"S_MENU2_TEXT2"						: "동작 IP 할당 범위",
	"S_MENU2_TEXT3"						: "(내부IP)",

	"S_MENU3_TITLE"						: "무선 정보(2.4GHz)",
	"S_MENU3_TEXT1"						: "무선 동작 모드",
	"S_MENU3_TEXT2"						: "멀티브리지 정보",
	"S_MENU3_TEXT3"						: "(SSID)",
	"S_MENU3_TEXT4"						: "무선 암호",
	"S_MENU3_TEXT5"						: "무선 암호 보기",

	"S_MENU4_TITLE"						: "무선 정보(5Ghz)",

	"S_MENU5_TITLE"						: "기타 정보",
	"S_MENU5_TEXT1"						: "현재 펌웨어 버전",
	"S_MENU5_TEXT2"						: "원격관리 정보",
	"S_MENU5_TEXT3"						: "시스템 동작 시간",
	"S_MENU5_TEXT4"						: "펌웨어 업그레이드 바로가기",

	"S_hh"							: "시간",
	"S_mm"							: "분",
	"S_ss"							: "초",

	"S_REMOTEMGMT_STOP_COMMENT2"				: "공유기 접속/보안 관리 바로가기",

	"S_MENU6_TITLE"						: "Easy Mesh",
	"S_MENU6_SUB1"						: "Easy Mesh",
	"S_MENU6_SUB2"						: "네트워크 이름(SSID)",
	"S_MENU6_TEXT1"						: "동작 중",
	"S_MENU6_TEXT2"						: "멈춤"
}
