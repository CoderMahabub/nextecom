"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
    const [name, setName] = useState('Mahabub');
    const [email, setEmail] = useState('mahabub@gmail.com');
    const [password, setPassword] = useState('ma222111');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${process.env.API}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });
            const data = await response.json();
            if (!response.ok) {
                toast.error(data.err);
                setLoading(false);
            } else {
                toast.success("Registration Success ful");
                router.push('/login');
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
                    <h2 className="mb-4 text-center">Register</h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className=" form-control mb-4"
                            placeholder="Enter Your Name"
                        />
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
                        <button className="btn btn-primary btn-raised" disabled={loading || !name || !email || !password}>
                            {loading ? 'Please Wait..' : 'Submit'}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
};