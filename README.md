# leaflet加载wmts图层 
 
 [在线Demo](http://leaflet.marsgis.cn/leaflet-example/13_layer_wmts.html) 


```javascript

 L.tileLayer.wmts("http://www.ais.msa.gov.cn/MapService",{  
	"layer": "default",
	"style": "default",
	"format": "image/png",
	"tilematrixSet": "advsea" //高级海图 advsea ,基础海陆混合 basicsearoad ,高级海陆混合 advsearoad
}).addTo(map);


```




## 其他
更多Leaflet示例请点击： [http://leaflet.marsgis.cn](http://leaflet.marsgis.cn)
