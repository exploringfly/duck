
var map = new BMap.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMap.Point(result[0].longitude, result[0].latitude), 16);  // 初始化地图,设置中心点坐标和地图级别
map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
//map.setCurrentCity("浙江");          // 设置地图显示的城市 此项是必须设置的
var myIcon = new BMap.Icon("${context.ctx!}/resource/img/markers.png", new BMap.Size(23, 25), {
    // 指定定位位置
    offset: new BMap.Size(10, 25),
    // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置
    imageOffset: new BMap.Size(0, 0 - 11 * 25) // 设置图片偏移
});

var point = new BMap.Point(result[0].longitude, result[0].latitude);
// 创建标注对象并添加到地图
var marker = new BMap.Marker(point,{icon: myIcon});

map.addOverlay(marker);
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放