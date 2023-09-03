const AuthLayout=({children}:{children: React.ReactNode})=>{
    return(
        <div className="bg-black/75 h-screen flex justify-center items-center">
            {children}
        </div>
    );
}
export default AuthLayout;