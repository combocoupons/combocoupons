export const ssr = false;
export const prerender = true;
export const trailingSlash = 'ignore';

export async function load({fetch}:any) {

    const response = await fetch(" https://dl.dropboxusercontent.com/s/l2sbn74y25hd4n3/coupons.json", {
        mode: "cors"
        // headers: {
        //     "Access-Control-Allow-Origin": "*"
        // }
    })
    const body = await response.text();
    const coupons = JSON.parse(body.toString());
    return {
        coupons
    }
}
