import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Box } from "@mui/material";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { CakeModel } from "../../models/cakeModel";
import { openDB } from "../functions/opendb";


export interface IndexProps{
    cakeModel: CakeModel[];
}

export default function Index({cakeModel}:IndexProps){
    return (
       <Box padding={4}>
         <Grid container spacing={5}>
        {cakeModel.map((cake) => (
            <Grid item xs={12} sm={3} key={cake.id}>
            <Link href="/cake/[id]" as={`/cake/${cake.id}`}>
                <a>
                <Card>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={cake.name }
                        height="300"
                        image={cake.imageUrl}
                        title={cake.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {cake.name}
                        </Typography>
                        <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        >
                        {cake.description}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </a>
            </Link>
            </Grid>
        ))}
        </Grid>
       </Box>
    );
}

export const getStaticProps: GetStaticProps = async ctxt =>{
    const db = await openDB();
    const cakeModel = await db.all('select * from cake');
    return { props: {cakeModel}};
}