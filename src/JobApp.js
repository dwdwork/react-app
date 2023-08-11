import React, { useEffect, useState } from 'react';
import './css/JobApp.css';

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api-american-football.p.rapidapi.com/players/statistics',
  params: {
    season: '2022',
    id: '1'
  },
  headers: {
    'X-RapidAPI-Key': 'da99e3fdc2msh758b1c38a83fdafp139db3jsn6ec58dd6378c',
    'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.response[0].teams[0].groups[0]);
} catch (error) {
	console.error(error);
}

// Users array
const users = [
    {
        id: 1,
        name: 'Employee #1',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: null,
        customerId: 1,
    },
    {
        id: 2,
        name: 'Employee #2',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: null,
        customerId: 1,
    },
];

// Plans array
const plan = {
    id: 1,
    customerId: 1,
    monthlyPriceInCents: 5000,
}

/*******************
* Helper functions *
*******************/

function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

function lastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function nextDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}

/*******************
* monthlyCharge Function *
*******************/

function monthlyCharge(month, subscription, users) {
    
    const calculateCharge = () => {
        // Initialize variables
        const startDate = firstDayOfMonth(new Date(month));
        const endDate = lastDayOfMonth(new Date(month));
        let totalCharge = 0;

        // If no subscription or users, exit
        if (!subscription || users.length === 0) {
            return 0;
        }

        // Loop through users to start action
        for (const user of users) {
            // Validate user was active first
            if (user.activatedOn <= endDate && (!user.deactivatedOn || user.deactivatedOn >= startDate)) {
                // Account for prorated rates
                const daysActive = Math.min((user.deactivatedOn || endDate) - (user.activatedOn < startDate ? startDate : user.activatedOn), endDate - startDate);
                // Calculate charge per user
                const userCharge = subscription.monthlyPriceInCents * (daysActive / (endDate - startDate + 1));
                // Calculate total 
                totalCharge += userCharge;
            }
        }

        // Rounded to the nearest cent
        return Math.round(totalCharge);
    }

    const monthlyCharge = calculateCharge();

    return (
        <div>
        <h1>Monthly Charge</h1>
        <p>{`Month: ${month}`}</p>
        <p>{`Subscription: ${subscription ? subscription.id : 'None'}`}</p>
        <p>{`Total Monthly Charge: ${calculateCharge / 100} USD`}</p>
        </div>
    );
}

function JobApp() {

    // Define the sayHello function with a name
    const sayHello = name => {
    if (name) {
        return 'Hello, ' + name + '!';
    } else {
        return 'Hello there!';
    }
    };

    useEffect(() => {
        sayHello();
    });

  return (
    <div className="JobApp">
      <header className="JobApp-header">
        <h1>Start Job Application Test</h1>
      </header>
      <main>
        <p>Here's where I render everything!</p>
      </main>
    </div>
  );
}

// export default monthlyCharge;