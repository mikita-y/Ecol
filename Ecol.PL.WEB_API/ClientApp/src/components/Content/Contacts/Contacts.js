import React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./Contacts.css"

export default function Contacts() {

    const style = {
        position:'relative',
        width: '70vw',
        height: '60vh'
    };

    const mapData = {
        center: [52.05374307205541,29.243666000000005],
        zoom: 17,
      };

    const mapData2 = {
        center: [53.05374307205541,30.243666000000005],
        zoom: 17,
    };
      
      const coordinates = [
        [52.05374307205541,29.243666000000005],
      ];
  
        return (
            <div className="contacts">
                <p>Hell</p>
                <YMaps className="map">
                    <Map style={style} defaultState={mapData} >
                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                    </Map>
                </YMaps>

                <YMaps className="map">
                    <Map style={style} defaultState={mapData2} >
                     <Placemark geometry={mapData2.center} />
                    </Map>
                </YMaps>
            </div>
        )
}


