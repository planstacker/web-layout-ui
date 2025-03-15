import Head from "next/head.js";
import { Fragment } from "react";
import { cleanString } from "../utils";

export default function Header({pageTitle, 
    pageMetaDescription, useDefault = true}) {

    return (pageTitle || pageMetaDescription || useDefault) && 
           <Head children={<Fragment><title>{pageTitle ?? "PlanStacker - Easy Subscription & Pricing Management"}</title>
          <meta name="description" content={ pageMetaDescription ? cleanString(pageMetaDescription) : 
          cleanString(`Streamline subscription & pricing management with PlanStacker. 
          Create, customize, and track plans while integrating with Stripe & PayPal to grow your business`)} />
          <meta http-equiv='content-language' content='en'/></Fragment>}/>
}