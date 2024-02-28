var wms_layers = [];

var format_AttanagallaMains_0 = new ol.format.GeoJSON();
var features_AttanagallaMains_0 = format_AttanagallaMains_0.readFeatures(json_AttanagallaMains_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AttanagallaMains_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AttanagallaMains_0.addFeatures(features_AttanagallaMains_0);
var lyr_AttanagallaMains_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AttanagallaMains_0, 
                style: style_AttanagallaMains_0,
                interactive: true,
    title: 'AttanagallaMains<br />\
    <img src="styles/legend/AttanagallaMains_0_0.png" /> Dist<br />\
    <img src="styles/legend/AttanagallaMains_0_1.png" /> Serv<br />\
    <img src="styles/legend/AttanagallaMains_0_2.png" /> Tran<br />'
        });

lyr_AttanagallaMains_0.setVisible(true);
var layersList = [lyr_AttanagallaMains_0];
lyr_AttanagallaMains_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'StUtilityI': 'StUtilityI', 'EnUtilityI': 'EnUtilityI', 'RoadID': 'RoadID', 'Laid_On': 'Laid_On', 'LifeCycle': 'LifeCycle', 'Hyperlink': 'Hyperlink', 'Material': 'Material', 'InnerDiame': 'InnerDiame', 'OuterDiame': 'OuterDiame', 'Type': 'Type', 'Status': 'Status', 'Remarks': 'Remarks', 'DN': 'DN', 'DSource': 'DSource', 'Enabled': 'Enabled', 'DMA_NO': 'DMA_NO', 'Shape_Leng': 'Shape_Leng', 'DRG_NO': 'DRG_NO', 'Road_Name': 'Road_Name', 'Contractor': 'Contractor', 'Type_of_pi': 'Type_of_pi', });
lyr_AttanagallaMains_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'StUtilityI': 'TextEdit', 'EnUtilityI': 'TextEdit', 'RoadID': 'TextEdit', 'Laid_On': 'Hidden', 'LifeCycle': 'TextEdit', 'Hyperlink': 'TextEdit', 'Material': 'TextEdit', 'InnerDiame': 'TextEdit', 'OuterDiame': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', 'Remarks': 'TextEdit', 'DN': 'TextEdit', 'DSource': 'TextEdit', 'Enabled': 'Range', 'DMA_NO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'DRG_NO': 'TextEdit', 'Road_Name': 'TextEdit', 'Contractor': 'TextEdit', 'Type_of_pi': 'TextEdit', });
lyr_AttanagallaMains_0.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'StUtilityI': 'no label', 'EnUtilityI': 'no label', 'RoadID': 'no label', 'LifeCycle': 'no label', 'Hyperlink': 'no label', 'Material': 'inline label - always visible', 'InnerDiame': 'no label', 'OuterDiame': 'hidden field', 'Type': 'no label', 'Status': 'no label', 'Remarks': 'no label', 'DN': 'inline label - always visible', 'DSource': 'no label', 'Enabled': 'no label', 'DMA_NO': 'no label', 'Shape_Leng': 'no label', 'DRG_NO': 'no label', 'Road_Name': 'inline label - always visible', 'Contractor': 'no label', 'Type_of_pi': 'no label', });
lyr_AttanagallaMains_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});