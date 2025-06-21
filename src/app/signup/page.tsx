"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "@/firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof FirebaseError) {
        setErrorMsg(error.code);
      } else if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg("회원가입에 실패했습니다");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-bold">회원가입</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md rounded border p-4 shadow dark:border-gray-700 dark:bg-gray-950">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        />
        <button
          type="submit"
          className="mt-2 rounded bg-purple-600 py-2 text-white hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
        >
          가입하기
        </button>
        {errorMsg && (
          <p className="mt-2 text-red-600 dark:text-red-400 text-sm">{errorMsg}</p>
        )}
      </form>
      <Link href="/login" className="text-violet-700 hover:underline dark:text-violet-300">
        로그인 하러가기
      </Link>
    </div>
  );
}
