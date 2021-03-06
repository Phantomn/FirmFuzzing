<script language="javascript" type="text/javascript">

var WIRELESSCONF_BASICSETUP_AUTOCHANNEL_STRING = '자동';
var WIRELESSCONF_BASICSETUP_UPPERCHANNEL = '하위';
var WIRELESSCONF_BASICSETUP_LOWERCHANNEL = '상위';
var WIRELESSCONF_BASICSETUP_TITLESTR = '무선 네트워크 선택';
var WIRELESSCONF_BASICSETUP_DEFNET = '기본 무선 네트워크';
var WIRELESSCONF_BASICSETUP_GSTNET = '게스트 네트워크';
var WIRELESSCONF_BASICSETUP_WPSCONNBTN = 'WPS연결';
var WIRELESSCONF_BASICSETUP_WPSDISSBTN = 'WPS취소';
var WIRELESSCONF_BASICSETUP_SECOND = '초';

var WIRELESSCONF_WPSSETUP_PROCESSING = 'WPS버튼을 눌러서 연결하세요.';
var WIRELESSCONF_WPSSETUP_CONFIGURED = '성공적으로 연결되었습니다.';
var WIRELESSCONF_WPSSETUP_CANCEL = '취소 중';

var WIRELESSCONF_BASICSETUP_SSID_BLANK = '네트워크 SSID를 입력해 주세요.';
var WIRELESSCONF_BASICSETUP_SSID_OVERFLOW = 'SSID의 길이가 32바이트를 초과하였습니다.\n한글을 사용할 경우, 한 글자당 3바이트로 계산됩니다.\n현재 설정된 SSID의 길이: ';
var WIRELESSCONF_BASICSETUP_SSID_UNPERMITTED = 'SSID에 허용되지 않는 특수문자가 있습니다.';
var WIRELESSCONF_BASICSETUP_RADIUSSERVER_INVALID = 'RADIUS 서버에 정확한 IP주소를 입력하여 주십시오.';
var WIRELESSCONF_BASICSETUP_RADIUSPORT_INVALID = 'RADIUS 포트 번호를 정확히 입력하여 주십시오.';
var WIRELESSCONF_BASICSETUP_RADIUSSECRET_INVALID = 'RADIUS 암호를 입력하여 주십시오.';
var WIRELESSCONF_BASICSETUP_WPAPSK_BLANKED = '네트워크 암호를 입력하여 주십시오.';
var WIRELESSCONF_BASICSETUP_WPAPSK_INVALID = '네트워크 암호를 8글자 이상 입력하여 주십시오.';
var WIRELESSCONF_BASICSETUP_WPAPSK_HEX_INVALID = '네트워크 암호를 64글자 입력하는 경우,\nHEX 문자열로 입력해야 합니다.';
var WIRELESSCONF_BASICSETUP_WEP_KEYERR = 'WEP 암호는 \n5글자(WEP64 문자열) / 10글자(WEP64 HEX),\n13글자(WEP128 문자열) / 26글자(WEP128 HEX)\n로 입력해 주십시오.';
var WIRELESSCONF_BASICSETUP_RXRATE_INVALID = '다운로드 제한속도가 잘못 입력되었습니다.';
var WIRELESSCONF_BASICSETUP_TXRATE_INVALID = '업로드 제한속도가 잘못 입력되었습니다.';
var WIRELESSCONF_BASICSETUP_REGULATION_WARNING = '이 채널은 전파법상 저출력 채널로 규정되어 있습니다.\n원거리 접속 시에는 다른 채널 사용을 추천합니다.\n계속하시겠습니까?';
var WIRELESSCONF_BASICSETUP_WEP_NOTSUPPORT = 'WEP 암호화 방식은 설정할 수 없습니다.';

var WIRELESSCONF_EXTENDSETUP_TXPOWER_BLANKED = 'Tx파워 값을 입력하여 주십시오.';
var WIRELESSCONF_EXTENDSETUP_TXPOWER_INVALID = 'Tx파워 값은 1~100 사이로 입력하여 주십시오.';
var WIRELESSCONF_EXTENDSETUP_BEACON_BLANKED = 'Beacon 값을 입력하여 주십시오.';
var WIRELESSCONF_EXTENDSETUP_BEACON_INVALID = 'Beacon 값은 50~1024 사이로 입력하여 주십시오.';
var WIRELESSCONF_EXTENDSETUP_RTS_BLANKED = 'RTS 한계 값을 입력하여 주십시오.';
var WIRELESSCONF_EXTENDSETUP_RTS_INVALID = 'RTS 한계 값은 0~2347 사이로 입력하여 주십시오.';
var WIRELESSCONF_EXTENDSETUP_FRAG_BLANKED = 'Fragmentation 값을 입력하여 주십시오.';
var WIRELESSCONF_EXTENDSETUP_FRAG_INVALID = 'Fragmentation 값은 256~2346 사이로 입력하여 주십시오.';
var WIRELESSCONF_EXTENDSETUP_DYN_BLANKED = '동적채널변경 시간 값을 입력하여 주십시오.';
var WIRELESSCONF_EXTENDSETUP_DYN_INVALID = '동적채널변경 시간 값은 1~100 사이로 입력하여 주십시오.';

var WIRELESSCONF_DISCONN_ALERT = '현재 무선으로 설정 페이지에 접속되어 있습니다.\n설정 변경 시, 무선 연결이 끊어질 수 있습니다.\n계속 진행하시겠습니까?';
var WIRELESSCONF_BASICSETUP_DFS_WARNING = '52 - 144 채널은 대한민국 전파법상 DFS채널입니다.\nDFS채널사용 시, 60초간의 활성화 시간이 필요하며,\nRadar간섭 검출 시, 자동으로 채널이 변경될 수 있습니다.';
var WIRELESSCONF_BASICSETUP_DFS_WARNING_160 = '채널 크기를 160MHz로 설정 시 DFS 채널을 사용하게 됩니다.\n60초간의 활성화 시간이 필요하며 Radar간섭 검출 시,\n자동으로 채널이 변경될 수 있습니다.';
var WIRELESSCONF_BANDSTEERING_WARNING = '밴드 스티어링을 지원하지 않는 일부 단말 기기에서는\n간혹 연결 오류가 발생할 수 있습니다.';

var WIRELESSCONF_DFS_SWITCHING = '채널 이동 중';
var WIRELESSCONF_DFS_SILENCE = '활성화 중';
var WIRELESSCONF_COUNTRY_REBOOT = '지역 변경 시 공유기 재부팅이 필요합니다.\n계속하시겠습니까?';
</script>
