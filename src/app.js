import express from "express";
import fplRouter from "./api/fpl/index.js"
import cors from "cors"

export const app = express();

// MIDDLEWARE
app.use(cors())
app.use(express.json())

// Routes
app.use(fplRouter)

// Global error handler
app.use((err, _req, res, _next) => {
    console.error('Error:', err?.message || err);
    res.status(err?.status || 500).json({
        error: err?.message || 'Internal Server Error',
        status: err?.status || 500
    });
});

// 404 handler
app.use('*', (_req, res) => {
    res.status(404).json({
        error: 'Route not found',
        status: 404
    });
});

// Only start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
    app.listen(6969, () => {
        console.log("Listening on PORT 6969");
    });
}