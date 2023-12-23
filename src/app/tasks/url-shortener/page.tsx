"use client";
import { useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { triggerToast } from "@/libs/utils";
export default function Page() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [time, setTime] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const handleSubmit = async () => {
    if (url.length === 0) {
      return;
    }
    setTime(5);
    const src = `https://is.gd/create.php?format=json&url=${url}`;

    const res = await fetch(src, { mode: "cors" });
    const json = (await res.json()) as { shorturl: string };
    setShortUrl(json.shorturl);
    await navigator.clipboard.writeText(json.shorturl);
    triggerToast("Copied Shortened URL to Clipboard", "success");
    setUrl("");
  };
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;

    if (time > 0) {
      setDisabled(true);
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (time === 0) {
      if (interval !== undefined) {
        clearInterval(interval);
      }
      setDisabled(false);
      setTime(0);
    }

    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [time]);
  return (
    <>
      <div className="mx-auto mt-12 flex max-w-max flex-col justify-center gap-2">
        <Input
          disabled={disabled}
          value={url}
          startContent={"https://"}
          onChange={(e) => setUrl(e.target.value)}
          label={disabled ? `Please Wait ${time}` : "Enter URL to Shorten"}
        />
        <Button
          color="primary"
          variant="flat"
          disabled={disabled}
          onClick={handleSubmit}
        >
          Get Short Url
        </Button>
        <h1
          className={`w-full rounded-xl bg-default-50 p-2 text-center transition-all ${
            shortUrl ? "opacity-100" : "opacity-0"
          }`}
        >
          {shortUrl}
        </h1>
      </div>
    </>
  );
}
