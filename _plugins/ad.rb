module Jekyll
  module GoogleAdenseFilter
    def put_ads_before_title(html)
      ad_code =
'
   <!-- EthereumAds -->
   <div id="EthereumAds-linuxcodevblog"></div>
   <script src="https://ethereumads.com/adviewer.js">
   </script>
   <script>
       EthereumAds.initAdSlot({
           acceptedCurrencies: ["ALL"], // option ALL for all whitelisted tokens, ETH for Ethereum, DAI for DAI Stablecoin
           //validatorEndpoint:"", // optional custom validator
           mediaType: "image_1280x720",
           fallback: "default", // default, none, custom url
           slot: "linuxcodevblog",
           address: "0xd404f198c4f580727eb11cd69b581d5f10c7efd9",
           platform: "",
           affiliate: "",
           keywords:"", //comma separatedy
           adult: false,
           version: "1.00"
       });
       /*
        for responsive ads add and adjust this according to your needs:
        responsive: [
            { mediaType: "image_728x90", minWidth: 728 },
            { mediaType: "image_300x600" }
        ],
       */
   </script>
   <!-- /EthereumAds -->   
   
'
     
      first_h2 = html.match(/<h2.*?>/)
      return html unless first_h2

      html.sub(/<h2.*?>/, ad_code + first_h2.to_s)
    end
  end
end

Liquid::Template.register_filter(Jekyll::EtheriumAdsFilter)
