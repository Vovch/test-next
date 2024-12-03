import { Suspense } from "react";
import NewComponent from './NewComponent';

export default function Home() {
  return (
    <>
      <h1>Hi</h1>
      <Suspense fallback={<>Hi...</>}>
        <NewComponent />
      </Suspense>
    </>
  );
}
