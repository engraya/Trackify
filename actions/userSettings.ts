
"use server"

import { currentUser } from "@clerk/nextjs/server";
import { UpdateUserCurrenciesSchema } from "@schema/userSettings"
import { redirect } from "next/navigation";
import prisma from '@src/lib/prisma';

export async function UpdateUserCurrency(currency : string) {
    const parsedBody = UpdateUserCurrenciesSchema.safeParse({
        currency,
    });

    if (!parsedBody.success) {
        throw parsedBody.error;
    }

    const user = await currentUser();
    if (!user) {
        redirect("/sign-in");
    }

    const userSettings = await prisma.userSettings.update({
        where : {
            userId : user.id,
        },
        data : {
            currency,
        }
    });

    return userSettings;

} 