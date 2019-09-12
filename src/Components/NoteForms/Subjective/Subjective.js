import React, { Component } from 'react';

export default class Subjective extends Component {
    state = {

    };
    render() {
        return (
            <div>
                <h1>Subjective</h1>
                <span>Pain: </span>
                <select>
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                <span>Mood: </span>
                <input type='text' />
                <span>Orientation: </span>
                <select>
                    <option></option>
                    <option>Time</option>
                    <option>Place</option>
                    <option>Person</option>
                    <option>All</option>
                    <option>None</option>
                </select>
                <span>Additional information: </span>
                <input type='text' />
            </div>
        )
    };
};
