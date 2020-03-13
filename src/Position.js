import React from "react";
import './Position.css';

export default class Position extends React.Component {
    propTypes = {
        "ActivityExplicit": false,
        "ActivityId": -99,
        "DumbDriving": false,
        "GpsTime": 999,
        "Heading": null,
        "InternalUniqueId": "15810625872816796013926636066",
        "Latitude": 999,
        "Longitude": 999,
        "PrevActivityExplicit": false,
        "PrevActivityId": -99,
        "Provider": "none",
        "SmartDriving": false,
        "Speed": 0,
        "Time": 999,
        "DurationSec": -1
    }

    render() {
        // if (this.props.Speed < 25) return '';
        const datetime = new Date(this.props.Time);
        const datetimeGps = new Date(this.props.GpsTime);
        const speedKmH = this.props.Speed * 3.6;

        return(
            <div className={'position'}>
                {/*{Object.keys(this.props).map(key => {*/}
                {/*    const prop = this.props[key];*/}
                {/*    return <span>{key}: y{prop}</span>*/}
                {/*})}*/}

                <span>{this.props.PrevActivityId} {this.props.PrevActivityExplicit ? 'Expl' : 'Auto'}
                -> {this.props.ActivityId} {this.props.ActivityExplicit ? 'Expl' : 'Auto'}</span>
                <span style={speedKmH > 5 ? {color:"red"}: {color:"gray"}}>{Math.round(speedKmH)} km/u</span>
                <span>{this.props.Time} - {datetime.toLocaleString()}</span>
                <span>{datetimeGps.toLocaleString()}</span>
                <span>{this.props.DurationSec} secs</span>
                <span>{this.props.Latitude},{this.props.Longitude}</span>
            </div>
        )
    }
}

export const Header = (props) => {
    return <div>
        <span>Activiteit</span>
        <span>Speed</span>
        <span>Time</span>
        <span>GpsTime</span>
        <span>Duration</span>
        <span>GPS</span>
    </div>
}