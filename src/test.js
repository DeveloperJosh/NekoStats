import axios from 'axios';

const testPost = async () => {
    try {
        const response = await axios.post('http://localhost:4000/api/track', {
            type: 'test_event',
            data: {
                message: 'This is a test event',
            },
        });
        console.log('Event tracked successfully:', response.data);
    } catch (error) {
        console.error('Error tracking event:', error);
    }
};

testPost();
