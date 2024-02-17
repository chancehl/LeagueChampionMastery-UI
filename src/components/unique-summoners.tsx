async function getUniqueSummoners() {
  const res = await fetch("http://localhost:8080/stats");

  if (!res.ok) {
    throw new Error("Failed to fetch unique summoner count");
  }

  return res.json();
}

export async function UniqueSummoners() {
  const data = await getUniqueSummoners();

  return (
    <div>
      <span className="text-xs flex">
        <p className="font-bold ml-0.5 mr-0.5">{data.uniqueSummoners}</p> unique
        summoners scanned
      </span>
    </div>
  );
}
