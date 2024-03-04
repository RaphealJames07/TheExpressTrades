import axios from "axios";
import {useEffect, useState} from "react";

export const FetchTransactions = (userToken: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const url =
            "https://express-trades.vercel.app/api/v1/user/transactions";
        const headers = {
            Authorization: `Bearer ${userToken}`,
        };

        axios
            .get(url, {headers})
            .then((response) => {
                setData(response?.data?.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [userToken]);

    return {data, loading};
};
