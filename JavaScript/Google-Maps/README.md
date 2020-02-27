# Google Maps [Ln of Parse]

- [Start](#start)
  - [Initialize](#initialize)
  - [Options](#options)
  - [Setter](#setter)
  - [Getter](#getter)
- [Marker](#marker)
  - [Initialize](#initialize-1)
  - [Options](#options-1)
  - [Install](#install)
  - [Remove](#remove)
  - [Animate](#animate)
  - [Customize](#customize)
    - [Labels](#labels)
    - [Icons](#icons)
    - [Symbols](#symbols)
  - [Draggable](#draggable)
- [Info Window](#info-window)
  - [Initialize](#initialize-2)
  - [Options](#options-2)
  - [Open](#open)
  - [Close](#close)
- [Events](#events)
  - [Install](#install-1)
- [Types](#types)
- [Referecnes](#referecnes)

## Start

### Initialize

```js
const map = new google.maps.Map(el, options);
```

### Options

```json
{
  "zoom": Number, //必须 缩放级别
  "center": {
    "lat": Number, //纬度
    "lng": Number //经度
  }, //必须 地图中心
  "mapTypeId": MapTypeId, //必须 地图类型
  /**
   * google.maps.MapTypeId.HYBRID 默认的道路地图视图
   * google.maps.MapTypeId.SATELLITE Google 地球卫星图片
   * google.maps.MapTypeId.HYBRID 同时显示普通视图和卫星视图
   * google.maps.MapTypeId.TERRAIN 根据地形信息显示实际地图
   */
  "backgroundColor": String, //背景颜色
  "disableDefaultUI": Boolean, //启用/禁用所有默认控件
  "disableDoubleClickZoom": Boolean, //双击时启用/禁用缩放并居中。
  "draggable": Boolean, //当设置为 False 时，阻止地图被拖拽。默认是 True。
  "draggableCursor": String, //规定要显示在可拖拽对象上的光标的名称/URL。
  "draggingCursor": String, //规定当对象被拖拽时要显示的光标的名称/URL。
  "heading": Number, //规定航拍图像的航向度数。
  "keyboardShortcuts": Boolean, //当设置为 False 时，阻止地图被键盘控制。默认是 True。
  "mapMaker": Boolean, //如果要使用 Map Maker 图块代替常规图块，则设置为 True。
  "mapTypeControl": Boolean, //规定 Map 类型控件的默认启用/禁用状态。
  "mapTypeControlOptions": MapTypeControlOptions, //Map 类型控件的默认显示选项。
  "maxZoom": Number, //地图的最大缩放级别。
  "minZoom": Number, //地图的最小缩放级别。
  "noClear": Boolean, //如果设置为 True，则不清空 Map <div> 的内容。
  "overviewMapControl": Boolean, //Overview Map 控件的启用/禁用状态。
  "overviewMapControlOptions": OverviewMapControlOptions, //Overview Map 控件的显示选项。
  "panControl": Boolean, //Pan 控件的启用/禁用状态。
  "panControlOptions": PanControlOptions, //Pan 控件的显示选项。
  "rotateControl": Boolean, //Rotate 控件的启用/禁用状态。
  "rotateControlOptions": RotateControlOptions, //Rotate 控件的显示选项。
  "scaleControl": Boolean, //Scale 控件的默认启用/禁用状态。
  "scaleControlOptions": ScaleControlOptions, //Scale 控件的默认显示选项。
  "scrollwheel": Boolean, //当设置为 False 时，禁用地图上的滚轮缩放。默认是 True。
  "streetView": StreetViewPanorama, //当地图上的 Street View pegman 街景人形图标被投下时，要显示的 StreetViewPanorama。
  "streetViewControl": Boolean, //Street View Pegman 控件的默认启用/禁用状态。
  "streetViewControlOptions": StreetViewControlOptions, //Street View Pegman 控件的默认显示选项。
  "styles": [
    {
      "featureType": String,
      "elementType": String,
      "stylers": [
        {
          "color": RGB
        }
      ]
    }
  ], //要应用到每个默认地图类型的样式。
  "tilt": Number, //从视口平面到地图平面的地图的入射角，以度为单位进行测量（0 和 45）。
  "zoom": Number, //必需。默认的 Map 缩放级别。
  "zoomControl": Boolean, //Zoom 控件的启用/禁用状态。
  "zoomControlOptions": ZoomControlOptions //Zoom 控件的显示选项。
}
```

### Setter

- map.setMapTypeId(type) 设置地图类型
  - google.maps.MapTypeId.HYBRID 一种带公路和城市名称的照相地图。
  - google.maps.MapTypeId.ROADMAP 一种标准的，默认是 2D 的地图。
  - google.maps.MapTypeId.SATELLITE 一种照相地图。
  - google.maps.MapTypeId.TERRAIN 一种带有山脉、河流等的地图。

### Getter

- map.getMapTypeId() 返回当前地图类型
  - HYBRID 一种带公路和城市名称的照相地图。
  - ROADMAP 一种标准的，默认是 2D 的地图。
  - SATELLITE 一种照相地图。
  - TERRAIN 一种带有山脉、河流等的地图。
- map.getZoom() 返回地图的当前缩放级别
- map.getHeading() 返回航拍图像的罗盘航向
- map.getDiv() 返回包含地图的 DOM 对象
- map.getCenter() 返回地图的当前中心的纬度/经度
- map.getBounds() 返回当前视口的西南纬度/经度和东北纬度/经度

## Marker

### Initialize

```js
const marker = new google.maps.Marker(options);
```

### Options

```json
{
  "position": "",
  "map": "",
  "title": "",
  "animation": "",
  "position": "",
  "icon": ""
}
```

### Install

```js
marker.setMap(map);
```

### Remove

```js
marker.setMap(null);
```

### Animate

```js
marker.addListener(events, callback);
```

### Customize

#### Labels

#### Icons

#### Symbols

### Draggable

## Info Window

### Initialize

```js
const infowindow = new google.maps.InfoWindow(options);
```

### Options

```json
{
  "content": "", //contains either a string of text or a DOM node to display in the info window.
  "pixelOffset": "", //contains an offset from the tip of the info window to the location on which the info window is anchored. In practice, you should not need to specify this field. You can leave it at the default value.
  "position": "", //contains the LatLng at which this info window is anchored. Note: An InfoWindow may be attached either to a Marker object (in which case its position is based on the marker's location) or on the map itself at a specified LatLng. One way of retrieving a LatLng is by using the Geocoding service. Opening an info window on a marker will automatically update the position.
  "maxWidth": "" //pecifies the maximum width of the info window in pixels. By default, an info window expands to fit its content, and auto-wraps text if the info window fills the map. If you add a maxWidth the info window will auto-wrap to enforce the specified width. If it reaches the maximum width and there is vertical room on the screen, the info window may expand vertically.
}
```

### Open

```js
infowindow.open(map, marker);
```

### Close

```js
infowindow.close();
```

## Events

### Install

```js
google.maps.event.addListener(el, events, callback);
```

## Types

## Referecnes

- [Maps JavaScript API | Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial)
- [Style Reference | Ln of Parse](./docs/reference/Style.md)

<title>Google Maps Helper</title>
