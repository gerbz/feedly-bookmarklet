javascript: void(el = document.getElementsByTagName('link'));
void(g = false);
for (i = 0; i < el.length; i++) {
	if(r = el[i].getAttribute('rel')){
		if (r.indexOf('alternate') != -1) {

			if(t = el[i].getAttribute('type')){
				if(t.indexOf('rss') != -1) {

					if(h = el[i].getAttribute('href')){
						if (h.indexOf('comment') == -1) {

							if(t = el[i].getAttribute('title')){

								t = t.toLowerCase();
								if (t.indexOf('comment') == -1) {

									g = true;
									break;

								}

							}else{

								g = true;
								break;

							}
						}
					}
				}
			}
		}
	}
};
if (!g) {
	window.alert('Could not find the RSS Feed');
}else{
	void(window.location.href = 'http://www.feedly.com/home#subscription/feed/' + h);
}