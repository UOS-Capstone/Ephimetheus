import { codeType } from './codeType';

interface postCodeType {
    status: number;
    message: string;
}
export default async function PostCode(data: codeType): Promise<postCodeType> {
    

    await fetch(`${process.env.REACT_APP_base_url}/save`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res: any) => {
            console.log("done", res);
            return {
                status: res.status,
                message: 'success',
            };
        })
        .catch((err: any) => {
            console.error("holy",err);
            return {
                status: err.status,
                message: 'error',
            };
        });
    return {
        status: 0,
        message: 'nothingr',
    };
}
