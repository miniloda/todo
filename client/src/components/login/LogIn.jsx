import LoginForm from "./LoginForm";

export default function LogIn() {
    return (
        <div className="flex items-center justify-center h-screen shadow-2xl bg-slate-300 shadow-black">
            <div className = "flex flex-row justify-center w-11/12 shadow-2xl max-w-96 rounded-xl h-4/5 bg-emerald-300 shadow-black">
                <div className = "w-full h-full p-10">
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
            </div>
        </div>
    );
}