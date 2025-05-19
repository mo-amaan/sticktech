"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error(props) {
  const { error, reset } = props;

  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="page-conatiner">
      <h3>Something Went Wrong 😅</h3>
      <div>
        <button onClick={reset}>reset</button>
        <Link href={"/"}>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}
