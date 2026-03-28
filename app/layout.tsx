import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | mp-4',
        default: 'Homepage | mp-4',
    },
    description: 'Created by the Great Bidipta',
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}