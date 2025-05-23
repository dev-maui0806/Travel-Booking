
import React from "react"
import Link from "next/link";

import { Suspense } from "react"
import Header from "@/components/layout/Header"
import Error404Component from "@/components/404/Error404Component"

import "../../app/globals.css";



const ERROR404:React.FC = () => {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Header/>
            <Error404Component/>
        </Suspense>
    )
}

export default ERROR404;