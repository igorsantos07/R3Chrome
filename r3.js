document.addEventListener('DOMContentLoaded', function() {
	var title = chrome && chrome.i18n && chrome.i18n.getMessage('title') || 'Regra de três'
	document.getElementsByTagName('title')[0].innerHTML = title
	document.getElementsByTagName('legend')[0].innerHTML = title

	var num1	= document.getElementById('num1'),
		num2	= document.getElementById('num2'),
		num3	= document.getElementById('num3'),
		result	= document.getElementById('result'),
		calc = function() {
			if (num1.value !== '' && num2.value !== '' && num3.value !== '') {
				result.value = (num2.value * num3.value) / num1.value
				if (isNaN(result.value)) {
					result.value = ''
				}
			}
		}

	num1.addEventListener('keyup', calc)
	num2.addEventListener('keyup', calc)
	num3.addEventListener('keyup', calc)
})


