"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from 'next-auth/react'
import toast from "react-hot-toast";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);




            const result = await signIn('credentials', {
                redirect: false,
                email,
                password
            })
            if (result?.error) {
                toast.error(result?.error)
            } else {
                toast.success('Logged in successfully');
                router.push('/');
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }


    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-lg-5 shadow bg-light p-5">
                    <h2 className="mb-4 text-center">Login</h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" form-control mb-4"
                            placeholder="Enter Your Email"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=" form-control mb-4"
                            placeholder="Enter Your Password"
                        />
                        <button className="btn btn-primary btn-raised" disabled={loading || !email || !password}>
                            {loading ? 'Please Wait..' : 'Submit'}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
};