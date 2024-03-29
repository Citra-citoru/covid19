"use client";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "./ui/card";
import Image from "next/image";
import { cardItem } from "@/lib/types";

export default function ItemCard({ name, description, imgPath }: cardItem) {
    return (
        <div className="w-[25vw] px-[1vw]">
            <a href="#">
                <Card className="hover:scale-105 transform transition duration-300 bg-white">
                    <CardHeader>
                        <CardTitle className="inline-block m-auto">
                            <div className="min-w-[5vw]">
                                <Image
                                    src={imgPath}
                                    alt={name}
                                    loading="lazy"
                                    className="rounded-t-md object-cover"
                                    width={240}
                                    height={240}
                                />
                            </div>
                        </CardTitle>
                        <CardContent>
                            <div className="text-[1.2vw] text-center text-bold py-[2vh]">
                                {name}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="text-[0.8vw] text-center pb-[4vh]">
                                {description}
                            </div>
                        </CardFooter>
                    </CardHeader>
                </Card>
            </a>
        </div>
    )
}