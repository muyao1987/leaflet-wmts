#leaflet加载wmts图层


- leaflet加载wmts图层 [example](http://www.marsgis.cn/leaflet/leaflet-example/editor.html#13_layer_wmts):
```javascript

 L.tileLayer.wmts("http://srv{s}.zjditu.cn/ZJEMAP_2D/wmts",{ 
	subdomains: "0123456",
	layer: "TDT_ZJEMAP",
	style: "default",
	tilematrixSet: "TileMatrixSet0",
	format: "image/png",
	zOffset:1
}).addTo(map);

```

---------------------------
更多Leaflet示例请点击： [http://leaflet.marsgis.cn](http://leaflet.marsgis.cn)
三维地图请点击： [http://cesium.marsgis.cn](http://cesium.marsgis.cn)