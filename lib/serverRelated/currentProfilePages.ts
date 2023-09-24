import {getAuth} from "@clerk/nextjs/server";
import { NextApiRequest } from "next";
import { db } from "./db";
//need to be different so it can be used in pages folder (auth is not used but getauth in pages)
export const currentProfilePages = async (req: NextApiRequest) => {
    const { userId } = getAuth(req);
  
    if (!userId) {
      return null;
    }
  
    const profile = await db.profile.findUnique({
      where: {
        userId
      }
    });
  
    return profile;
  }