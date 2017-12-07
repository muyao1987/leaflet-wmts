﻿/** 
 * WMTS服务调用插件
 * @author 木遥原创(qq:346819890) 
 */
L.TileLayer.WMTS = L.TileLayer.extend({
    options: {
        version: '1.0.0',
        style: 'default',
        tilematrixSet: '',
        format: 'image/png',
        tileSize: 256,
        matrixIds: null,
        layer: '',
    },
    //todo 自动获取Capabilities
    initialize: function (url, options) { // (String, Object)
        this._url = url;
        L.setOptions(this, options);
    },
    getTileUrl: function (coords) { // (Point, Number) -> String
        var zoom = this._getZoomForUrl();
        if (this.options.zOffset)
            zoom = zoom + this.options.zOffset;

        var ident = this.options.matrixIds ? this.options.matrixIds[zoom].identifier : zoom;
        var url = L.Util.template(this._url, { s: this._getSubdomain(coords) });
        var obj = {
            service: 'WMTS',
            request: 'GetTile',
            version: this.options.version,
            style: this.options.style,
            tilematrixSet: this.options.tilematrixSet,
            format: this.options.format,
            width: this.options.tileSize,
            height: this.options.tileSize,
            layer: this.options.layer,
            tilematrix: ident,
            tilerow: coords.y,
            tilecol: coords.x
        };
        return url + L.Util.getParamString(obj, url);
    }
});

L.tileLayer.wmts = function (url, options) {
    return new L.TileLayer.WMTS(url, options);
};

