// errorMiddleware.js
module.exports = (err, req, res, next) => {
    console.error('Error details:', err); // Log full error object
    res.status(500).json({ success: false, message: err.message || 'Internal Server Error' });
};
