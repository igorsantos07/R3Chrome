document.addEventListener('DOMContentLoaded', function() {
	var num1	= document.getElementById('num1'),
		num2	= document.getElementById('num2'),
		num3	= document.getElementById('num3'),
		result	= document.getElementById('result'),
		calc = function() {
			result.value = (num2.value * num3.value) / num1.value
		}

	num1.addEventListener('change', calc)
	num2.addEventListener('change', calc)
	num3.addEventListener('change', calc)
	result.addEventListener('change', calc)
})
