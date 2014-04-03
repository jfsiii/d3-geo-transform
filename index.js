(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        d3.geo = {};
        var d3_arraySlice = [].slice, d3_array = function(list) {
            return d3_arraySlice.call(list);
        };
        d3.geo.transform = function(methods) {
            return {
                stream: function(stream) {
                    var transform = new d3_geo_transform(stream);
                    for (var k in methods) transform[k] = methods[k];
                    return transform;
                }
            };
        };
        function d3_geo_transform(stream) {
            this.stream = stream;
        }
        d3_geo_transform.prototype = {
            point: function(x, y) {
                this.stream.point(x, y);
            },
            sphere: function() {
                this.stream.sphere();
            },
            lineStart: function() {
                this.stream.lineStart();
            },
            lineEnd: function() {
                this.stream.lineEnd();
            },
            polygonStart: function() {
                this.stream.polygonStart();
            },
            polygonEnd: function() {
                this.stream.polygonEnd();
            }
        };
        function d3_geo_transformPoint(stream, point) {
            return {
                point: point,
                sphere: function() {
                    stream.sphere();
                },
                lineStart: function() {
                    stream.lineStart();
                },
                lineEnd: function() {
                    stream.lineEnd();
                },
                polygonStart: function() {
                    stream.polygonStart();
                },
                polygonEnd: function() {
                    stream.polygonEnd();
                }
            };
        }
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();