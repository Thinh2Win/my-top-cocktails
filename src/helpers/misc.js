export function capitalizeString(string) {
	if (!string.length) return '';
	if (string === 'amf') return 'AMF';
	if (string.split(' ').length > 1) {
		return string.split(' ').map(substring => substring.charAt(0).toUpperCase() + substring.slice(1)).join(' ');
	} else {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}
