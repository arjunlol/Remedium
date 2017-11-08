import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticleWrapper extends Component {
	render () {
		return (
			<Particles params={{
                                particles: {
                                    number: {
                                        value: 80
                                    },
                                    line_linked: {
                                        shadow: {
                                            enable: false,
                                            color: "#3CA9D1",
                                            blur: 20
                                        }
                                    }
                                }
                            }}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }} 
            />
		)
	}
}

export default ParticleWrapper;