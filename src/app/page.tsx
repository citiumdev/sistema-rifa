"use client";

import { Button } from "@/components/ui/button";
import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const res = await client.hello.$get();
      return await res.json();
    },
  });

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      {isLoading ? <p>Cargando...</p> : null}
      {isError ? <p>Ocurrió un error</p> : null}
      {data ? <p>{data.message}</p> : null}
      <Button onClick={() => refetch()}>Recargar</Button>
    </main>
  );
}
