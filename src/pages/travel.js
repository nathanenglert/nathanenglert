import React from 'react';
import Mapbox from 'mapbox-gl';

import Navbar from '../components/navbar';
import Layout from '../components/layout';
import HotelIcon from '../images/location.png';

class Travel extends React.Component {
    componentDidMount() {
        Mapbox.accessToken =
            'pk.eyJ1IjoibmF0aGFuZW5nbGVydCIsImEiOiJjaW92aXgxdGQwMWJ5dWZtNHNvbHVmYjV2In0.q_4bcRTqByVCpcBz9PEfSQ';
        var map = new Mapbox.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            zoom: 2
        });

        var geojson = [[-86.8511, 20.901276]];

        // add markers to map
        geojson.forEach(function(marker) {
            // create a DOM element for the marker
            var el = document.createElement('img');
            el.className = 'marker';
            el.src = HotelIcon;
            el.style.width = '32px';
            el.style.height = '32px';
            el.style.marginTop = '-16px';

            el.addEventListener('click', function() {
                window.alert('test');
            });

            // add marker to map
            new Mapbox.Marker(el).setLngLat(marker).addTo(map);
        });
    }

    render() {
        return (
            <Layout>
                <Navbar className="has-background-light" />
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div> */}
                <div id="map" style={{ height: '90vh' }} />
            </Layout>
        );
    }
}

export default Travel;
