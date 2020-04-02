import React from 'react';
import Position, {Header} from "./Position";
import positions from "./roemaat_edwin_20200401"

export default class Positions extends React.Component {
    state = {
        positions: positions
    }

    render() {
        return (
            <div>
                <Header />
                <div className={'positions'}>
                    {this.state.positions.map((position, index, array) => {
                            const duration = index !== 0 ? position.Time - array[index - 1].Time : 0;
                            return <Position
                                key={position.InternalUniqueId}
                                DurationSec={duration / 1000}
                                {...position}
                            />
                        }
                    )}
                </div>
            </div>
        )
    }
}