import { createUploadthing, type FileRouter } from "uploadthing/next";
 import { auth } from "@clerk/nextjs";
const f = createUploadthing();
 
 const handleAuth=()=>{
    const {userId}=auth();
    if(!userId) throw new Error("Unuathorised");
    return {
        userId:userId,
    }
 }
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  messageFile: f(["image", "pdf"]) //you can also add videos
    .middleware(() => handleAuth())
    .onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;