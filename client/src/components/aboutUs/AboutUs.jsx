import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';
export default function AboutUs() {
    const mapRef = useRef(null);
    const [lat, setLat] = useState(47.613547);
    const [lng, setLng] = useState(-122.331301);

    useEffect(() => {
        const loadMap = () => {
            if (mapRef.current) {
                const map = new window.google.maps.Map(mapRef.current, {
                    center: { lat, lng },
                    zoom: 17,
                });

                new window.google.maps.Marker({
                    position: { lat, lng },
                    map,
                });
            }
        };

        if (window.google && window.google.maps) {
            loadMap();
        } else {
            window.initMap = loadMap;
        }
    }, [lat, lng]);

    return (
        <div className='about-us'>
            <h1>The Horror Cinema and Theater</h1>
            <div className='about-us-content'>
                <p>Welcome to The Horror Cinema and Theater, where we bring the best of horror entertainment to life. Our theater is dedicated to showcasing the most thrilling and chilling horror films from around the world.</p>
                <p>Founded in 2023, we have quickly become a favorite destination for horror enthusiasts. Our state-of-the-art facilities and immersive experiences ensure that every visit is unforgettable.</p>
                <p><strong>Address:</strong> 911 Pine St, Seattle, WA 98101</p>
            </div>
            <div className='map-container'>
                <div ref={mapRef} style={{width: '1200px', height: '400px'}} />
            </div>
        </div>
    )
}