import { apiClient } from "../apiClient/apiClient"

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getBookings = async () => {
    try {
        const response = await apiClient.get(`${BASE_URL}/api/bookings`)
    }
}