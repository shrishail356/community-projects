import axios from "axios";
import { useEffect,useState } from "react";

const NftOne = (props) => {
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    useEffect(() => {
        const endPoint = process.env.REACT_APP_URL_EP;
        const xKey = process.env.REACT_APP_API_KEY;

        let reqUrl = `${endPoint}nft/read?network=devnet&token_address=${props.nft.nft_address}`;

        axios({
            url: reqUrl,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": xKey,
            },
        })
            .then((res) => {
                console.log(res.data);
                
                if (res.data.success) {
                    setName(res.data.result.name)
                    setImage(res.data.result.cached_image_uri)
                }
                

            })
            .catch((err) => {
                console.warn(err);
                

            });

    }, [props.nft.nft_address]);
    return (
        <div
            className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 port-cust-padding"
        >
            <div className="cards-outer-port">
                <div className="inner-box">

                    <div className="inner-box-img-container">
                        <img src={image} alt="NftImage" />
                    </div>

                    <div className="row pt-3">
                        <div className="col-7 col-xl-7">
                            <p
                                className="port-para-2 text-start"
                                style={{ wordWrap: "break-word" }}
                            >
                                {name}
                            </p>
                        </div>
                        <div className="col-5 col-xl-5">
                            <p
                                className="port-para-2 text-end text-xl-end"
                                style={{ wordWrap: "break-word" }}
                            >
                                {JSON.stringify(props.nft.price) }{" "+props.nft.currency_symbol}
                            </p>
                        </div>

                    </div>
                    <div className="row pb-3">
                        <div className="col-10 col-xl-6 mx-auto">
                            <div className="white-button-container-sm" ><button onClick={() => {props.buyList(props.nft.nft_address,props.nft.seller_address,props.nft.price)}}>Buy</button></div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NftOne;
