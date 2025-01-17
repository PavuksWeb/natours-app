import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    //  Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    window.location.replace(session.data.session.url);
  } catch (err) {
    showAlert('error', err);
  }
};
