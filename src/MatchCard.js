import React from 'react';
import './App.css';
import Flag from './Flag.js';
import Moment from 'react-moment';
import ReactStars from 'react-stars'

function MatchCard(props) {
    var moment = require('moment-timezone');

    return (
        <React.Fragment>
            <div className="MatchCardInfo">
                <p className="MatchCardNumber">Match #{props.MatchNumber}</p>
                <p className="MatchCardGroup">{props.Group}</p>
            </div>
            <div className="MatchTeams">
                <div className="MatchHomeTeam">
                    <Flag country={props.HomeTeam} />
                    <p className="MatchCardTeamName">{props.HomeTeam}</p>
                </div>
                <div className="MatchAwayTeam">
                    <Flag country={props.AwayTeam} />
                    <p className="MatchCardTeamName">{props.AwayTeam}</p>
                </div>
            </div>
            <p className="MatchCardAttribute">Date</p>
            <p className="MatchCardDate">
                <Moment format="MMMM Do">{props.Date}</Moment> at {moment(props.Date).tz("America/New_York").format("ha z")}
            </p>
            <p className="MatchCardAttribute">Location</p>
            <p className="MatchCardLocation">{props.Location}</p>
            <p className="MatchCardAttribute">Rating</p>
            <div className="MatchCardRating">
                <ReactStars
                    count={5}
                    value={props.Rating}
                    size={24}
                    edit={false}
                    color2={'#ffd700'} />
            </div>
        </React.Fragment>
    );
}

export default MatchCard;
