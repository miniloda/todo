import LoginForm from "./LoginForm";

export default function LogIn() {
    return (
        <div className="flex items-center justify-center h-screen shadow-2xl bg-slate-300 shadow-black">
            <div className = "flex flex-row w-8/12 shadow-2xl rounded-xl h-4/5 bg-emerald-300 shadow-black">
                <div className = "w-4/6 h-full p-20">
                    <div>
                        <h1 className="text-3xl">Welcome back</h1>
                    </div>
                    <div>
                        <p>Enter your email and password below</p>
                    </div>
                    <div>
                        <LoginForm />
                    </div>
                </div>
                <div className="w-2/6 h-full">
                    <p>Sign in to your account</p>
                </div>
            </div>
        </div>
    );
}