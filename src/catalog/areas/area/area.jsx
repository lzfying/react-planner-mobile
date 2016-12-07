import React from 'react';

export default {
  name: "area",
  prototype: "areas",

  info: {
    tag: ['area'],
    group: "Horizontal Closure",
    description: "Generic Room",
    image: ""
  },

  properties: {
    patternColor: {
      label: "Color",
      type: "color",
      defaultValue: "#f5f4f4"
    },
    texture: {
      label: "Floor",
      type: "enum",
      defaultValue: 'none',
      values: {
        'none': "Nessuna",
        'parquet': "Parquet",
        'tile1': "Tile 1",
      }
    }
  },

  render2D: function (element, layer, scene) {
    let path = "";
    let first = true;

    element.vertices.valueSeq()
      .map(vertexID => layer.vertices.get(vertexID))
      .forEach((vertex, vertexID) => {
        path += `${first ? 'M' : 'L'} ${vertex.x} ${vertex.y} `;
        first = false;
      });

    let fill = element.selected ? "#99c3fb" : element.properties.get('patternColor');

    return (<path d={path} fill={fill}/>);
  },
 render3D: function(){
    return {};
 }

};