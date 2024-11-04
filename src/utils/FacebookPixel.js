import ReactPixel from 'react-facebook-pixel';

export const initializeFacebookPixel = () => {
    const pixelId = '474043248721385';
    ReactPixel.init(pixelId);
    ReactPixel.pageView();
}

export const trackEvent = (event) => {
    ReactPixel.track(event);
}