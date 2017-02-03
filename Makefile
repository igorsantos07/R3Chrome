default:
	rm -f r3chrome.zip
	zip -r r3chrome.zip -x.git* -x.idea/* -xMakefile .
