import React, { useEffect , useState } from 'react';

//api 
import { getCoin } from '../services/api';

//components
import Loading from './Loading';
import Coin from './Coin';

//styles
import styles from './Landing.module.css';

const Landing = () => {

    const [search , setSearch] = useState("")
    const [coins , setCoins] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () =>{
            const data = await getCoin();
            setCoins(data)
        }

        fetchAPI();
    }, [])

    const changeHandler = (event) => {
        setSearch(event.target.value);
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <input type="text" className={styles.input} placeholder="Search" value={search} onChange={changeHandler}/>
            <div>
                {
                    coins.length ?
                    <div className={styles.coinContainer}>
                        {
                            searchedCoins.map(item => <Coin 
                                                    key={item.id} 
                                                    name={item.name}
                                                    image={item.image}
                                                    symbol={item.symbol}
                                                    price={item.current_price}
                                                    marketCap={item.market_cap}
                                                    priceChange={item.price_change_percentage_24h}
                                                />) 
                        }
                    </div> :
                    <Loading />
                }
            </div>
        </>
    );
};

export default Landing;