
async function getData(){
    try {
        const { granularity, token } = req.query;
        const url = `${apiUrl}/candles/trade%3A${granularity}%3At${token}USD/hist`;
        const response = axios.get(url);
        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
};