import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-bold">회원가입</h1>
      <form className="flex flex-col gap-3 w-full max-w-md rounded border p-4 shadow dark:border-gray-700 dark:bg-gray-950">
        <input
          type="text"
          placeholder="아이디"
          className="border p-2 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        />
        <input
          type="email"
          placeholder="이메일"
          className="border p-2 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="border p-2 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        />
        <button
          type="submit"
          className="mt-2 rounded bg-purple-600 py-2 text-white hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
        >
          가입하기
        </button>
      </form>
      <Link href="/login" className="text-violet-700 hover:underline dark:text-violet-300">
        로그인 하러가기
      </Link>
    </div>
  );
}
