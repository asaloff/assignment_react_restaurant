import React from 'react';

const Reservations = () => {
  const times = [];
  for (let i = 10; i < 24; i++) {
    times.push(<option value={ i + ':00' }>{ i + ':00' }</option>);
    times.push(<option value={ i + ':15' }>{ i + ':15' }</option>);
    times.push(<option value={ i + ':30' }>{ i + ':30' }</option>);
    times.push(<option value={ i + ':45' }>{ i + ':45' }</option>);
  }

  const people = [];
  for (let i = 1; i < 21; i++) {
    people.push(<option value={i}>{i}</option>);
  }

  return (
    <div className="Reservations" id="reservations">
      <h2 className="text-center">Reservations</h2>
      <div className="col-md-6 col-md-offset-3 well">
        <form className="form">
          <div className="form-group">
            <label htmlFor="date"><i className="glyphicon glyphicon-calendar" aria-hidden="true"></i> Date</label>
            <input type="date" name="date" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="time"><i className="glyphicon glyphicon-time" aria-hidden="true"></i> Time</label>
            <select name="time" id="time" className="form-control">
              {times}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="people-amount"><i className="glyphicon glyphicon-user" aria-hidden="true"></i> Amount of People</label>
            <select name="people-amount" id="people-amount" className="form-control">
              {people}
            </select>
          </div>
          <button className="btn btn-default">Find A Table</button>
        </form>
      </div>
    </div>
  );
};

export default Reservations;
