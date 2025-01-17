import axios from 'axios';
import { showAlert } from './alerts';
// const stripe = require('stripe');

// const stripe = Stripe(
//   'pk_test_51Qhx74GAdcM8mJBjTJkBhmnzUoatGrI8RE4J51X4lG7QYHR9MpPPSWoHqixQDDQnJ5K1oHBRWe8YtETzb8ew3jg500KEM2ytPm'
// );

export const bookTour = async (tourId) => {
  try {
    //  Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    window.location.replace(session.data.session.url);
  } catch (err) {
    showAlert('error', err);
  }
};
