import ReactPixel from 'react-facebook-pixel';

export const initializeFacebookPixel = () => {
    const pixelId = '360127443821372';
    ReactPixel.init(pixelId);
    ReactPixel.pageView();
}

export const trackEvent = (event) => {
    ReactPixel.track(event);
}