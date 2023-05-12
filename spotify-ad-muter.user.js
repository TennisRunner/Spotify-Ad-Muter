// ==UserScript==
// @name     Spotify Ad Muter
// @version  1
// @include https://open.spotify.com/*
// @require https://code.jquery.com/jquery-3.6.0.js
// @require https://unpkg.com/kpg-util@1.0.4/bundle.js
// ==/UserScript==

$(document).ready(function()
{
	(async() =>
	{
		var setIt = false;

		while(true)
		{
			if($(`[data-testid="context-item-info-ad-title"]`).length > 0)
			{
				if($(`#volume-icon`).attr("aria-label") != "Volume off")
        {					
					setIt = true;
					$(`#volume-icon`).parent()[0].click();
				}
			}
			else
			{					
				if(setIt == true)
				{					
					setIt = false;
					$(`#volume-icon`).parent()[0].click();
				}
			}

			await sleep(100);
		}
	})();
});




