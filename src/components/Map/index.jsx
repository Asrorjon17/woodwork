import React from "react";
import ReactDOM from "react-dom";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";

class MapTest extends React.Component {
	constructor() {
		super();
		this.state = {
			isMarkerShown: false,
			markerPosition: null,
		};
	}
	onMapClick = (e) =>
		this.setState({
			markerPosition: { lat: 4.4360051, lng: -75.2076636 },
			isMarkerShown: true,
		});

	Map = withScriptjs(
		withGoogleMap((props) => (
			<GoogleMap
				defaultZoom={12}
				center={{ lat: 4.4360051, lng: -75.2076636 }}
				onClick={props.onClick}
			>
				{props.children}
			</GoogleMap>
		))
	);

	render() {
		return (
			<this.Map {...this.props} onClick={this.onMapClick}>
				{this.state.isMarkerShown && (
					<Marker position={this.state.markerPosition} />
				)}
			</this.Map>
		);
	}
}

class Appa extends React.Component {
	render() {
		return (
			<div className="App">
				<MapTest
					googleMapURL="https://maps.googleapis.com/maps/api/js"
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ width: "100%", height: `312px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}
export default Appa;
