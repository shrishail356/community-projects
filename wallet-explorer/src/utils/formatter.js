import moment from "moment";
export function shortenAddress(address)
{
    var trimmedString = "";
    if(address === "")
        return "unknown";
    if(address != null || address.length>16)
    {
        trimmedString=(address.substring(0,8)+"..."+address.substring(address.length - 5));
    }
    else
    {
        trimmedString = address ?? ""; 
    }
    return trimmedString;
}

export function getRelativetime(ISOString)
{
    return moment(ISOString).fromNow();
}

export function getFullTime(ISOString)
{
    return (moment(ISOString).format('lll') + " (UTC)");
}