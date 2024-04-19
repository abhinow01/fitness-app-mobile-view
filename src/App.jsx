import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrackYourGoal from './TrackYourGoal';
import GetBurn from './GetBurn';
import CreateAccount from './CreateAccount';
import WelcomeBack from './WelcomeBack';
import GoalSelection from './GoalSelection';
import WorkoutTracker from './WorkoutTracker';
import WorkoutSchedule from './WorkoutSchedule';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrackYourGoal />} />
        <Route path="/get-burn" element={<GetBurn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/welcome-back" element={<WelcomeBack />} />
        <Route path="/goal-selection" element={<GoalSelection />} />
        <Route path="/workout-tracker" element={<WorkoutTracker/>} />
        <Route path="/workout-schedule" element={<WorkoutSchedule/>} />

      </Routes>
    </Router>
  );
};

export default App;
