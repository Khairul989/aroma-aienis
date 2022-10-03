import { GetStaticPaths, GetStaticProps } from "next";
import { CakeModel } from "../../../models/cakeModel";
import { openDB } from "../../functions/opendb";
import { useRouter } from "next/router";

export type CakeDetailProps = CakeModel;

export default function CakeDetail({id, name, description, price, imageUrl}:CakeDetailProps){
    const router = useRouter();

    if(router.isFallback){
        return <div>Loading cake detail ...</div>
    }
    
    return <div>
        <h1>Hello cake detail</h1>
        <br /><br />
        <div>{id}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
        <div>{imageUrl}</div>
    </div>
}

export const getStaticProps: GetStaticProps<CakeDetailProps> = async ctx=>{
    
    const id = ctx.params?.id as string;
    const db = await openDB();
    const cake = await db.get('select * from cake where id=?', +id);

    return {props:cake};
}

export const getStaticPaths: GetStaticPaths<{id: string}> = async () =>{
    const db = await openDB();
    const cake = await db.all('select * from cake');
    const paths = cake.map(a => {
        return       {
            params:{
                id:a.id.toString()
            }
        }
    });
    
    return {
        fallback:true,
        paths,
    }
}