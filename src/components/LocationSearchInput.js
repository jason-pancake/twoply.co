import React from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="relative">
            <input
              {...getInputProps({
                placeholder: 'Street address, city, state',
                className: suggestions.length > 0 ? 'border-2 w-full p-4 rounded-lg outline-none rounded-b-none' : 'border-2 w-full p-4 rounded-lg outline-none',
              })}
            />
            {suggestions.length > 0 &&
            <div className="absolute w-full bg-white border-2 rounded-lg shadow-md border-t-0 border-b-0 rounded-t-none">
              {loading && <div className="bg-red-500">Loading...</div>}
              {suggestions.map((suggestion,index) => {
                let className = suggestion.active
                  ? 'suggestion-item--active bg-blue-200 p-4 border-b-2'
                  : 'suggestion-item p-4 border-b-2';

                if(index === suggestions.length - 1) {
                  className += ' rounded-b-lg';
                }

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
            }
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput