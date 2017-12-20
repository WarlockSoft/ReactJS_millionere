import React, { Component } from 'react';
import './App.css';


class Stages extends Component {

    render() {

        return (
            <div className="LeftSide">
                <div className="Logo"></div>
                <div className="Stages">
                    <div id="15"><span>15.</span> 3 000 000</div>
                    <div id="14"><span>14.</span> 1 500 000</div>
                    <div id="13"><span>13.</span> 800 000</div>
                    <div id="12"><span>12.</span> 400 000</div>
                    <div id="11"><span>11.</span> 200 000</div>
                    <div id="10"><span>10.</span> 100 000</div>
                    <div id="9"><span>9.</span> 50 000</div>
                    <div id="8"><span>8.</span> 25 000</div>
                    <div id="7"><span>7.</span> 15 000</div>
                    <div id="6"><span>6.</span> 10 000</div>
                    <div id="5"><span>5.</span> 5 000</div>
                    <div id="4"><span>4.</span> 3 000</div>
                    <div id="3"><span>3.</span> 2 000</div>
                    <div id="2"><span>2.</span> 1 000</div>
                    <div id="1"><span>1.</span> 500</div>
                </div>
            </div>
        );
    }
}

export default Stages;