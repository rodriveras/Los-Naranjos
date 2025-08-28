var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_satelite_1 = new ol.layer.Tile({
            'title': 'satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Vendidas_2 = new ol.format.GeoJSON();
var features_Vendidas_2 = format_Vendidas_2.readFeatures(json_Vendidas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vendidas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vendidas_2.addFeatures(features_Vendidas_2);
var lyr_Vendidas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vendidas_2, 
                style: style_Vendidas_2,
                popuplayertitle: 'Vendidas',
                interactive: false,
                title: '<img src="styles/legend/Vendidas_2.png" /> Vendidas'
            });
var format_Disponibles_3 = new ol.format.GeoJSON();
var features_Disponibles_3 = format_Disponibles_3.readFeatures(json_Disponibles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disponibles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disponibles_3.addFeatures(features_Disponibles_3);
var lyr_Disponibles_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Disponibles_3, 
                style: style_Disponibles_3,
                popuplayertitle: 'Disponibles',
                interactive: true,
                title: '<img src="styles/legend/Disponibles_3.png" /> Disponibles'
            });
var format_CaminodeAcceso_4 = new ol.format.GeoJSON();
var features_CaminodeAcceso_4 = format_CaminodeAcceso_4.readFeatures(json_CaminodeAcceso_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaminodeAcceso_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminodeAcceso_4.addFeatures(features_CaminodeAcceso_4);
var lyr_CaminodeAcceso_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaminodeAcceso_4, 
                style: style_CaminodeAcceso_4,
                popuplayertitle: 'Camino de Acceso',
                interactive: false,
                title: '<img src="styles/legend/CaminodeAcceso_4.png" /> Camino de Acceso'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_satelite_1.setVisible(true);lyr_Vendidas_2.setVisible(true);lyr_Disponibles_3.setVisible(true);lyr_CaminodeAcceso_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_satelite_1,lyr_Vendidas_2,lyr_Disponibles_3,lyr_CaminodeAcceso_4];
lyr_Vendidas_2.set('fieldAliases', {'Lote': 'Lote', 'Hectareas': 'Hectareas', 'Estado': 'Estado', });
lyr_Disponibles_3.set('fieldAliases', {'Lote': 'Lote', 'Hectareas': 'Hectareas', 'Estado': 'Estado', 'Precio': 'Precio', });
lyr_CaminodeAcceso_4.set('fieldAliases', {'REGION': 'REGION', 'COMUNA': 'COMUNA', 'NOM_COMUNA': 'NOM_COMUNA', 'NOMBRE_VIA': 'NOMBRE_VIA', 'CLASE_COMU': 'CLASE_COMU', 'CLASE_URBA': 'CLASE_URBA', 'Shape_Leng': 'Shape_Leng', 'Longitud': 'Longitud', });
lyr_Vendidas_2.set('fieldImages', {'Lote': 'TextEdit', 'Hectareas': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Disponibles_3.set('fieldImages', {'Lote': 'TextEdit', 'Hectareas': 'TextEdit', 'Estado': 'TextEdit', 'Precio': 'TextEdit', });
lyr_CaminodeAcceso_4.set('fieldImages', {'REGION': 'TextEdit', 'COMUNA': 'TextEdit', 'NOM_COMUNA': 'TextEdit', 'NOMBRE_VIA': 'TextEdit', 'CLASE_COMU': 'TextEdit', 'CLASE_URBA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Vendidas_2.set('fieldLabels', {'Lote': 'inline label - always visible', 'Hectareas': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Precio': 'no label', });
lyr_Disponibles_3.set('fieldLabels', {'Lote': 'inline label - always visible', 'Hectareas': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Precio': 'inline label - always visible', });
lyr_CaminodeAcceso_4.set('fieldLabels', {'REGION': 'no label', 'COMUNA': 'no label', 'NOM_COMUNA': 'no label', 'NOMBRE_VIA': 'no label', 'CLASE_COMU': 'no label', 'CLASE_URBA': 'no label', 'Shape_Leng': 'no label', 'Longitud': 'no label', });
lyr_CaminodeAcceso_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});