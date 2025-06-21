import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-3xl font-bold">로그인</h1>
      <form className="flex flex-col gap-3 w-full max-w-md rounded border p-4 shadow dark:border-gray-700 dark:bg-gray-950">
        <input
          type="text"
          placeholder="아이디"
          className="border p-2 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="border p-2 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        />
        <button
          type="submit"
          className="mt-2 rounded bg-violet-600 py-2 text-white hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-800"
        >
          로그인
        </button>
      </form>
      <Link href="/signup" className="text-purple-700 hover:underline dark:text-purple-300">
        회원가입
      </Link>
    </div>
  );
}
